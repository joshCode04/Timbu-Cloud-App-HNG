export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://api.timbu.cloud/products?organization_id=6b919078eb4e4cd9ac9f263638ffe061&Appid=01KI2E6WXAWR9WC&Apikey=fc133cbb378a48f1b25041f0ada05f9320241031074316624811",
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
