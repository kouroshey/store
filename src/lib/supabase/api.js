const loginHandler = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        accessType: "offline",
        prompt: "consent",
      },
    },
  });
};
