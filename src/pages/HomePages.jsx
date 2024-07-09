import Discover from "../provider/Discover";
import Hero from "../provider/Hero";
import Headers from "../component/Headers";
const HomePages = () => {
  return (
    <>
    <Headers/>
      <Hero />
      <Discover />
    </>
  );
};

export default HomePages;
