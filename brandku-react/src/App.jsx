import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

import { useFeatures } from "./hooks/useFeatures";

const App = () => {
  const { features, loading } = useFeatures();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        <Header />

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home features={features} loading={loading} />}
            />
            <Route path="/tentang" element={<About />} />
            <Route path="/harga" element={<Pricing />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;