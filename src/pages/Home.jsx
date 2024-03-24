import CardProduct from '../components/common/CardProduct';
import CardCategory from '../components/common/CardCategory';
import ProductCardList from '../components/common/ProductCardList';
import ImageSlider from '../components/common/ImageSlider/ImageSlider';
import FirstIconBoxes from '../components/Home/FirstIconBoxes';
import WearKinds from '../components/Home/WearKinds';
import Arrivals from '../components/Home/Arrivals';

const Home = () => {
    return (
        <main className='flex flex-col gap-12'>
            <ImageSlider />
            <FirstIconBoxes />
            <WearKinds />
            <Arrivals />
            <div className="flex w-full justify-around">
                {<CardCategory />}
            </div>

            <div className="flex mt-1 w-full justify-around mb-1">
                <ProductCardList />
            </div>

            <div className="flex  mt-1 w-full justify-around mb-1">
                <CardProduct />
            </div>
        </main>
    )
}

export default Home