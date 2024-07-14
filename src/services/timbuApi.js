export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://api.timbu.cloud/products?organization_id=0de666116e3f462091bde71fb3640dc9&Appid=Q2RRZW5O443IO7F&Apikey=f96b546f72af4dd58c1e9ffe6cd7e39520240712185804901395",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Products data:", data);

    return data.items || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
