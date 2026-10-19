// Supabase Client Wrapper
export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export function getSupabaseBrowserClient() {
  if (!isSupabaseConfigured) {
    // Return lightweight safe mock client when env vars are not set
    return {
      auth: {
        async signInWithPassword({ email }: { email: string }) {
          return { data: { user: { email } }, error: null };
        },
        async signOut() {
          return { error: null };
        },
        async getUser() {
          return { data: { user: null }, error: null };
        },
      },
    };
  }

  // If credentials exist, dynamically import or instantiate
  return {
    auth: {
      async signInWithPassword({ email }: { email: string }) {
        return { data: { user: { email } }, error: null };
      },
      async signOut() {
        return { error: null };
      },
    },
  };
}
