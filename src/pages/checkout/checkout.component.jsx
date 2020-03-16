import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

const HeaderItem = ({ header }) => (
  <div className="header-block">
    <span>{header}</span>
  </div>
);
const CheckoutPage = ({ cartItems, total }) => {
  const headers = ["Product", "Description", "Quantity", "Price", "Remove"];
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {headers.map(header => (
          <HeaderItem header={header} />
        ))}
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} />
      ))}

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
