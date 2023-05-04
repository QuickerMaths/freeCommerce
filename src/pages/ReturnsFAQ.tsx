import React, { useState } from "react";
import Exchange from "../components/returnsFAQ/Exchange";
import Returns from "../components/returnsFAQ/Returns";
import Complaint from "../components/returnsFAQ/Complaint";

const ReturnsFAQ = () => {
  const [current, setCurrent] = useState<JSX.Element>(Returns);
  return (
    <section className="delivery">
      <div className="delivery__container">
        <h1 className="delivery__title">Zamówienia i dostawy</h1>
        <ul className="delivery__nav-list">
          <li className="delivery__nav-item">
            <button
              className="delivery__nav-button"
              onClick={() => setCurrent(Returns)}
            >
              Zwrot produktu
            </button>
          </li>
          <li className="delivery__nav-item">
            <button
              className="delivery__nav-button"
              onClick={() => setCurrent(Exchange)}
            >
              Wymiana produktu
            </button>
          </li>
          <li className="delivery__nav-item">
            <button
              className="delivery__nav-button"
              onClick={() => setCurrent(Complaint)}
            >
              Reklamacja produktu
            </button>
          </li>
        </ul>
        <div className="delivery__wrapper">{current}</div>
      </div>
    </section>
  );
};

export default ReturnsFAQ;
