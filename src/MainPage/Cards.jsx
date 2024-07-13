import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartContext.jsx";
import PropTypes from "prop-types";

function Cards({ products }) {
  const [cartQuantities, setCartQuantities] = useState({});
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCartQuantities(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartQuantities));
  }, [cartQuantities]);

  const handleIncrement = (id) => {
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = (product) => {
    addToCart();

    const existingCart = JSON.parse(localStorage.getItem("cartData")) || [];
    const existingItem = existingCart.find(
      (item) => item.unique_id === product.unique_id
    );

    let updatedCart;
    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        item.unique_id === product.unique_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }
    localStorage.setItem("cartData", JSON.stringify(updatedCart));

    // Update local state to trigger re-render
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.unique_id]: (prevQuantities[product.unique_id] || 0) + 1,
    }));
  };

  const handleDetailPage = () => {
    navigate("/details");
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!currentProducts.length) {
    return <div>Loading...</div>;
  }

  console.log("Rendering products in Cards:", currentProducts);

  return (
    <section className="">
      <div className="flex flex-col md:ml-4 md:mr-4 mr-0.5 ml-0.5 mt-[87px] max-sm:mt-[14px] pb-20 md:pb-[255px]">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:pl-8 xl:ml-0 max-[1023px]:ml-10 max-md:ml-3">
          {currentProducts.map((product) => (
            <div
              key={product.unique_id}
              className="rounded-md hover:shadow-2xl xl:h-[581.03px] max-sm:w-[168px] xl:w-[400px] md:w-[300px] max-[767px]:w-[300px]"
            >
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                alt={product.name}
                className="w-[170px] xl:w-[400px] max-[639px]:h-[160px] xl:h-[369px] md:w-[300px] md:h-[269px] max-[767px]:h-[269px] max-[767px]:w-[300px] cursor-pointer"
                onClick={handleDetailPage}
              />
              <div className="pt-[17.5px]">
                <div className="flex flex-col p-2.5 gap-0.5 md:gap-2.5">
                  <h2 className="text-base md:text-2xl font-bold text-[#4C8EF0] montserat">
                    {product.name}
                  </h2>
                  <p className="text-black text-lg md:text-[32px] lineHeight font-semibold montserat">
                    N{product.current_price?.[0]?.NGN?.[0] ?? "N/A"}
                  </p>
                </div>
                <div className="flex p-0.5 md:p-2.5 justify-between">
                  <div className="flex gap-1 md:gap-2">
                    <span
                      onClick={() => handleDecrement(product.unique_id)}
                      className="bg-[#D9D9D9] text-black px-[7px] h-6 md:h-10 font-light md:font-medium text-lg md:text-3xl cursor-pointer"
                    >
                      -
                    </span>
                    <p className="montserat text-xl md:text-3xl cursor-default">
                      {cartQuantities[product.unique_id] || 0}
                    </p>
                    <span
                      onClick={() => handleIncrement(product.unique_id)}
                      className="bg-[#D9D9D9] text-center text-black px-[4px] h-6 md:h-10 font-light md:font-medium text-lg md:text-3xl cursor-pointer"
                    >
                      +
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={cartQuantities[product.unique_id] <= 0} // Disable if quantity is 0 or undefined
                      className={`px-2.5 md:px-4 py-1.5 md:py-2 rounded-md bg-[#0C4395] text-xs md:text-xl text-white font-semibold montserat cursor-pointer ${
                        cartQuantities[product.unique_id] <= 0
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:text-[#0C4395] hover:bg-white hover:shadow-xl hover:scale-105"
                      }`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(products.length / productsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 rounded-md bg-[#0C4395] text-white font-semibold cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-[#4C8EF0] active:bg-[#0C4395] active:text-white"
                    : "hover:bg-[#4C8EF0] hover:text-white"
                } focus:outline-none`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}

Cards.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      unique_id: PropTypes.string.isRequired,
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

export default Cards;
