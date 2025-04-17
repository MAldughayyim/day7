import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <ProductList />
      <Footer />
    </div>
  );
}

export default HomePage;
