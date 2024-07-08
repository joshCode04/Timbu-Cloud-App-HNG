import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../MainPage/nav";
import Footer from "../MainPage/Footer";
import "../MainPage/nav.css";
import loader from "/loader.svg";

function Checkout() {
  const [isLoading1, setIsLoading1] = useState(false);
  const navigate = useNavigate();

  const handleNavigateCheckout1 = () => {
    setIsLoading1(true);
    setTimeout(() => {
      navigate("/payment");
    }, 1500);
  };

  return (
    <section>
      <Nav />
      <div className="bg-[#8F8F8F] w-full h-[1px] max-sm:hidden"></div>
      <section>
        <p className="pl-10 sm:pl-44 pt-9 montserat text-3xl sm:text-5xl font-bold text-[#272727] pb-9">
          Checkout
        </p>
        <div className="flex flex-col justify-center px-4 sm:px-20 md:px-40 lg:px-60 xl:px-80 2xl:px-[300px] gap-4">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="text-[#5F6980] inter font-semibold text-base sm:text-[20px] max-sm:hidden"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border py-2 max-sm:py-5 rounded-[10px] max-sm:rounded-3xl pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none"
              placeholder="hello@example.com"
            />
          </div>
          <p className="text-[#5F6980] inter font-semibold text-base sm:text-[20px]">
            Shipping Address
          </p>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter max-sm:py-5 max-sm:rounded-3xl"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter max-sm:py-5 max-sm:rounded-3xl"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="+234"
              className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter max-sm:py-5 max-sm:rounded-3xl w-full sm:w-1/2"
            />
            <input
              type="text"
              placeholder="Address"
              className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter max-sm:py-5 max-sm:rounded-3xl"
            />
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <input
                type="text"
                placeholder="City"
                className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter max-sm:py-5 max-sm:rounded-3xl w-full sm:w-1/2"
              />
              <input
                type="text"
                placeholder="Country"
                className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter max-sm:py-5 max-sm:rounded-3xl w-full sm:w-1/2"
              />
            </div>
          </div>
          <div className="flex justify-center mt-16 mb-[185px]">
            <button
              onClick={handleNavigateCheckout1}
              className={`bg-[#0C4395] w-[280px] sm:w-[376px] md:w-[576px] h-[48px] sm:h-[68px] md:h-[96px] rounded-[10px] md:rounded-[20px] montserat text-white text-xl sm:text-2xl font-semibold hover:scale-105 transition-transform ${
                isLoading1 ? "pl-32 sm:pl-40 md:pl-64" : ""
              }`}
            >
              {isLoading1 ? (
                <img
                  src={loader}
                  alt="loader"
                  className="h-7 w-14 sm:h-10 sm:w-20 md:h-14 md:w-28"
                />
              ) : (
                "Proceed to Payment"
              )}
            </button>
          </div>
        </div>
        <Footer />
      </section>
    </section>
  );
}

export default Checkout;
