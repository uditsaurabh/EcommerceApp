import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "./ShoppingCart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ShoppingCart() {
  let { cart, cartdispatch } = useContext(CartContext);
  let [subTotal, setSubTotal] = useState(0);
  let [grandTotal, setGrandtotal] = useState(0);
  let [tax, setTax] = useState(0);
  const shipping = 15;

  useEffect(() => {
    let curr = 0;
    cart.forEach((element) => {
      curr = curr + element.price * element.quantity;
    });
    setSubTotal(curr);
    let tax = curr * 0.05;
    tax = Math.round((tax + Number.EPSILON) * 100) / 100;
    setTax(tax);
    curr = curr + tax + shipping;
    setGrandtotal(curr);
    console.log("this is cart after update", cart);
  }, [cart]);

  let productList = cart.map((product) => {
    return (
      <div key={product.isbn} className="product">
        <div className="product-image">
          <img src={product.thumbnailUrl} />
        </div>
        <div className="product-details">
          <div className="product-title">{product.title}</div>
          <p className="product-description">{product.shortDescription}</p>
        </div>
        <div className="product-price">{product.price}</div>
        <div className="product-quantity">
          <input
            type="number"
            defaultValue={product.quantity}
            min={1}
            onChange={(e) => {
              console.log(e.target.value);

              cartdispatch({
                type: "CHANGE_THE_QUANTITY",
                payload: product,
                updated: e.target.value,
              });
            }}
          />
        </div>
        <div className="product-removal">
          <button
            className="remove-product"
            onClick={() => {
              cartdispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              });
            }}
          >
            Remove
          </button>
        </div>
        <div className="product-line-price">
          {product.price * product.quantity}
        </div>
      </div>
    );
  });
  let productSummary = cart.length ? (
    <>
      <div className="totals">
        <div className="totals-item">
          <label>Subtotal</label>
          <div className="totals-value" id="cart-subtotal">
            {subTotal}
          </div>
        </div>
        <div className="totals-item">
          <label>Tax (5%)</label>
          <div className="totals-value" id="cart-tax">
            {tax}
          </div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value" id="cart-shipping">
            {shipping}
          </div>
        </div>
        <div className="totals-item totals-item-total">
          <label>Grand Total</label>
          <div className="totals-value" id="cart-total">
            {grandTotal}
          </div>
        </div>
      </div>
      <button className="checkout">Checkout</button>
    </>
  ) : (
    <></>
  );
  let labels = cart.length ? (
    <>
      <div className="column-labels">
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity">Quantity</label>
        <label className="product-removal">Remove</label>
        <label className="product-line-price">Total</label>
      </div>
    </>
  ) : (
    <></>
  );
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="shopping-cart">
        {labels}
        {productList}
        {productSummary}
      </div>
    </div>
  );
}

export default ShoppingCart;
