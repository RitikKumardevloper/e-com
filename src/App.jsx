import "./App.css";
import Banner from "./Components/Banner/Banner";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Products/Product";
import Subscribe from "./Components/Subscribe/Subscribe";
import TopProducts from "./Components/TopProducts/TopProducts";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Product /> 
    </>
  );
}

export default App;
