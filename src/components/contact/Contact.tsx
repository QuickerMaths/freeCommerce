import React from "react";
import EmailImgDesktop from "../../assets/images/emailForm/emailFormImg-desktop.webp";
import EmailImgTablet from "../../assets/images/emailForm/emailFormImg-tablet.webp";
import EmailImgMobile from "../../assets/images/emailForm/emailFormImg-mobile.webp";
import useMediaQuery from "../../hooks/useMediaQuery";

const Contact = () => {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="contact">
      <div className="contact__container">
        {matches ? (
          <div
            className="contact__container-img"
            style={{
              backgroundImage: `url(${EmailImgDesktop})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        ) : (
          ""
        )}
        <div className="contact__contact-container">
          <div className="contact__top">
            <h2 className="contact__title">Dane kontaktowe</h2>
            <p className="contact__under-title">
              Kontaktując się z nami w sprawie zamówienia, podaj koniecznie
              numer zamówienia w treści e-maila.
            </p>
            <p className="contact__text">
              Numer zamówienia znajdziesz zawsze w wiadomości potwierdzającej
              jego złożenie / płatność / wysyłkę.
            </p>
            <p className="contact__text">
              Jeżeli złożyłaś zamówienie którego nie udało się opłacić, możesz
              to zrobić wysyłając przelew na rachunek bankowy w tytule wpisując
              numer zamówienia.
              <br /> Konto w PLN: 85 1140 2004 0000 3702 7472 2957
            </p>
          </div>
          <div className="contact__bottom">
            <h2 className="contact__title">MilfMode</h2>
            <p className="contact__text">
              Aleje Jerozolimskie 123A
              <br />
              02-017 Warszawa
              <br />
              12 piętro Atlas Tower
            </p>
            <p className="contact__text">
              e-mail: support@mmcerber.com
              <br /> telefon: +48 22 695 53 70
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
