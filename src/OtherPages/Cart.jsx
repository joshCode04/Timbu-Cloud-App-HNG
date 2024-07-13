import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loader from "/loader.svg";
import PropTypes from "prop-types";
import Nav from "../MainPage/nav";
import "../MainPage/nav.css";
import Footer from "../MainPage/Footer";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      setCartItems(cartData);
    }
  }, []);

  const handleIncrement = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const handleDecrement = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    localStorage.removeItem("cartData");
    setCartItems([]);
  };

  const handleNavigateCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/checkout");
    }, 1500);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const itemPrice =
      item.current_price && item.current_price[0].NGN[0] !== null
        ? parseFloat(item.current_price[0].NGN[0])
        : 0;
    return acc + itemPrice * item.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }, [cartItems]);

  const goBack = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <section className="">
      <Nav />
      <div className="bg-[#8F8F8F] w-full h-[1px] mb-8 max-sm:hidden"></div>
      <section>
        <div className="flex justify-between items-center pb-9">
          <div className="flex pl-10">
            <span
              onClick={goBack}
              className="bg-transparent h-9 pt-2 px-2 shadow text-black rounded-md font-semibold text-sm sm:text-base hover:shadow-xl transition-colors "
            >
              <ion-icon name="arrow-back-outline"></ion-icon>
            </span>
            <p className="pl-16 max-sm:pl-6 montserat md:text-5xl text-2xl font-bold max-sm:font-semibold text-[#272727]">
              Cart
            </p>
          </div>
          <div className="flex justify-end mr-4 sm:mr-24">
            <button
              onClick={handleClearCart}
              className="bg-[#FF4500] text-white py-3 px-6 rounded-md font-semibold text-xl sm:text-2xl hover:bg-[#FF6347] transition-colors"
            >
              Delete All
            </button>
          </div>
        </div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mx-4 sm:mx-24 mb-4"
          >
            <div className="flex justify-between border pl-4 py-4 pr-0 [340px]:py-4 md:pr-4 shadow-lg flex-grow">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <img
                    src={
                      item.photos && item.photos.length > 0
                        ? `https://api.timbu.cloud/images/${item.photos[0].url}`
                        : ""
                    }
                    alt={item.name}
                    className="h-24 w-24 md:h-60 md:w-60"
                  />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <p className="montserat font-semibold text-xs md:text-[33px] [892px]:text-4xl text-[#272727]">
                    {item.name}
                  </p>
                  <div className="flex flex-col montserat font-normal text-xs md:text-2xl text-[#272727] gap-2">
                    <p>Size: XL</p>
                    <p className="flex items-center">
                      Color
                      <span className="bg-orange-500 rounded-full ml-2 w-4 h-4 sm:w-6 sm:h-6"></span>
                    </p>
                  </div>
                  <p className="text-[#8F8F8F] font-normal text-xs md:text-2xl federant">
                    Stride
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between py-1">
                <p className="text-[#002482] font-semibold text-lg md:text-[40px] inter text-center">
                  N
                  {(
                    parseFloat(
                      item.current_price ? item.current_price[0].NGN[0] : 0
                    ) * item.quantity
                  ).toLocaleString()}
                </p>

                <div className="flex gap-3 sm:gap-10">
                  <span
                    onClick={() => handleDecrement(item.id)}
                    className="bg-[#D9D9D9] text-black px-2 sm:px-3 md:px-[8px] h-8 sm:h-10 font-medium text-xl sm:text-3xl rounded cursor-pointer"
                  >
                    -
                  </span>
                  <p className="montserat text-xl sm:text-3xl cursor-default">
                    {item.quantity}
                  </p>
                  <span
                    onClick={() => handleIncrement(item.id)}
                    className="bg-[#D9D9D9] text-black px-1.5 sm:px-2 md:px-[5px] h-8 sm:h-10 font-medium text-xl sm:text-3xl rounded cursor-pointer"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-transparent border-2 text-black py-2 px-4 rounded-md font-semibold text-base sm:text-xl hover:bg-gray-200 transition-colors ml-4 max-lg:hidden"
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        ))}
        <div>
          <p className="text-[#272727] font-medium text-2xl sm:text-[40px] montserat pl-4 sm:pl-36 pt-16 pb-6">
            CART SUMMARY
          </p>
          <div className="h-[2px] w-full bg-[#D9D9D9DD]"></div>
          <div className="flex justify-between mx-4 sm:mx-24 mt-8 px-4 sm:px-10 items-center">
            <p className="font-medium text-xl sm:text-[32px] montserat">SUM</p>
            <p className="text-[#272727] font-medium text-3xl sm:text-[64px] montserat">
              N{totalPrice.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-4 sm:mx-24 mt-8 mb-[185px]">
          <button
            onClick={handleNavigateCheckout}
            className={`bg-[#0C4395] w-[280px] sm:w-[576px] h-[48px] sm:h-[96px] rounded-[10px] sm:rounded-[20px] montserat text-white text-xl sm:text-2xl font-semibold hover:scale-105 transition-transform ${
              isLoading ? "pl-64 max-sm:pl-28" : ""
            }`}
          >
            {isLoading ? (
              <img
                src={loader}
                alt="loader"
                className="h-7 w-14 sm:h-14 sm:w-28"
              />
            ) : (
              "Proceed to Checkout"
            )}
          </button>
        </div>

        <Footer />
      </section>
    </section>
  );
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
      current_price: PropTypes.arrayOf(
        PropTypes.shape({
          NGN: PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])])
              .isRequired
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Cart;
