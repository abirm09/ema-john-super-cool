const handleQuantity = id => {
  const getData = getLocalData();
  const quantity = getData[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    getData[id] = newQuantity;
  } else {
    getData[id] = 1;
  }
  localStorage.setItem("cart-item", JSON.stringify(getData));
};
const deleteCartFromBd = id => {
  const shoppingCart = getLocalData();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("cart-item", JSON.stringify(shoppingCart));
  }
};
const getLocalData = () => {
  let products = {};
  const localData = localStorage.getItem("cart-item");
  if (localData) {
    const productsObj = JSON.parse(localData);
    products = productsObj;
  }
  return products;
};
const clearCartFromBd = () => {
  localStorage.removeItem("cart-item");
};

export { handleQuantity, getLocalData, clearCartFromBd, deleteCartFromBd };
