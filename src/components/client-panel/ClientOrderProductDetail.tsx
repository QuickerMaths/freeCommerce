import React from "react";
import { useGetStripeProductsQuery } from "../../features/api/stripeApi/stripeApiSlice";

interface Props {
  item: any;
}

const ClientOrderProductDetail: React.FC<Props> = ({ item }) => {
  const { data } = useGetStripeProductsQuery(item.price.product);

  return (
    <li className="order-details__item">
      <img
        className="order-details__img"
        src={import.meta.env.VITE_UPLOAD_URL + data?.metadata?.url}
      />
      <div className="order-details__item-content">
        <h3 className="order-details__item-name">{item.description}</h3>
        <p className="order-details__item-total-price">
          Cena: {item.price.unit_amount / 100} zł
        </p>
        <p className="order-details__item-quantity">Ilość: {item.quantity}</p>
      </div>
    </li>
  );
};

export default ClientOrderProductDetail;
