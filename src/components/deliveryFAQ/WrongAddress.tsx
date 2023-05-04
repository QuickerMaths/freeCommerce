import React from "react";

const WrongAddress = () => {
  return (
    <>
      <h2 className="delivery__under-title">
        MYŚLĘ, ŻE MÓJ ADRES JEST NIEPRAWIDŁOWY NA MOIM ZAMÓWIENIU?
      </h2>
      <ul className="delivery__list">
        <li className="delivery__item">
          <p className="delivery__content">
            Niestety, nie możemy zmienić adresu u kuriera po złożeniu
            zamówienia, jednak można zaktualizować preferencje dotyczące dostawy
            u kuriera, kontaktując się z nim bezpośrednio.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Jeśli z jakiegokolwiek powodu Twoje zamówienie nie może zostać
            dostarczone, kurier zwróci je do nas, a Ty otrzymasz automatyczny
            zwrot pieniędzy, gdy paczka dotrze do naszego magazynu. Na maila
            dostaniesz wiadomość pod kątem wszelkich aktualizacji.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Jeśli Twoje zamówienie zostało wysłane, skontaktuj się bezpośrednio
            z kurierem, ponieważ może być w stanie Ci pomóc.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Ważne, aby wiedzieć... Jeśli podasz nieprawidłowy adres przy kasie,
            nie możemy zostać pociągnięci do odpowiedzialności za zaginięcie
            zamówienia, co oznacza, że nie jesteśmy zobowiązani do zwrotu
            pieniędzy/wymiany tego zamówienia.
          </p>
        </li>
      </ul>
    </>
  );
};

export default WrongAddress;
