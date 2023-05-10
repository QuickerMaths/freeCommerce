import React from "react";
import homeGrid1Desktop from "../../assets/images/homeGrid1/homeGrid1-desktop.webp";
import homeGrid1Tablet from "../../assets/images/homeGrid1/homeGrid1-tablet.webp";
import homeGrid1Mobile from "../../assets/images/homeGrid1/homeGrid1-mobile.webp";
import homeGrid2Desktop from "../../assets/images/homeGrid2/homeGrid2-desktop.webp";
import homeGrid2Tablet from "../../assets/images/homeGrid2/homeGrid2-tablet.webp";
import homeGrid2Mobile from "../../assets/images/homeGrid2/homeGrid2-mobile.webp";
import homeGrid3Desktop from "../../assets/images/homeGrid3/homeGrid3-desktop.webp";
import homeGrid3Tablet from "../../assets/images/homeGrid3/homeGrid3-tablet.webp";
import homeGrid3Mobile from "../../assets/images/homeGrid3/homeGrid3-mobile.webp";
import homeGrid4Desktop from "../../assets/images/homeGrid4/homeGrid4-desktop.webp";
import homeGrid4Tablet from "../../assets/images/homeGrid4/homeGrid4-tablet.webp";
import homeGrid4Mobile from "../../assets/images/homeGrid4/homeGrid4-mobile.webp";
import homeGrid6Desktop from "../../assets/images/homeGrid6/homeGrid6-desktop.webp";
import homeGrid6Tablet from "../../assets/images/homeGrid6/homeGrid6-tablet.webp";
import homeGrid6Mobile from "../../assets/images/homeGrid6/homeGrid6-mobile.webp";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  handleCategoryFilter,
  handleSubCategoryFilter,
} from "../../features/filterSlice/filterSlice";

const HomeGrid = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <section className="home-grid">
      <div className="home-grid__container">
        <div className="home-grid__layout">
          <div
            className="home-grid__item-one"
            onClick={() => {
              dispatch(handleSubCategoryFilter("tank_top"));
              navigate("/shop");
              window.scrollTo(0, 0);
              return;
            }}
          >
            <img
              src={homeGrid4Mobile}
              srcSet={`${homeGrid4Mobile} 300w, ${homeGrid4Tablet} 768w, ${homeGrid4Desktop} 1280w`}
              alt="img"
              className="home-grid__img--one"
              width={350}
              height={256}
            />
            <p className="home-grid__title--one">Tank Topy</p>
          </div>
          <div
            className="home-grid__item-two"
            onClick={() => {
              dispatch(handleSubCategoryFilter("topy"));
              navigate("/shop");
              window.scrollTo(0, 0);
              return;
            }}
          >
            <img
              src={homeGrid2Mobile}
              srcSet={`${homeGrid2Mobile} 300w, ${homeGrid2Tablet} 768w, ${homeGrid2Desktop} 1280w`}
              alt="img"
              className="home-grid__img--two"
              width={157}
              height={288}
            />
            <p className="home-grid__title--two">Topy</p>
          </div>
          <div
            className="home-grid__item-three"
            onClick={() => {
              dispatch(handleSubCategoryFilter("tshirt"));
              navigate("/shop");
              window.scrollTo(0, 0);
              return;
            }}
          >
            <img
              src={homeGrid1Mobile}
              srcSet={`${homeGrid1Mobile} 300w, ${homeGrid1Tablet} 768w, ${homeGrid1Desktop} 1280w`}
              alt="img"
              className="home-grid__img--three"
              width={157}
              height={288}
            />
            <p className="home-grid__title--three">Koszulki</p>
          </div>
          <div
            className="home-grid__item-four"
            onClick={() => {
              dispatch(handleCategoryFilter("damskie"));
              navigate("/shop");
              window.scrollTo(0, 0);
              return;
            }}
          >
            <img
              src={homeGrid3Mobile}
              srcSet={`${homeGrid3Mobile} 300w, ${homeGrid3Tablet} 768w, ${homeGrid3Desktop} 1280w`}
              alt="img"
              className="home-grid__img--four"
              height={171}
              width={157}
            />
            <p className="home-grid__title--four">Kolekcja Damska</p>
          </div>
          <div
            className="home-grid__item-five"
            onClick={() => {
              dispatch(handleCategoryFilter("meskie"));
              navigate("/shop");
              window.scrollTo(0, 0);
              return;
            }}
          >
            <img
              src={homeGrid6Mobile}
              srcSet={`${homeGrid6Mobile} 300w, ${homeGrid6Tablet} 768w, ${homeGrid6Desktop} 1280w`}
              alt="img"
              className="home-grid__img--five"
              height={171}
              width={157}
            />
            <p className="home-grid__title--five">Kolekcja Męska</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGrid;
