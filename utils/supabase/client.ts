import { createBrowserClient } from '@supabase/ssr';

export const createClient = () =>
  createBrowserClient(
    'https://lfavactojhrgcjvqeewj.supabase.co'!,
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmYXZhY3RvamhyZ2NqdnFlZXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMTIzNjcsImV4cCI6MjA1OTU4ODM2N30.mx6_sn2DOcMGiu5y5Wt9uErldhcuVRV7SM5LnnjqzKA'!
  );
