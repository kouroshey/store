import { Button } from "../common/Button"
import Input from "../common/Input"

const AccountDetails = () => {
    const formSubmitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <section>
            <form action="#" onSubmit={e => formSubmitHandler(e)}>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-4 flex-col md:flex-row w-full">
                        <Input
                            label="First Name"
                            type="text"
                            id="first-name"
                            placeHolder="please insert your first name"
                        />
                        <Input
                            label="Last Name"
                            type="text"
                            id="last-name"
                            placeHolder="please insert your last name"
                        />
                    </div>
                    <Input
                        label={"Display Name"}
                        id={"display-name"}
                        type={"text"}
                        placeHolder={"Please Insert Your Display Name"}
                    />
                    <Input
                        label={"Email Address"}
                        id={"email-address"}
                        type={"email"}
                        placeHolder={"Please Insert Your Email Address"}
                    />
                    <Input
                        label={"Current Password"}
                        id={"current-password"}
                        type={"password"}
                        placeHolder={"Please Insert Your Current Password"}
                    />
                    <Input
                        label={"New password"}
                        id={"new-password"}
                        type={"password"}
                        placeHolder={"Please Insert Your New password"}
                    />
                    <Input
                        label={"Confirm New Passowrd"}
                        id={"confirm-password"}
                        type={"password"}
                        placeHolder={"Please Confirm Your New Passowrd"}
                    />
                    <Button
                        btnUrl={""}
                        text={"SAVE CHANGES"}
                        buttonStyle={"transparent"}
                        customStyle={"w-max"}
                    />
                </div>
            </form>
        </section>
    )
}

export default AccountDetails