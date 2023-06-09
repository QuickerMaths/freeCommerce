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

const Success = () => {
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
            Your order has been placed successfully!
          </h1>
          <div className="order-details__content">
            <h2 className="order-details__info-id">
              Order ID:
              <span className="order-details__span-id">
                {orderData?.id.slice(8)}
              </span>
            </h2>
            <h2 className="order-details__info">
              Date:
              <span className="order-details__span">
                {orderData?.metadata?.orderDate}
              </span>
            </h2>
            <div className="order-details__order-status-wrapper">
              <h2 className="order-details__info">
                Total price:
                <span className="order-details__span">
                  {orderData?.amount_total / 100} zł
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
                  {orderData?.customer_details?.email}
                </p>
              </div>
              <div className="order-details__shipping-address-info">
                <h2 className="order-details__address-title">Name</h2>
                <p className="order-details__address-content">
                  {orderData?.customer_details?.name}
                </p>
              </div>
              <div className="order-details__shipping-address-info">
                <h2 className="order-details__address-title">City</h2>
                <p className="order-details__address-content">
                  {orderData?.customer_details?.address?.city}
                </p>
              </div>
              <div className="order-details__shipping-address-info">
                <h2 className="order-details__address-title">Street</h2>
                <p className="order-details__address-content">
                  {orderData?.customer_details?.address?.line1 +
                    orderData?.customer_details?.address?.line2}
                </p>
              </div>
              <div className="order-details__shipping-address-info">
                <h2 className="order-details__address-title">Postal code</h2>
                <p className="order-details__address-content">
                  {orderData?.customer_details?.address?.postal_code}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <LoadingPage />;
  }

  return <section>{content}</section>;
};

export default Success;
