import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const BookItem = ({ book }) => {
  let about = `/about/${book.title}`;
  let cartContext = useContext(CartContext);

  return (
    <div className="card m-5 " style={{ width: "200px" }}>
      <img className="card-img-top" src={book.thumbnailUrl} alt="Card image" />
      <div className="card-body">
        <h6 className="card-title">{book.title}</h6>
        <p className="card-text">Some example text.</p>
        <div className="btn-group">
          <Link to={about} className="btn btn-primary m-1">
            See Details
          </Link>
          <button
            className="btn btn-warning m-1"
            onClick={(e) => {
              book["quantity"] = 1;
              cartContext.cartdispatch({
                type: "ADD_TO_CART",
                payload: book,
              });
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
