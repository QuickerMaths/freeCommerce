import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import logo from "../../assets/images/logo/logo.webp";
import logoSlogan from "../../assets/images/logoSlogan/logoSlogan.webp";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";
import useMediaQuery from "../../hooks/useMediaQuery";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({
  setOpen,
  setLoginOpen,
  setMobileMenuOpen,
}) => {
  const matches = useMediaQuery("(min-width: 768px)");

  const itemsInCart = useAppSelector(
    (state: RootState) => state.shoppingCart.itemsInCart
  );

  const username = useAppSelector(
    (state: RootState) => state.authSlice.username
  );

  return (
    <header className="header">
      <div className="header__center-container">
        <Link to={"/"}>
          <div className="header__logo-container">
            <img
              alt="logo"
              src={logo}
              className="header__logo"
              height={50}
              width={50}
            />
            {matches ? (
              <img
                alt="logoName"
                src={logoSlogan}
                className="header__logo-name"
                height={50}
                width={300}
              />
            ) : (
              ""
            )}
          </div>
        </Link>
        {matches ? (
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="/">Strona Główna</Link>
              </li>
              <li className="navigation__item">
                <Link to="/shop">Sklep</Link>
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
        <div className="header__ui">
          <div className="header__user">
            {username ? (
              <div className="header__user-logged-in">
                {matches ? (
                  <h2 className="header__user-welcome">Witaj {username}</h2>
                ) : (
                  ""
                )}

                <Link to="/panel">
                  <button
                    className="header__user-button"
                    aria-label="user panel"
                  >
                    <AiOutlineUser className="header__user-svg" />
                  </button>
                </Link>
              </div>
            ) : (
              <button
                className="header__user-button"
                onClick={() => setLoginOpen(true)}
                aria-label="login"
              >
                <AiOutlineUser className="header__user-svg" />
              </button>
            )}
          </div>
          <div className="header__cart">
            <button
              className="header__cart-button"
              onClick={() => setOpen(true)}
              aria-label="shopping cart"
            >
              <BsCart2 className="header__cart-svg" />
            </button>
            {itemsInCart !== 0 ? (
              <div className="header__item-counter">{itemsInCart}</div>
            ) : (
              ""
            )}
          </div>
          {matches ? (
            ""
          ) : (
            <div className="header__hamburger-menu">
              <button
                className="header__hamburger-button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="hamburger menu"
              >
                <RxHamburgerMenu className="header__hamburger-icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
