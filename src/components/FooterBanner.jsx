import React from "react";
import { Link } from "react-router-dom";

const FooterBanner = () => {
  
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>20% OFF</p>
          <h3>WINTER SALE</h3>
          <p>NOV 11 - DEC 15</p>
        </div>
        <div className="right">
          <p>BEST SELLER </p>
          <h3>boAt rockerz 451</h3>
          <p>slick headphones that offer immersive sound quality </p>
          <Link to="/login">
            <button>REGISTER/LOG IN TO BUY</button>
          </Link>
        </div>
        <img
          src={"https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/headphones_c_1_ttluym.webp"}
          alt="heaphones"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
