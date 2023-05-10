import React from "react";
import logo from "../../assets/images/logo/logo.webp";
import logoSlogan from "../../assets/images/logoSlogan/logoSlogan.webp";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer__container">
        <button
          className="header__logo-button"
          aria-label="logo"
          onClick={() => {
            navigate("/");
            scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <h2 className="header__logo">FreeCommerce</h2>
        </button>
        <div className="footer__middle-side">
          <h3 className="footer__contact-title">Contact:</h3>
          <a href="mailto:support@mmcerber.com" className="footer__mail">
            support@freecommerce.com
          </a>
          <a href="tel:+48 123 123 123" className="footer__phone">
            +48 123 123 123
          </a>
        </div>
        <div className="footer__right-side">
          <h3 className="footer__find-us">Find us:</h3>
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a
                aria-label="Instagram"
                className="footer__social-link"
                href="https://instagram.com/"
                target="_blank"
              >
                <BsInstagram className="footer__social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a
                aria-label="Facebook"
                href="facebook.com"
                className="footer__social-link"
              >
                <FaFacebook className="footer__social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a
                aria-label="Tiltok"
                href="tiktok.com"
                className="footer__social-link"
              >
                <SiTiktok className="footer__social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
