import React from "react";
import { useSearchParams } from "react-router-dom";
import ClientOrderProductDetail from "../components/client-panel/ClientOrderProductDetail";
import {
  useGetStripeLineItemsQuery,
  useGetStripeSessionQuery,
} from "../features/api/stripeApi/stripeApiSlice";
import { reset } from "../features/shopping-cart-slice/shoppingCartSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import LoadingPage from "./LoadingPage";

const Cancel = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const sessionId = searchParams.get("session_id");

  const {
    data: orderData,
    isSuccess,
    isLoading,
  } = useGetStripeSessionQuery(sessionId);

  if (isLoading) {
    dispatch(reset());
  }

  const { data: lineItemsData, isSuccess: lineItemsSuccess } =
    useGetStripeLineItemsQuery(sessionId);

  let content;

  if (isSuccess && lineItemsSuccess) {
    content = (
      <section className="order-details">
        <div className="order-details__container">
          <h1 className="order-details__title">
            Twoje zamówienie nie zostało opłacone
          </h1>
          <div className="order-details__content">
            <h2 className="order-details__info-id">
              Numer zamówienia:
              <span className="order-details__span-id">
                {orderData?.id.slice(8)}
              </span>
            </h2>
            <h2 className="order-details__info">
              Data złozenia zamówienia:
              <span className="order-details__span">
                {orderData?.metadata?.orderDate}
              </span>
            </h2>
            <div className="order-details__order-status-wrapper">
              <h2 className="order-details__info">
                Cena całkowita:
                <span className="order-details__span">
                  {orderData?.amount_total / 100} zł
                </span>
              </h2>
              <h2 className="order-details__info-order-status">
                Status zamówienia:
                <span
                  className="order-details__span"
                  style={{
                    color: `${
                      orderData?.payment_status === "paid" ? "green" : "red"
                    }`,
                  }}
                >
                  {orderData?.payment_status === "paid" ? (
                    <p>Opłacono</p>
                  ) : orderData.status === "open" ? (
                    <div className="order-details__unpaid-order-wrapper">
                      <p className="order-details__unpaid-order-text">
                        Nie opłacono
                      </p>
                      <button className="order-details__unpaid-order-button">
                        <a
                          className="order-details__unpaid-order-link"
                          href={orderData.url}
                        >
                          Opłać zamówienie
                        </a>
                      </button>
                    </div>
                  ) : (
                    <p>Zamówienie wygasło</p>
                  )}
                </span>
              </h2>
            </div>
          </div>
          <div className="order-details__content-bottom">
            <ul className="order-details__products-list">
              {lineItemsData.data.map((item: any) => (
                <ClientOrderProductDetail key={item.id} item={item} />
              ))}
            </ul>
            <div className="order-details__shipping-address">
              <div className="order-details__shipping-address-info">
                <h2 className="order-details__address-title">Email</h2>
                <p className="order-details__address-content">
                  {orderData?.customer_details
                    ? orderData?.customer_details?.email
                    : "Nie podano"}
                </p>
              </div>
              <div className="order-details__shipping-address-info">
                <h2 className="order-details__address-title">
                  Imię i nazwisko
                </h2>
                <p className="order-details__address-content">
                  {orderData?.customer_details
                    ? orderData?.customer_details?.name
                    : "Nie podano"}
                </p>
              </div>
              <div className="order-details__shipping-address-info">
                <h2 className="order-details__address-title">Miasto</h2>
                <p className="order-details__address-content">
                  {orderData?.customer_details
                    ? orderData?.customer_details?.address?.city
                    : "Nie podano"}
                </p>
              </div>
              <div className="order-details__shipping-address-info">
                <h2 className="order-details__address-title">Ulica</h2>
                <p className="order-details__address-content">
                  {orderData?.customer_details
                    ? orderData?.customer_details?.address?.line1 +
                      orderData?.customer_details?.address?.line2
                    : "Nie podano"}
                </p>
              </div>
              <div className="order-details__shipping-address-info">
                <h2 className="order-details__address-title">Kod pocztowy</h2>
                <p className="order-details__address-content">
                  {orderData?.customer_details
                    ? orderData?.customer_details?.address?.postal_code
                    : "Nie podano"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (isLoading) {
    return <LoadingPage />;
  }

  return <section>{content}</section>;
};

export default Cancel;
