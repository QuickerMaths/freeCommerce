import React from "react";

const WrongOrder = () => {
  return (
    <>
      <h2 className="delivery__under-title">
        MOJE ZAMÓWIENIE PRZYBYŁO, ALE JEST ZŁE
      </h2>

      <p className="delivery__info">
        W mało prawdopodobnym przypadku braku przedmiotu lub otrzymania
        niewłaściwego przedmiotu/zamówienia, prosimy o natychmiastowy kontakt z
        następującymi informacjami, a my natychmiast to rozwiążemy;
      </p>

      <ul className="delivery__list">
        <li className="delivery__item">
          <p className="delivery__content">Numer Twojego zamówienia</p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Nazwa przedmiotu, którego nie otrzymałeś
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Zdjęcie i nazwę przedmiotu, który otrzymałeś (jeśli jest to
            niewłaściwy przedmiot)
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Gdy otrzymamy powyższe informacje, nasz zespół obsługi klienta
            zajmie się tym jak najszybciej!
          </p>
        </li>
      </ul>

      <p className="delivery__wrong-order-info">
        WSZELKIE REKLAMACJE DOTYCZĄCE ZAMÓWIEŃ Z BRAKUJĄCYMI/NIEWŁAŚCIWYMI
        ELEMENTAMI MUSZĄ ZOSTAĆ ZŁOŻONE W CIĄGU 7 DNI OD DATY DOSTAWY.
      </p>
    </>
  );
};

export default WrongOrder;
