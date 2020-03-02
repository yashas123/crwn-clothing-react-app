import React from "react";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from '../../components/sign-up/sign-up'

import "./sign.scss";

export default function Sign() {
  return (
    <div className="sign">
      <SignIn />
			<SignUp />
    </div>
  );
}
