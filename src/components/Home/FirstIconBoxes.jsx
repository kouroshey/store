import IconBox from "../common/IconBox"
import { firstIconBoxesData } from "../../data"
import MainContainer from "../common/MainContainer"

const FirstIconBoxes = () => {
    return (
        <div className="border-y border-y-border-1">
            <MainContainer>
                <div className="flex flex-col md:flex-row w-full justify-between py-4">
                    {firstIconBoxesData.map(item => (
                        <IconBox border={item.id !== "1" && true} key={item.id} icon={item.icon} title={item.title} subtitle={item.subtitle} />
                    ))}
                </div>
            </MainContainer>
        </div>
    )
}

export default FirstIconBoxes