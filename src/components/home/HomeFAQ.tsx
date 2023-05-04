import React from "react";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeFAQ = () => {
  return (
    <section className="home-faq">
      <div className="home-faq__container">
        <ul className="home-faq__list">
          <li className="home-faq__item">
            <Link to="faq/delivery" className="home-faq__link">
              <TbTruckDelivery className="home-faq__icon" />
              <p className="home-faq__content">Zamówienia i dostawa</p>
            </Link>
          </li>
          <li className="home-faq__item">
            <Link to="faq/returns" className="home-faq__link">
              <TbTruckReturn className="home-faq__icon" />
              <p className="home-faq__content">Zwroty i płatności</p>
            </Link>
          </li>
          <li className="home-faq__item">
            <Link to="faq/size-guide" className="home-faq__link">
              <BsBag className="home-faq__icon" />
              <p className="home-faq__content">Produkty i rozmiary</p>
            </Link>
          </li>
          <li className="home-faq__item">
            <Link to="faq/contact" className="home-faq__link">
              <FiMail className="home-faq__icon" />
              <p className="home-faq__content">Skontaktuj się z nami</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeFAQ;
