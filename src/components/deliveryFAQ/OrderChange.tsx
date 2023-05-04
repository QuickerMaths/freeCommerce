import React from "react";

const OrderChange = () => {
  return (
    <>
      <h2 className="delivery__under-title">Czy mogę zmienić zamównienie?</h2>

      <p className="delivery__info">
        Niestety, nie możemy wprowadzić żadnych zmian w Twoim zamówieniu po
        naciśnięciu przycisku „Złóż zamówienie” w kasie, w tym:
      </p>

      <ul className="delivery__list">
        <li className="delivery__item">
          <p className="delivery__content">Zmiana artykułu lub rozmiaru</p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">Adres dostawy/rozliczeniowy</p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Dodawanie/usuwanie pozycji do zamówienia
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">Sposób wysyłki</p>
        </li>
      </ul>
    </>
  );
};

export default OrderChange;
