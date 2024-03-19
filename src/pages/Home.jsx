import CardProduct from '../components/common/CardProduct';
import CardCategory from '../components/common/CardCategory';
import ProductCardList from '../components/common/ProductCardList';
import ImageSlider from '../components/common/ImageSlider/ImageSlider';
import MainContainer from '../components/common/MainContainer';
import FirstIconBoxes from '../components/Home/FirstIconBoxes';

const Home = () => {
    return (
        <main className='flex flex-col gap-12'>
            <ImageSlider />
            <FirstIconBoxes />
            <MainContainer>
                <div className="flex w-full justify-around">
                    {<CardCategory />}
                </div>

                <div className="flex mt-1 w-full justify-around mb-1">
                    <ProductCardList />
                    <ProductCardList />
                </div>

                <div className="flex  mt-1 w-full justify-around mb-1">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </MainContainer>
        </main>
    )
}

export default Home