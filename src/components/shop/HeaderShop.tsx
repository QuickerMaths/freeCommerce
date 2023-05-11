import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { handleCategoryFilter } from "../../features/filterSlice/filterSlice";
import { RootState } from "../../redux/store";
import headerShopWomanMobile from "../../assets/images/headerShopWoman/headerShopWoman-mobile.webp";
import headerShopWomanTablet from "../../assets/images/headerShopWoman/headerShopWoman-tablet.webp";
import headerShopWomanDesktop from "../../assets/images/headerShopWoman/headerShopWoman-desktop.webp";
import headerShopManMobile from "../../assets/images/headerShopMan/headerShopMan-mobile.webp";
import headerShopManTablet from "../../assets/images/headerShopMan/headerShopMan-tablet.webp";
import headerShopManDesktop from "../../assets/images/headerShopMan/headerShopMan-desktop.webp";

import homeGrid6Desktop from "../../assets/images/homeGrid6/homeGrid6-desktop.webp";
import homeGrid6Tablet from "../../assets/images/homeGrid6/homeGrid6-tablet.webp";
import homeGrid6Mobile from "../../assets/images/homeGrid6/homeGrid6-mobile.webp";
import homeGrid3Desktop from "../../assets/images/homeGrid3/homeGrid3-desktop.webp";
import homeGrid3Tablet from "../../assets/images/homeGrid3/homeGrid3-tablet.webp";
import homeGrid3Mobile from "../../assets/images/homeGrid3/homeGrid3-mobile.webp";
import useMediaQuery from "../../hooks/useMediaQuery";

const HeaderShop = () => {
  const matchesTablet = useMediaQuery("max-width: 1024px");
  const matchesDesktop = useMediaQuery("max-width: 5000px");

  const dispatch = useAppDispatch();

  const active = useAppSelector(
    (state: RootState) => state.filterSlice.category
  );

  return (
    <div className="header-shop">
      <div
        className="header-shop__left-side-background"
        style={{
          backgroundImage: `url('${
            matchesDesktop
              ? homeGrid3Mobile
              : matchesTablet
              ? homeGrid3Tablet
              : homeGrid3Desktop
          }')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="header-shop__left-side">
          <button
            className="header-shop__collection-button"
            onClick={() => dispatch(handleCategoryFilter("damskie"))}
          >
            <h2
              className={`header-shop__title ${
                active === "damskie" ? "category-filter-active" : ""
              }`}
            >
              Womans collection
            </h2>
          </button>
        </div>
      </div>
      <div
        className="header-shop__right-side-background"
        style={{
          backgroundImage: `url('${
            matchesDesktop
              ? homeGrid6Mobile
              : matchesTablet
              ? homeGrid6Tablet
              : homeGrid6Desktop
          }')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="header-shop__right-side">
          <button
            className="header-shop__collection-button"
            onClick={() => dispatch(handleCategoryFilter("meskie"))}
          >
            <h2
              className={`header-shop__title ${
                active === "meskie" ? "category-filter-active" : ""
              }`}
            >
              Mans collection
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderShop;
