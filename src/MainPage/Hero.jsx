import "./nav.css";
import Hero1 from "/HeroPix.jpeg";

function Hero() {
  return (
    <section className="relative">
      <img
        className="w-full h-[230px] md:h-[400px] lg:h-[530px]"
        src={Hero1}
        alt="Hero1"
      />
      <div className="flex flex-col items-center justify-center text-center text-white bg-opacity-50">
        <div className="absolute md:top-20 lg:top-32 top-10 flex flex-col gap-24 max-sm:gap-4 items-center">
          <h1 className="md:text-7xl text-[37px] font-extrabold montserat">
            Step up your Style
          </h1>
          <button className="text-5xl max-sm:h-14 max-sm:text-[24px] max-sm:font-light font-semibold bg-[#0C4395] montserat p-1 md:py-4 rounded-lg w-[413px] max-sm:w-56 hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
