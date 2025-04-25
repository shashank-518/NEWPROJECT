import React from "react";
import "./Navigation.css";
import Ham from "./Ham";

export default Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <div className="firstpart">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/best-cow-names-66f573deac313.png?crop=0.473xw:0.713xh;0.0208xw,0.140xh&resize=1200:*"
            alt="image"
          />
          <h1>Nandini</h1>
        </div>
        <div className="mainpart">
          <ul>
            <li>
              <h3>Home</h3>
            </li>
            <li>
              <h3>Order Item</h3>
            </li>
            <li>
              <h3>Contact</h3>
            </li>
          </ul>
        </div>
        <div className="authPart">
            <button className="login" >Login</button>
            <button className="start" >Get Started</button>
        </div>

        <div className="hampart">
          <Ham/>
        </div>

        

      </nav>
    </>
  );
};
