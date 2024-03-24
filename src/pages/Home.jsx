import CardProduct from '../components/common/CardProduct';
import CardCategory from '../components/common/CardCategory';
import ProductCardList from '../components/common/ProductCardList';
import ImageSlider from '../components/common/ImageSlider/ImageSlider';
import FirstIconBoxes from '../components/Home/FirstIconBoxes';
import WearKinds from '../components/Home/WearKinds';
import Arrivals from '../components/Home/Arrivals';
import FeaturedProduct from '../components/common/FeaturedProduct';
import NewProduct from '../components/common/NewProduct';
// import TopProduct from '../components/common/TopProduct';

const Home = () => {
  return (
    <main className="flex flex-col gap-12">
      <ImageSlider />
      <FirstIconBoxes />
      <WearKinds />
      <FeaturedProduct title={'FEATURED PRODUCTS'} titleBtn={'More Product'} />
      <NewProduct title={'FEATURED PRODUCTS'} titleBtn={'More Product'} />

<<<<<<< HEAD
      <Arrivals />
      <div className="flex w-full justify-around">{<CardCategory />}</div>

      {/* <div className="flex">
        <TopProduct title={''} />
        <TopProduct title={''} />
        <TopProduct title={''} />
        <TopProduct title={''} />
      </div> */}
    </main>
  );
};
=======
            <div className="flex mt-1 w-full justify-around mb-1">
                <ProductCardList />
            </div>

            <div className="flex  mt-1 w-full justify-around mb-1">
                <CardProduct />
            </div>
        </main>
    )
}
>>>>>>> be0f662b34f76732a469a5eb3226ce71808b6e20

export default Home;
