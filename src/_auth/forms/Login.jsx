
export const Login = ({ setIsSignedUp }) => {

    const redirectToSignup = () => {
        setIsSignedUp(false)
    }

    return (
        <div className="flex flex-col gap-4">
            <button>login</button>
            <button>U have not register yet? <span className="text-red-500" onClick={redirectToSignup}>SignUp</span></button>
        </div>
    )
}