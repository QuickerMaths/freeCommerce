import React from "react";
import logo from "../assets/images/logo/logo.webp";

const LoadingPage = () => {
  return (
    <section className="loading">
      <div id="loading-bar-spinner" className="spinner">
        <div className="spinner-icon"></div>
      </div>
      <div className="spinner-icon-static"></div>
      <img src={logo} alt="logo" className="loading__logo" />
    </section>
  );
};

export default LoadingPage;
