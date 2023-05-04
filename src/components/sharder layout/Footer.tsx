import React from "react";
import logo from "../../assets/images/logo/logo.webp";
import logoSlogan from "../../assets/images/logoSlogan/logoSlogan.webp";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left-side">
          <img className="footer__logo-name" src={logoSlogan} alt="logo name" />
          <img className="footer__logo" src={logo} alt="logo" />
        </div>
        <div className="footer__middle-side">
          <h3 className="footer__contact-title">Kontakt:</h3>
          <a className="footer__mail">support@mmcerber.com</a>
          <a className="footer__phone">+48 123 123 123</a>
        </div>
        <div className="footer__right-side">
          <h3 className="footer__find-us">Znajdź nas na:</h3>
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://instagram.com/mmcerber?igshid=Mzc1MmZhNjY="
                target="_blank"
              >
                <BsInstagram className="footer__social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a className="footer__social-link">
                <FaFacebook className="footer__social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a className="footer__social-link">
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
