import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./MainPage/nav.jsx";
import Hero from "./MainPage/Hero";
import Cards from "./MainPage/Cards";
import Footer from "./MainPage/Footer";
import Cart from "./OtherPages/Cart.jsx";
import LazyLoadedDiv from "./MainPage/LazyLoadedDiv.jsx";
import Checkout from "./OtherPages/Checkout.jsx";
import Payment from "./OtherPages/Payment.jsx";
import { CartProvider } from "./MainPage/cartContext.jsx";
import { getProducts } from "./services/timbuApi";
import PropTypes from "prop-types";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log("Fetched products data:", data);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/details" element={<Cart products={products} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </CartProvider>
  );
}

function HomePage({ products }) {
  console.log("Rendering HomePage with products:", products);

  return (
    <section>
      <LazyLoadedDiv>
        <section>
          <Nav />
        </section>
        <section>
          <Hero />
        </section>
        <section>
          <Cards products={products} />
        </section>
        <section>
          <Footer />
        </section>
      </LazyLoadedDiv>
    </section>
  );
}

HomePage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default App;
