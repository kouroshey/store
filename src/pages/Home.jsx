import CardCategory from '../components/common/CardCategory';
import ImageSlider from '../components/common/ImageSlider/ImageSlider';
import FirstIconBoxes from '../components/Home/FirstIconBoxes';
import WearKinds from '../components/Home/WearKinds';
import Arrivals from '../components/Home/Arrivals';
import FeaturedProduct from '../components/common/FeaturedProduct';
import NewProduct from '../components/common/NewProduct';
import BreadCrump from '../components/BreadCrumb';
// import TopProduct from '../components/common/TopProduct';

const Home = () => {

  return (
    <main className="flex flex-col gap-12">
      <BreadCrump />
      <ImageSlider />
      <FirstIconBoxes />
      <WearKinds />
      <FeaturedProduct title={'FEATURED PRODUCTS'} titleBtn={'More Product'} />
      <NewProduct title={'FEATURED PRODUCTS'} titleBtn={'More Product'} />

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

export default Home;
