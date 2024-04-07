import { useState } from 'react'
import { Login } from './forms/Login'
import { Signup } from './forms/Signup'
import { useAuthContext } from '../context/AuthContext'

const AuthLayout = () => {
    const [isSignedUp, setIsSignedUp] = useState(true)
    const authContext = useAuthContext()

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