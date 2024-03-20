import FirstArrival from "./new-arrivals/FirstArrival"
import SecondArrival from "./new-arrivals/SecondArrival"
import ThirdArrival from "./new-arrivals/ThirdArrival"
import FourthArrival from "./new-arrivals/FourthArrival"
import MainContainer from "../common/MainContainer"

const Arrivals = () => {
    return (
        <MainContainer>
            <section className="flex justify-between h-[30rem]">
                <FirstArrival />
                <SecondArrival />
                <ThirdArrival />
                <FourthArrival />
            </section>
        </MainContainer>
    )
}

export default Arrivals