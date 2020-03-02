import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to={window.urls.HomeLocation.path}>
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to={window.urls.ShopLocation.path}>
          SHOP
        </Link>
        <Link className="option" to={"/"}>
          CONTACT
        </Link>
        {currentUser ? (
          <Link className="option" to='#' onClick={()=> auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to={window.urls.SignLocation.path}>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}
