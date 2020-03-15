import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

const HeaderItem = ({ header }) => (
  <div className="header-block">
    <span>{header}</span>
  </div>
);
const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <HeaderItem header="Product" />
        <HeaderItem header="Description" />
        <HeaderItem header="Quantity" />
        <HeaderItem header="Price" />
        <HeaderItem header="Remove" />
      </div>
      {cartItems.map(cartItem => cartItem.name)}

      <div className="total">
        <span>Total ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);
