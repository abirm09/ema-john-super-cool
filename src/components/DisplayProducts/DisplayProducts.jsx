import React from "react";

const DisplayProducts = ({ product, cartAddHandler }) => {
  const { id, img, name, price, seller } = product;
  //   console.log(product);
  return (
    <div className="card w-80 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : ${price}</p>
        <p>Seller : {seller}</p>
        <div className="card-actions justify-end mt-3 items-center">
          <button
            className="btn font-bold hover:text-amber-600"
            onClick={() => cartAddHandler(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
