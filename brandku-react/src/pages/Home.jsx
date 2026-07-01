import { useState } from "react";

import HeroSection from "../components/HeroSection";
import CardGrid from "../components/CardGrid";
import LoginDemo from "../components/LoginDemo";

const Home = ({ features, loading }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <HeroSection onStart={() => setIsLoginOpen(true)} />

      {loading ? (
        <p className="py-10 text-center text-slate-500">
          Memuat fitur...
        </p>
      ) : (
        <CardGrid features={features} />
      )}

      <LoginDemo
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
};

export default Home;