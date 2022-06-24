import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
 
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">
        GAMING HEADPHONES</p>
        <h3>BELOW MARKET PRICE</h3>
        <h1>WINTER SALE</h1>
        <img src={"https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/headphones_a_4_oqbplo.webp"} alt="headphones" className="hero-banner-image" />
        <div>
          <Link to="/login">
          <button className="buy-now">REGISTER/LOG IN TO BUY</button>
          </Link>
          <div className="desc">
            <h5>THE GAME BEGINS HERE</h5>
            <p>Get a powerful 360° gaming experience like no other </p>
          </div>
        </div>
        <div>20% OFF</div>
        <div>NOV 11 - DEC 15</div>
      </div>
    </div>
  );
};

export default HeroBanner;
