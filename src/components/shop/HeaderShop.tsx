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

const HeaderShop = () => {
  const dispatch = useAppDispatch();

  const active = useAppSelector(
    (state: RootState) => state.filterSlice.category
  );

  return (
    <div className="header-shop">
      <div
        className="header-shop__left-side-background"
        style={{
          backgroundImage: `url('${headerShopWomanDesktop}')`,
          backgroundPosition: "center",
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
              Damska kolekcja
            </h2>
            <p className="header-shop__under-title">Become Milf Mode</p>
          </button>
        </div>
      </div>
      <div
        className="header-shop__right-side-background"
        style={{
          backgroundImage: `url('${headerShopManDesktop}')`,
          backgroundPosition: "center",
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
              Męska kolekcja
            </h2>
            <p className="header-shop__under-title">Get Milf Mode</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderShop;
