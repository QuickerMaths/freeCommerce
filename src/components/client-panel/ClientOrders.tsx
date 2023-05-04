import React from "react";
import { useGetPaymentHistoryQuery } from "../../features/api/ordersApi/ordersApiSlice";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";
import ClientSingleOrder from "./ClientSingleOrder";

const ClientOrders = () => {
  const userId = useAppSelector((state: RootState) => state.authSlice.id);

  const { data } = useGetPaymentHistoryQuery(userId);

  return (
    <div className="client-orders">
      <h2 className="client-orders__title">Twoje Zamówienia</h2>

      <ul className="single-order">
        {data?.map((item) => (
          <ClientSingleOrder
            key={item.id}
            sessionId={item.attributes.stripeId}
          />
        ))}
      </ul>
    </div>
  );
};

export default ClientOrders;
