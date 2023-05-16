import React, { useContext, useEffect } from "react";
import Header from "./Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
  const cardsProduct = useLoaderData();
  const { setCardsProduct } = useContext(AuthContext);
  useEffect(() => {
    setCardsProduct(cardsProduct);
  }, [cardsProduct]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
