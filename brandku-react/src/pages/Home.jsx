import HeroSection from "../components/HeroSection";
import CardGrid from "../components/CardGrid";

const Home = ({ features }) => {
  return (
    <>
      <HeroSection />
      <CardGrid features={features} />
    </>
  );
};

export default Home;