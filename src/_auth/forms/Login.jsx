import { supabase } from "../../lib/supabase/config"

const Login = () => {
    // console.log(supabase.auth.signInWithOAuth({ provider: "google" }));
    const loginHandler = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                queryParams: {
                    accessType: "offline",
                    prompt: "consent",
                }
            }
        })
    }

    return (
        <div>
            <button onClick={loginHandler}>login</button>
        </div>
    )
}

export default Login