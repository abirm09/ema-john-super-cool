import React, { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { getLocalData } from "./utility/fakeDB";

const OrderReview = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);
  const getCartItems = getLocalData();
  return (
    <div>
      <h2>THis is order review.</h2>
    </div>
  );
};

export default OrderReview;
