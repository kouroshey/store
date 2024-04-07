import { useState } from 'react'
import { Login } from './forms/Login'
import { Signup } from './forms/Signup'

const AuthLayout = () => {
    const [isSignedUp, setIsSignedUp] = useState(true)

    if (isSignedUp) {
        return (
            <Login setIsSignedUp={setIsSignedUp} />
        )
    } else {
        return (
            <Signup setIsSignedUp={setIsSignedUp} />
        )
    }
}

export default AuthLayout