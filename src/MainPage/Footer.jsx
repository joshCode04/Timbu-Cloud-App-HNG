import Stride1 from "/Stride1.png";
import "./nav.css";
import mail from "/mail.png";
import facebook from "/facebook.png";
import instagram from "/Instagram.png";
import whatsapp from "/whatsapp.png";
import twitter from "/twitter.png";

function Footer() {
  return (
    <footer className="pl-[7px] pr-[5px] md:pl-[60px] md:pr-[55px] lg:pl-[120px] lg:first-letter:pr-[115px] pt-7 md:pt-[67px] bg-[#4C8EF0]">
      <div className="flex justify-between pb-[38px] max-sm:gap-14">
        <div className="">
          <img
            src={Stride1}
            alt="Stride1"
            className="md:w-40 md:h-12 w-16 sm:h-6"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-xs md:text-2xl montserat text-white">
            Stay In Touch
          </p>
          <p className="font-normal text-[9px] max-sm:w-44 md:text-base text-white montserat">
            Stay in touch to get special offers, free giveaways{" "}
            <br className="max-sm:hidden" /> and once in a lifetime deals
          </p>
          <div className="flex items-center relative montserat max-sm:hidden">
            <span className="absolute inset-y-0 left-0 flex items-center pl-[41.15px]">
              <img src={mail} alt="mail" className="h-6 w-6" />
            </span>
            <input
              type="text"
              placeholder="Enter your email"
              className="montserat h-[44px] w-[447px] bg-transparent flex-1 pl-20 focus:outline text-lg font-extralight border border-white rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mb-[39.05px]"></div>
      <div className="flex justify-evenly text-white montserat pb-2">
        <div className="flex gap-3 justify-center">
          <div>
            <p className="font-normal text-xs md:text-lg cursor-pointer hover:underline">
              Terms & Conditions
            </p>
          </div>
          <div>
            <p className="font-normal text-xs md:text-lg cursor-pointer hover:underline">
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <img
            src={facebook}
            alt="facebook"
            className="md:h-8 md:w-8 w-4 h-4 hover:scale-105"
          />
          <img
            src={instagram}
            alt="instagram"
            className="md:h-8 md:w-8 w-4 h-4 hover:scale-105"
          />
          <img
            src={whatsapp}
            alt="whatsapp"
            className="md:h-8 md:w-8 w-4 h-4 hover:scale-105"
          />
          <img
            src={twitter}
            alt="twitter"
            className="md:h-8 md:w-8 w-4 h-4 hover:scale-105"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
