import { getLocalData } from "../components/utility/fakeDB";

const cardsProductLoader = async () => {
  const cardProduct = await fetch("products.json");
  const product = await cardProduct.json();
  const storedCart = getLocalData();
  const cartItems = [];
  for (let id in storedCart) {
    const addedProduct = product.find(pd => pd.id == id);
    if (addedProduct) {
      addedProduct.quantity = storedCart[id];
      cartItems.push(addedProduct);
    }
  }
  return { loadedData: product, cartItems };
};

export default cardsProductLoader;
