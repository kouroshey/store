import FirstArrival from "./new-arrivals/FirstArrival"
import SecondArrival from "./new-arrivals/SecondArrival"
import ThirdArrival from "./new-arrivals/ThirdArrival"
import FourthArrival from "./new-arrivals/FourthArrival"
import MainContainer from "../common/MainContainer"

const Arrivals = () => {
    return (
        <MainContainer>
            <section className="flex flex-col gap-4 items-center md:flex-row flex-wrap justify-center">
                <FirstArrival />
                <FirstArrival />
                <FirstArrival />
                <FirstArrival />
                {/* <SecondArrival />
                <ThirdArrival />
                <FourthArrival /> */}
            </section>
        </MainContainer>
    )
}

export default Arrivals