import search from "/cil_search.png";
import cart from "/cart.png";
import "./nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  const handleNavigateCart = () => {
    navigate("/details");
  };
  const handleNavigateHome = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <nav className="pt-6 md:pt-[55px] xl:px-[112px] max-sm:px-4 md:px-7 flex justify-between items-center pb-1 md:pb-5 py-10">
        <div>
          <img
            src="/Stride.jpg"
            className="max-sm:w-[101px] md:h-[38px] h-8"
            alt="stride"
            onClick={handleNavigateHome}
          />
        </div>
        <div className="flex items-center relative max-sm:justify-between">
          <span className="absolute max-sm:hidden inset-y-0 left-0 flex items-center pl-[41.15px]">
            <img src={search} alt="search" className="h-6 w-6" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="montserat h-[64px] w-[552px] max-sm:w-[120px] max-[804px]:w-[400px] rounded-full bg-[#D9D9D9] focus:bg-white flex-1 pl-20 max-sm:pl-3 focus:outline text-2xl font-extralight max-sm:hidden"
          />
        </div>
        <div className="flex gap-5 items-center">
          <div
            className="flex gap-2 cursor-pointer"
            onClick={handleNavigateCart}
          >
            <div className="max-sm:flex max-sm:gap-20">
              <span className="max-sm:pl-0 inset-y-0 relative left-10 flex items-center pl-[41.15px] min-[639px]:hidden">
                <img src={search} alt="search" className="h-6 w-6" />
              </span>
              <span className="hover:scale-105">
                <img src={cart} alt="cart" className="h-6 w-6 relative" />
              </span>
            </div>
            <p className="text-base text-[#000000] font-semibold montserat1 max-sm:hidden">
              Cart
            </p>
          </div>
        </div>
      </nav>
      <div className="h-[2px] w-[90%] bg-[#55575F] md:hidden mb-4 mx-4"></div>
    </>
  );
}

export default Nav;
