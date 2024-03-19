import CardProduct from '../components/common/CardProduct/CardProduct';
import CardCategory from '../components/common/CardCategory/CardCategory';
import ProductCardList from '../components/common/ProductCardList/ProductCardList';
import ImageSlider from '../components/common/ImageSlider/ImageSlider';
import MainContainer from '../components/common/MainContainer';

const Home = () => {
    return (
        <main className='flex flex-col gap-12'>
            <ImageSlider />
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