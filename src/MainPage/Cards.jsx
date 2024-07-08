import "./nav.css";
import { useEffect, useState } from "react";
import shoes from "./api.js";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartContext.jsx";
import { useContext } from "react";

function Cards() {
  const [shoeData, setShoeData] = useState([]);
  const [cartQuantities, setCartQuantities] = useState({});
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShoes = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(shoes);
        }, 1000);
      });

      const initialCartQuantities = data.reduce((acc, shoe) => {
        acc[shoe.id] = 0;
        return acc;
      }, {});
      setCartQuantities(initialCartQuantities);
      setShoeData(data);
    };

    fetchShoes();
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCartQuantities(savedCart);
    }
  }, []);

  const handleIncrement = (id) => {
    setCartQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: prevQuantities[id] + 1,
      };
      localStorage.setItem("cart", JSON.stringify(updatedQuantities));
      return updatedQuantities;
    });
  };

  const handleDecrement = (id) => {
    setCartQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: Math.max(prevQuantities[id] - 1, 0),
      };
      localStorage.setItem("cart", JSON.stringify(updatedQuantities));
      return updatedQuantities;
    });
  };

  const handleAddToCart = (shoe) => {
    addToCart();
    setCartQuantities((prevQuantities) => {
      if (prevQuantities[shoe.id] === 0) {
        const updatedQuantities = {
          ...prevQuantities,
          [shoe.id]:
            Object.keys(prevQuantities).filter((key) => prevQuantities[key] > 0)
              .length + 1,
        };
        localStorage.setItem("cart", JSON.stringify(updatedQuantities));
        return updatedQuantities;
      }
      return prevQuantities;
    });
    const existingCart = JSON.parse(localStorage.getItem("cartData")) || [];
    const existingItem = existingCart.find((item) => item.id === shoe.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, { ...shoe, quantity: 1 }];
    }
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };

  const handleDetailPage = () => {
    navigate("/details");
  };

  return (
    <section>
      <div className="flex flex-col md:ml-4 md:mr-4 mr-0.5 ml-0.5 mt-[87px] pb-20 md:pb-[255px]">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:pl-8">
          {shoeData.map((shoe) => (
            <div
              key={shoe.id}
              className="rounded-md hover:shadow-xl md:h-[581.03px] w-[168px] md:w-full"
            >
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-[170px] md:w-[400px] h-[160px] md:h-[369px] cursor-pointer"
                onClick={handleDetailPage}
              />
              <div className="pt-[17.5px]">
                <div className="flex flex-col p-2.5 gap-0.5 md:gap-2.5">
                  <h2 className="text-lg md:text-4xl font-bold text-[#4C8EF0] montserat">
                    {shoe.name}
                  </h2>
                  <p className="text-black text-lg md:text-[32px] lineHeight font-semibold montserat">
                    N{shoe.price}
                  </p>
                </div>
                <div className="flex p-0.5 md:p-2.5 justify-between">
                  <div className="flex gap-1 md:gap-2">
                    <span
                      onClick={() => handleDecrement(shoe.id)}
                      className="bg-[#D9D9D9] text-black px-[7px] h-6 md:h-10 font-light md:font-medium text-lg md:text-3xl cursor-pointer"
                    >
                      -
                    </span>
                    <p className="montserat text-xl md:text-3xl cursor-default">
                      {cartQuantities[shoe.id]}
                    </p>
                    <span
                      onClick={() => handleIncrement(shoe.id)}
                      className="bg-[#D9D9D9] text-center text-black px-[4px] h-6 md:h-10 font-light md:font-medium text-lg md:text-3xl cursor-pointer"
                    >
                      +
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => handleAddToCart(shoe)}
                      className="px-2.5 md:px-4 py-1.5 md:py-2 rounded-md bg-[#0C4395] text-xs md:text-xl text-white font-semibold montserat cursor-pointer hover:text-[#0C4395] hover:bg-white hover:shadow-xl hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
