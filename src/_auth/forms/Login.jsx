import { supabase } from "../../lib/supabase/config"
import { useLoginHandler } from "../../lib/react-query/queriesAndMutations"
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export const Login = ({ setIsSignedUp }) => {

    const {
        isPending,
        mutateAsync: loginHandler
    } = useLoginHandler()

    const redirectToSignup = () => {
        setIsSignedUp(false)
    }

    // sb-hdtoxgvpkioavkookevq-auth-token

    return (
        <div className="w-full flex justify-center h-screen items-center">
            <div className="flex flex-col gap-4 w-1/2 justify-center items-center">
                <button onClick={loginHandler}>login</button>
                <button>U have not register yet? <span className="text-red-500" onClick={redirectToSignup}>SignUp</span></button>
                <Auth providers={["google"]} supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
            </div>
        </div>
    )
}