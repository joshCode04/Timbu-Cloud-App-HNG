import "./App.css";
import Nav from "./MainPage/nav.jsx";
import Hero from "./MainPage/Hero";
import Cards from "./MainPage/Cards";
import Footer from "./MainPage/Footer";
import Cart from "./OtherPages/Cart.jsx";
import { Routes, Route } from "react-router-dom";
import LazyLoadedDiv from "./MainPage/LazyLoadedDiv.jsx";
import Checkout from "./OtherPages/Checkout.jsx";
import Payment from "./OtherPages/Payment.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/details" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  );
}
function HomePage() {
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
          <Cards />
        </section>
        <section>
          <Footer />
        </section>
      </LazyLoadedDiv>
    </section>
  );
}

export default App;
