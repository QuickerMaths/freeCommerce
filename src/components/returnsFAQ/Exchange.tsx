import React from "react";

const Exchange = () => {
  return (
    <>
      <h2 className="delivery__under-title">
        Jeżeli jesteś zainteresowany/a zwrotem towaru, zapoznaj się proszę z
        poniższą instrukcją:
      </h2>
      <ul className="delivery__list">
        <li className="delivery__item">
          <p className="delivery__content">
            Dokonując zwrotu możesz skorzystać z naszego kuriera przesyłając
            następujące informacje na adres mmcerber@gmail.com:
          </p>
          <ul>
            <li>
              <p>- Imię i nazwisko</p>
            </li>
            <li>
              <p>- Numer zamównienia</p>
            </li>
            <li>
              <p>
                - Pełny adres do odbioru wraz danymi kontaktowymi (adres e-mail
                i numer telefonu)
              </p>
            </li>
            <li>
              <p>
                - W przypadku wyboru opcji odbioru produktu przez naszego
                kuriera (tylko GLS) prosimy o zawarcie informacji w mailu:
                ,,Proszę o nadanie kuriera na powyższy adres” - 20 zł koszt
                kuriera w dwie strony
              </p>
            </li>
          </ul>
        </li>

        <li className="delivery__item">
          <p className="delivery__content">
            Płatności za kuriera można dokonać na dwa sposoby:
          </p>

          <ul>
            <li>
              <p>
                - Należność można uregulować za pośrednictwem przelewu na
                poniższe dane: <br /> <strong>ODBIORCA:</strong> Milf Mode
                Original NRB: 46291000060000000002937875 <br />{" "}
                <strong>TYTUŁ:</strong> wymiana #numer_zamówienia <br />
                <strong>KWOTA:</strong> 20,00 ZŁ - Dokonując przelewu należy
                wysłać do nas potwierdzenie zrealizowanego przelewu,
                wygenerowane ze strony bankowości elektronicznej, w formacie
                pdf.
              </p>
            </li>
            <li>
              <p>
                - Możesz również wybrać opcję pobrania, wtedy kurier poprosi Cię
                o uregulowanie należności 20 zł przy dostarczeniu paczki z
                wymienianym towarem. <br /> W przypadku wysyłki towaru we
                własnym zakresie, koszty wysyłki leżą po Twojej stronie i nie
                podlegają zwrotom. Poniżej zamieszczamy dokładne dane do wysyłki
                wymienianego towaru:
                <br /> Milf Mode Original <br /> ul. Powstańców Śląskich 9/I
                m.39, 85-665, <br /> Bydgoszcz tel. 609 621 934
              </p>
            </li>
            <li>
              <p>
                - Jeżeli zdecydujesz się na wysyłkę we własnym zakresie to koszt
                wysyłki zwrotnej wynosi 10 zł + koszty jakie ponosisz przy
                wysłaniu paczki samodzielnie.
              </p>
            </li>
            <li>
              <p>
                - Jeżeli wykonałeś/aś przelew, koniecznie dołącz potwierdzenie
                do paczki, w przeciwnym razie kurier poprosi o uregulowanie
                należności przy odbiorze.
              </p>
            </li>
          </ul>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Przed odesłaniem towarów sprawdź na naszej stronie czy możesz dodać
            produkt, którym jesteś zainteresowany/a do koszyka – jeżeli istnieje
            taka możliwość – produkt jest dostępny i wymiana jest możliwa.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            W przypadku wymiany na inny rozmiar tego samego modelu produktu cena
            pozostaje bez zmian.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Istnieje możliwość wymiany produktu na inny model. Poniżej
            przedstawiamy jak wygląda sytuacja jeżeli występuje różnica w cenie:
            <ul>
              <li>
                <p>
                  - Produkt na który wymieniasz jest droższy – zaznacz opcję
                  pobrania / ureguluj różnicę za pomocą przelewu i prześlij do
                  nas potwierdzenie w formacie pdf.
                </p>
              </li>
              <li>
                <p>
                  - Produkt na który wymieniasz jest tańszy – podaj nam numer
                  rachunku do zwrotu różnicy / zwróć produkt zgodnie z procedurą
                  zwrotu
                </p>
              </li>
            </ul>
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Wymiany możesz dokonać w terminie 30 dni od daty odebrania
            zamówienia.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Wymieniane towary należy zabezpieczyć przed transportem oraz
            zapakować z formularzem, który znajduje się poniżej.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            W przypadku, gdy nie możesz znaleźć paragonu na mailu nie przejmuj
            się! Wystarczy że podasz nam numer zamówienia, a my odszukamy
            dokument w systemie.
          </p>
        </li>
        <li className="delivery__item">
          <p className="delivery__content">
            Pamiętaj proszę, że odsyłany produkt nie może nosić śladów
            użytkowania, w przeciwnym razie odeślemy towar, na Twój koszt - bez
            dokonywania wymiany.
          </p>
        </li>
      </ul>
    </>
  );
};

export default Exchange;
