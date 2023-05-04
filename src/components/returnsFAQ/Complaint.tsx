import React from "react";

const Complaint = () => {
  return (
    <>
      <h2 className="delivery__under-title">
        Jeżeli jesteś zainteresowany/a reklamacją towaru, zapoznaj się proszę z
        poniższą instrukcją:
      </h2>
      <ul className="delivery__list">
        <li className="delivery__item">
          <p className="delivery__content">
            Napisz do nas na mmcerber@gmail.com, aby przedstawić nam co
            dokładnie stało się z produktem.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Jeżeli istnieje taka możliwość – prześlij proszę zdjęcia ukazujące
            wadę produktu, usprawni to proces reklamacji.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Pamiętaj, że masz 2 lata od daty zakupu, aby złożyć reklamację.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            W przypadku reklamacji (zależnie od przypadku), możemy zaproponować:
            <ul>
              <li>
                <p>- naprawę wady</p>
              </li>
              <li>
                <p>- wymianę na nowy produkt</p>
              </li>
              <li>
                <p>- zwrot środków</p>
              </li>
            </ul>
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Reklamowane towary należy zabezpieczyć przed transportem oraz
            zapakować z paragonem i formularzem, który znajduje się na drugiej
            stronie.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            W przypadku, gdy zgubiłeś paragon nie przejmuj się! Wystarczy że
            podasz nam numer zamówienia, a my odszukamy dokument w systemie.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Nie przyjmujemy paczek za pobraniem, a także nie zwracamy środków za
            wysyłkę do nas reklamowanego produktu.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Zwrot środków zostanie zrealizowany tak szybko, jak to możliwe, nie
            później niż w terminie 14 dni roboczych od daty otrzymania
            przesyłki.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            W przypadku, gdy przy zamówieniu została wybrana opcja „przedpłaty”,
            środki zostaną zwrócone na ten sam rachunek (chyba, że w formularzu
            wskażesz inny numer konta).
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Warunki reklamacji produktów wysłanych za granicę ustalane są
            indywidualnie z Klientem.
          </p>
        </li>
      </ul>
    </>
  );
};

export default Complaint;
