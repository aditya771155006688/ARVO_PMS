import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    'https://lfavactojhrgcjvqeewj.supabase.co'!,
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmYXZhY3RvamhyZ2NqdnFlZXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMTIzNjcsImV4cCI6MjA1OTU4ODM2N30.mx6_sn2DOcMGiu5y5Wt9uErldhcuVRV7SM5LnnjqzKA'!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
