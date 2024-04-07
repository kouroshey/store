
export const Login = ({ setIsSignedUp }) => {

    const redirectToSignup = () => {
        setIsSignedUp(false)
    }

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

    return (
        <div className="flex flex-col gap-4">
            <button onClick={loginHandler}>login</button>
            <button>U have not register yet? <span className="text-red-500" onClick={redirectToSignup}>SignUp</span></button>
        </div>
    )
}