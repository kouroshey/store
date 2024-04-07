export const Signup = ({ setIsSignedUp }) => {

    const redirectToSignup = () => {
        setIsSignedUp(true)
    }

    return (
        <div className="flex flex-col gap-4">
            <button>signup</button>
            <button>u have account? <span className="text-red-500" onClick={redirectToSignup}>Login</span></button>
        </div>
    )
}