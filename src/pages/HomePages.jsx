import Discover from "../provider/Discover";
import Hero from "../provider/Hero";
import Headers from "../component/Headers";
import Footer from "../component/Footer";
const HomePages = () => {
  return (
    <>
    <Headers/>
      <Hero />
      <Discover />
      <Footer/>
    </>
  );
};

export default HomePages;
