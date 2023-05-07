import React from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

interface Props {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
}

const MobileMenu: React.FC<Props> = ({
  isMobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <div
      className={`menu-mobile ${isMobileMenuOpen ? "menu-mobile-open" : ""}`}
    >
      <button
        aria-label="close button"
        className="menu-mobile__close-button"
        onClick={() => setMobileMenuOpen(false)}
      >
        <GrClose className="menu-mobile__close-icon" />
      </button>
      <nav className="menu-mobile-nav">
        <ul className="menu-mobile__list">
          <li
            className="menu-mobile__item"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link className="menu-mobile__link" to="/">
              Strona Główna
            </Link>
          </li>
          <li
            className="menu-mobile__item"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link className="menu-mobile__link" to="/shop">
              Sklep
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
