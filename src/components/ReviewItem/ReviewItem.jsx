import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faTrashCan } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product, handleDelete }) => {
  const { id, name, price, quantity, img, shipping } = product;
  return (
    <div className="grid grid-cols-5 max-w-xl border-2 border-gray-300 rounded-md p-2 items-center mx-auto">
      <div className="col-span-1 w-24">
        <img src={img} alt={name} className="rounded-md" />
      </div>
      <div className="col-span-3 font-lato space-y-1">
        <h3 className="text-xl">{name}</h3>
        <p>
          Price : <span className="text-amber-500">${price * quantity}</span>
        </p>
        <p>
          Quantity : <span className="text-amber-500">{quantity}</span>
        </p>
        <p>
          Shipping Charge :{" "}
          <span className="text-amber-500">${shipping * quantity}</span>
        </p>
      </div>
      <div className="col-span-1">
        <button
          onClick={() => handleDelete(id)}
          className="bg-red-200 w-10 h-10 rounded-full fa-1xansition-all"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
