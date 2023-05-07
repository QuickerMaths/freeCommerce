import React from "react";
import heroImgDesktop from "../../assets/images/heroSection/heroImg-desktop.webp";
import heroImgTablet from "../../assets/images/heroSection/heroImg-tablet.webp";
import heroImgMobile from "../../assets/images/heroSection/heroImg-mobile.webp";

const HomeHeader = () => {
  return (
    <section className="home-header">
      <img
        src={heroImgMobile}
        srcSet={`${heroImgMobile} 300w, ${heroImgTablet} 768w, ${heroImgDesktop} 1280w`}
        className="home-header__img"
        alt="header"
      />
      <h1 className="home-header__title">
        We Are <span className="home-header__span">Hats</span>
      </h1>
    </section>
  );
};

export default HomeHeader;
