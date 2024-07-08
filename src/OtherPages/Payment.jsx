import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../MainPage/nav";
import Footer from "../MainPage/Footer";
import "../MainPage/nav.css";
import loader from "/loader.svg";
import master from "/Mastercard.png";

function Payment() {
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
          Payment
        </p>
        <div className="flex flex-col justify-center px-4 sm:px-20 md:px-40 lg:px-60 xl:px-80 2xl:px-96 gap-4">
          <div className="flex items-center relative">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <img
                src={master}
                alt="master"
                className="h-6 w-6 sm:h-auto sm:w-auto"
              />
            </span>
            <input
              type="text"
              className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-10 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter w-full"
              placeholder="Card number"
            />
          </div>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter w-full sm:w-40"
              placeholder="Exp. date"
            />
            <input
              type="text"
              className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter w-full sm:w-40"
              placeholder="CVV"
            />
          </div>
          <input
            type="text"
            className="border py-2 sm:py-3 rounded-[10px] sm:rounded-[20px] pl-3 text-base sm:text-[24px] font-normal focus:border-2 focus:shadow-sm focus:outline-none text-[#5F6980] inter w-full"
            placeholder="Name on card"
          />
          <div className="flex items-center gap-1 pb-7">
            <input
              type="checkbox"
              name=""
              id=""
              className="font-normal text-base"
            />
            <p className="text-[#5F6980] inter text-sm sm:text-base">
              Use shipping address as billing address
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#5F6980] font-semibold text-sm sm:text-[22px] inter">
              Remember me
            </p>
            <div className="flex items-center gap-1">
              <input type="checkbox" name="" id="" />
              <p className="text-[#5F6980] font-normal text-xs sm:text-[16px] inter">
                Save my information for faster checkout
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-16 justify-center mb-[185px] max-sm:mt-36 max-sm:mb-6">
          <button
            onClick={handleNavigateCheckout1}
            className={`bg-[#0C4395] w-[280px] sm:w-[576px] h-[48px] sm:h-[96px] rounded-[10px] sm:rounded-[20px] montserat text-white text-xl sm:text-2xl font-semibold hover:scale-105 transition-transform ${
              isLoading1 ? "pl-32 sm:pl-64" : ""
            }`}
          >
            {isLoading1 ? (
              <img
                src={loader}
                alt="loader"
                className="h-7 w-14 sm:h-14 sm:w-28"
              />
            ) : (
              "Pay Now"
            )}
          </button>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default Payment;
