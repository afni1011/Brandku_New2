import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import { featureData } from "./data/features";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main>
        <HeroSection />
        <CardGrid features={featureData} />
      </main>

      <Footer />
    </div>
  );
};

export default App;