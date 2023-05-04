import React from "react";
import { Link } from "react-router-dom";
import {
  useGetStripeLineItemsQuery,
  useGetStripeSessionQuery,
} from "../../features/api/stripeApi/stripeApiSlice";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Props {
  sessionId: string;
}

const ClientSingleOrder: React.FC<Props> = ({ sessionId }) => {
  const matches = useMediaQuery("(min-width: 768px)");

  const {
    data: orderData,
    isSuccess,
    isLoading,
  } = useGetStripeSessionQuery(sessionId);

  const {
    data: lineItemsData,
    isSuccess: lineItemsSuccess,
    isLoading: lineItemsLoading,
  } = useGetStripeLineItemsQuery(sessionId);

  let content;

  if (isLoading || lineItemsLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess || lineItemsSuccess) {
    content = (
      <div className="single-order__container">
        <p className="single-order__text">{orderData?.id.slice(8, 13)}...</p>

        <p className="single-order__text">{lineItemsData?.data.length}</p>
        {matches ? (
          <ul className="single-order__items-container">
            {lineItemsData?.data.map((item: any, i: number) => (
              <li className="single-order__item" key={i}>
                {item.description}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
        <p className="single-order__text">{orderData?.metadata?.orderDate}</p>
        <p className="single-order__text">{orderData?.amount_total / 100} zł</p>
        <Link
          to={`orders/:${orderData?.id}`}
          state={{ lineItemsData: lineItemsData, orderData: orderData }}
        >
          <button className="single-order__button">Szczegóły</button>
        </Link>
      </div>
    );
  }

  return <li className="single-order__item">{content}</li>;
};

export default ClientSingleOrder;
