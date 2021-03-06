import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils.js";
// import { ReactComponent as Logo } from "../../assets/logo.png";
import Logo from "../../assets/logo.png";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={Logo} alt="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>

      {currentUser ? (
        <span>
          <span className="option" onClick={() => auth.signOut()}>
            Sign Out
          </span>
          {/* <span className="logged-as">
            <strong>Logged:</strong> {currentUser.displayName}
          </span> */}
        </span>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
