import React from "react";

const ThingsUHaveToKnow = () => {
  return (
    <>
      <h2 className="delivery__under-title">Musisz Wiedzeć</h2>
      <ul className="delivery__list">
        <li className="delivery__item">
          <p className="delivery__content">
            Po złożeniu zamówienia otrzymasz wiadomość e-mail z potwierdzeniem,
            a po wysłaniu zamówienia z naszego magazynu drugą wiadomość e-mail
            zawierającą dalsze informacje.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            W mało prawdopodobnym przypadku, gdy nie otrzymasz zamówienia po
            podanym terminie dostawy lub gdy Twoje zamówienie zostanie
            uszkodzone, skontaktuj się z nami, gdy tylko się o tym dowiesz i nie
            dłużej niż 7 dni od daty dostawy podanej w mailu.
          </p>
        </li>
      </ul>
    </>
  );
};

export default ThingsUHaveToKnow;
