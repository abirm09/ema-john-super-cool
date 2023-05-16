import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayProducts from "./DisplayProducts/DisplayProducts";
import {
  clearCartFromBd,
  getLocalData,
  handleQuantity,
} from "./utility/fakeDB";
import OrderSummary from "./OrderSummary/OrderSummary";
import { AuthContext } from "../provider/AuthProvider";
const Order = () => {
  const { totalProducts } = useLoaderData();
  const { cardsProduct } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsOnPage, setItemsOnPage] = useState(10);
  useEffect(() => {
    if (cardsProduct?.loadedData) {
      setProducts(cardsProduct?.loadedData);
    }
  }, [cardsProduct?.loadedData]);
  //add to cart handler
  const cartAddHandler = product => {
    let newCart = [];
    const isExist = cart.find(pd => pd._id == product._id);
    if (isExist) {
      isExist.quantity = isExist.quantity + 1;
      const rest = cart.filter(pd => pd._id !== product._id);
      newCart = [...rest, isExist];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    handleQuantity(product._id);
  };
  useEffect(() => {
    const storedData = getLocalData();
    const restoreCart = [];
    if (products) {
      for (let id in storedData) {
        const savedProduct = products.find(pd => pd._id == id);
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
  //pagination
  const totalPages = Math.ceil(totalProducts / itemsOnPage);
  const pageNumbers = [...Array(totalPages).keys()];

  const options = [5, 10, 20];
  const handlePageTotalItem = event => {
    setItemsOnPage(parseInt(event.target.value));
    setCurrentPage(0);
  };
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
          {products.map(product => (
            <DisplayProducts
              key={product._id}
              product={product}
              cartAddHandler={cartAddHandler}
            />
          ))}
        </div>
        <div className="col-span-1 bg-orange-300 p-4">
          <div className="sticky top-5">
            <OrderSummary
              cart={cart}
              clearCart={clearCart}
              to="/orderReview"
              text="Order Review"
            />
          </div>
        </div>
      </div>
      <div className="my-10 text-center">
        <p className="font-semibold pb-2">Current page : {currentPage}</p>
        <div className="btn-group justify-center w-full ">
          {pageNumbers.map(page => (
            <button
              className={`btn ${currentPage === page ? "bg-slate-500" : ""}`}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <p className="pt-3">Items per page</p>
        <select
          name="selectPageItem"
          className="select"
          onChange={handlePageTotalItem}
        >
          {options.map((op, index) => (
            <option value={op} key={index}>
              {op}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Order;
