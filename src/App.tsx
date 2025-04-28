import { AboutUs } from "./components/aboutUs";
import { BestProductsCarousel } from "./components/bestSellersCarousel";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <BestProductsCarousel />
      <AboutUs />
    </>
  );
}

export default App;
