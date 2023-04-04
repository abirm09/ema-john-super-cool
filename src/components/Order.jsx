import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayProducts from "./DisplayProducts/DisplayProducts";
import {
  clearCartFromBd,
  getLocalData,
  handleQuantity,
} from "./utility/fakeDB";
import OrderSummary from "./OrderSummary/OrderSummary";

const Order = () => {
  const loadedData = useLoaderData();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(loadedData);
  }, [loadedData]);
  //add to cart handler
  const cartAddHandler = product => {
    let newCart = [];
    const isExist = cart.find(pd => pd.id == product.id);
    if (isExist) {
      isExist.quantity = isExist.quantity + 1;
      const rest = cart.filter(pd => pd.id !== product.id);
      newCart = [...rest, isExist];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    handleQuantity(product.id);
  };
  useEffect(() => {
    const storedData = getLocalData();
    const restoreCart = [];
    if (products) {
      for (let id in storedData) {
        const savedProduct = products.find(pd => pd.id == id);
        if (savedProduct) {
          savedProduct.quantity = storedData[id];
          restoreCart.push(savedProduct);
        }
      }
    }
    setCart(restoreCart);
  }, [products]);
  //clear cart
  const clearCart = () => {
    setCart([]);
    clearCartFromBd();
  };
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
          {products.map(product => (
            <DisplayProducts
              key={product.id}
              product={product}
              cartAddHandler={cartAddHandler}
            />
          ))}
        </div>
        <div className="col-span-1 bg-orange-300 p-4">
          <div className="sticky top-5">
            <OrderSummary cart={cart} clearCart={clearCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
