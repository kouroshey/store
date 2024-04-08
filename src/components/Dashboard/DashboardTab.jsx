import { useAuthContext } from "../../context/AuthContext"

const DashboardTab = () => {
    const authContext = useAuthContext()

    return (
        <section className="flex flex-col gap-4">
            <p className="text-sm">Hello {authContext.user.name} (not {authContext.user.name}? Logout)</p>
            <p className="text-sm">From your account dashboard you can view your Recent Orders, manage your shipping and billing addesses and edit your password and account details</p>
        </section>
    )
}

export default DashboardTab