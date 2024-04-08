import { supabase } from "../../lib/supabase/config"
import { useLoginHandler } from "../../lib/react-query/queriesAndMutations"

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
        <div className="flex flex-col gap-4">
            <button onClick={loginHandler}>login</button>
            <button>U have not register yet? <span className="text-red-500" onClick={redirectToSignup}>SignUp</span></button>
        </div>
    )
}