import CardCategory from '../../components/common/CardCategory';
import ImageSlider from '../../components/common/ImageSlider/ImageSlider';
import FirstIconBoxes from '../../components/Home/FirstIconBoxes';
import WearKinds from '../../components/Home/WearKinds';
import Arrivals from '../../components/Home/Arrivals';
import FeaturedProduct from '../../components/common/FeaturedProduct';
import NewProduct from '../../components/common/NewProduct';
import { products } from '../../data';

const Home = () => {

  return (
    <main className="flex flex-col gap-12">
      <ImageSlider />
      <FirstIconBoxes />
      <WearKinds />
      <FeaturedProduct products={products} title={'FEATURED PRODUCTS'} titleBtn={'More Product'} />
      <NewProduct products={products} title={'NEW ARRIVALS'} titleBtn={'View All'} />
      <Arrivals />
      <div className="flex w-full justify-around">{<CardCategory />}</div>
    </main>
  );
};

export default Home;
