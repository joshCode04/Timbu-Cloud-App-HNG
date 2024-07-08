import { useEffect, useState } from "react";
import Nav from "../MainPage/nav";
import "../MainPage/nav.css";
import Footer from "../MainPage/Footer";
import { useNavigate } from "react-router-dom";
import loader from "/loader.svg";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleNavigateCheckout = function () {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/checkout");
    }, 1500);
  };

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

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price.replace(/,/g, "") * item.quantity,
    0
  );

  return (
    <section className="">
      <Nav />
      <div className="bg-[#8F8F8F] w-full h-[1px] mb-8"></div>
      <section>
        <p className="pl-24 max-sm:pl-10 montserat text-5xl max-sm:text-2xl font-bold max-sm:font-semibold text-[#272727] pb-9">
          Carts ({totalItems})
        </p>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between mx-4 sm:mx-24 border mb-4 sm:p-0"
          >
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 md:h-40 w-24 md:w-40 sm:h-60 sm:w-60"
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <p className="montserat font-semibold text-base md:text-4xl text-[#272727]">
                  {item.name}
                </p>
                <div className="flex flex-col montserat font-normal text-sm md:text-2xl text-[#272727] gap-2">
                  <p>Size: XL</p>
                  <p className="flex items-center">
                    Color
                    <span className="bg-orange-500 rounded-full ml-2 w-4 h-4 sm:w-6 sm:h-6"></span>
                  </p>
                </div>
                <p className="text-[#8F8F8F] font-normal text-base md:text-2xl federant">
                  Stride
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between py-1">
              <p className="text-[#002482] font-semibold text-2xl sm:text-[40px] inter">
                N
                {(
                  item.price.replace(/,/g, "") * item.quantity
                ).toLocaleString()}
              </p>
              <div className="flex gap-3 sm:gap-10">
                <span
                  onClick={() => handleDecrement(item.id)}
                  className="bg-[#D9D9D9] text-black px-3 sm:px-[8px] h-8 sm:h-10 font-medium text-xl sm:text-3xl rounded cursor-pointer"
                >
                  -
                </span>
                <p className="montserat text-xl sm:text-3xl cursor-default">
                  {item.quantity}
                </p>
                <span
                  onClick={() => handleIncrement(item.id)}
                  className="bg-[#D9D9D9] text-black px-3 sm:px-[5px] h-8 sm:h-10 font-medium text-xl sm:text-3xl rounded cursor-pointer"
                >
                  +
                </span>
              </div>
            </div>
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
        <div className="flex justify-center mt-16 mb-[185px]">
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
              "Proceed  to Checkout"
            )}
          </button>
        </div>
        <Footer />
      </section>
    </section>
  );
}

export default Cart;
