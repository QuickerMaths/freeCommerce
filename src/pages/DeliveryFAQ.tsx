import React, { useState } from "react";
import ThingsUHaveToKnow from "../components/deliveryFAQ/ThingsUHaveToKnow";
import OrderChange from "../components/deliveryFAQ/OrderChange";
import WrongAddress from "../components/deliveryFAQ/WrongAddress";
import WrongOrder from "../components/deliveryFAQ/WrongOrder";

const DeliveryFAQ = () => {
  const [current, setCurrent] = useState<JSX.Element>(ThingsUHaveToKnow);

  return (
    <section className="delivery">
      <div className="delivery__container">
        <h1 className="delivery__title">Zamówienia i dostawy</h1>
        <ul className="delivery__nav-list">
          <li className="delivery__nav-item">
            <button
              className="delivery__nav-button"
              onClick={() => setCurrent(ThingsUHaveToKnow)}
            >
              Najwazniejsze informacje
            </button>
          </li>
          <li className="delivery__nav-item">
            <button
              className="delivery__nav-button"
              onClick={() => setCurrent(OrderChange)}
            >
              Zmiana zamówienia
            </button>
          </li>
          <li className="delivery__nav-item">
            <button
              className="delivery__nav-button"
              onClick={() => setCurrent(WrongAddress)}
            >
              Nie prawidłowy adres
            </button>
          </li>
          <li className="delivery__nav-item">
            <button
              className="delivery__nav-button"
              onClick={() => setCurrent(WrongOrder)}
            >
              Braki w zamówieniu
            </button>
          </li>
        </ul>
        <div className="delivery__wrapper">{current}</div>

        <div className="delivery__bottom-wrapper">
          <h2 className="delivery__title">WIĘCEJ PYTAŃ?</h2>
          <p className="delivery__contact">
            Skontaktuj się z naszym zespołem wsparcia tutaj.(link)
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFAQ;
