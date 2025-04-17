// app/api/invite-user/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { InviteUserEmail } from '@/emails/invite-user'

const resend = new Resend(process.env.RESEND_API_KEY!)  // ← secret only on server

export async function POST(request: Request) {
  try {
    const {
      to,
      username,
      projectName,
      invitedByUsername,
      projectId,
      role,
    } = await request.json()

    // build the email HTML (or React component) in one place:
    const html = InviteUserEmail({
      username,
      projectName,
      invitedByUsername,
      inviteLink: `${request.headers.get('origin')}/invites/${projectId}?role=${role}`,
    })

    console.log(html)
    // send via Resend
    await resend.emails.send({
      from: 'team@pms.4rvo.com',
      to,
      subject: `You’ve been invited to join ${projectName}`,
      react: html,
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('📧 invite error', err)
    return NextResponse.json(
      { error: err.message || 'Unknown error' },
      { status: 500 }
    )
  }
}
