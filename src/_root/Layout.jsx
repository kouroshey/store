/* eslint-disable react/prop-types */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import mainBg from "../../public/assets/img/1.png"

const Layout = ({ children }) => {
  const sectionStyle = {
    backgroundImage: `url('${mainBg}')`,
  };
  return (
    <div className="bg-image bg-cover bg-no-repeat bg-center bg-fixed" style={sectionStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
