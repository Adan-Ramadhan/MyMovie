import Discover from "../provider/Discover";
import Hero from "../provider/Hero";
import Headers from "../component/Headers";
import Footer from "../component/Footer";
import Toprate from "../provider/Toprate";
const HomePages = () => {
  return (
    <>
    <Headers/>
      <Hero />
      <Discover />
      <Toprate/>
      <Footer/>
    </>
  );
};

export default HomePages;
