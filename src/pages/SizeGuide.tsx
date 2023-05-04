import React from "react";
import sizeGuideImgDesktop from "../assets/images/sizeGuideChest/sizeGuideChest-desktop.webp";
import sizeGuideImgTablet from "../assets/images/sizeGuideChest/sizeGuideChest-tablet.webp";
import sizeGuideImgMobile from "../assets/images/sizeGuideChest/sizeGuideChest-mobile.webp";
import sizeGuideTableImg from "../assets/images/sizeGuideChestSize/sizeGuideChestGuide.webp";

const SizeGuide = () => {
  return (
    <section className="size-guide">
      <div className="size-guide__container">
        <h2 className="size-guide__title">Produkty i rozmiar</h2>
        <div className="size-guide__wrapper">
          <p className="size-guide__subtitle">
            PRZEWODNIK PO ROZMIARACH DLA MĘŻCZYZN
          </p>
          <img
            className="size-guide__img"
            src={sizeGuideImgMobile}
            srcSet={`${sizeGuideImgMobile} 300w, ${sizeGuideImgTablet} 768w, ${sizeGuideImgDesktop} 1280w`}
            alt="size guide"
          />
          <p className="size-guide__content">
            1) KLATKA PIERSIOWA - Zmierz cały obwód klatki piersiowej 2,5 cm
            poniżej pachy
          </p>
          <p className="size-guide__content">
            2) TALIA - Zmierz pełny obwód w najwęższym / najmniejszym miejscu
            talii
          </p>
          <img
            className="size-guide__img-table"
            src={sizeGuideTableImg}
            alt="size guide table"
          />
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;
