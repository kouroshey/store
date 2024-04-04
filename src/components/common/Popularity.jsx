import emptyStarIcon from "../../../public/assets/icons/star-empty.svg"
import starIcon from "../../../public/assets/icons/star.svg"

const Popularity = ({ popularity }) => {
    let popularityArray = [
        {
            id: 1,
            src: emptyStarIcon
        },
        {
            id: 2,
            src: emptyStarIcon
        },
        {
            id: 3,
            src: emptyStarIcon
        },
        {
            id: 4,
            src: emptyStarIcon
        },
        {
            id: 5,
            src: emptyStarIcon
        },
    ]

    const popularityArrayBuilder = () => {
        const starCount = Number(popularity)
        if (popularity) {
            for (let i = 1; i <= starCount; i++) {
                popularityArray.shift()
            }

            for (let i = 1; i <= starCount; i++) {
                popularityArray.unshift({
                    id: i,
                    src: starIcon
                })
            }
        }
    }
    popularityArrayBuilder()
    const stars = popularityArray.map(star => (
        <img key={star.id} src={star.src} className='w-4' />
    ))
    return (
        <>
            {stars && stars}
        </>
    )
}

export default Popularity