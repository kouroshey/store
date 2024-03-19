import { wearKindsData } from "../../data"
import MainContainer from "../common/MainContainer"
import WearKind from "../common/WearKind"

const WearKinds = () => {
    return (
        <MainContainer>
            <div className="flex flex-wrap justify-between">
                {wearKindsData.map(item => (
                    <WearKind key={item.id} img={item.img} title={item.title} subtitle={item.subtitle} />
                ))}
            </div>
        </MainContainer>
    )
}

export default WearKinds