import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import useGetUserShippingAddress from "../../hooks/useGetUserShippingAddress";
import { RootState } from "../../redux/store";

const ClientShippingAddress = () => {
  const data = useGetUserShippingAddress();

  const email = useAppSelector((state: RootState) => state.authSlice.email);

  return (
    <div className="client-address">
      <div className="client-address__value-container">
        <h2 className="client-address__title">Nazwa uzytkownika</h2>
        <p className="client-address__value">{data?.username}</p>
      </div>
      <div className="client-address__value-container">
        <h2 className="client-address__title">Email</h2>
        <p className="client-address__value">{email}</p>
      </div>
      <div className="client-address__value-container">
        <h2 className="client-address__title">Numer Telefonu</h2>
        <p className="client-address__value">
          {data?.phoneNumber ? data.phoneNumber : "Uzupełnij dane"}
        </p>
      </div>
    </div>
  );
};

export default ClientShippingAddress;
