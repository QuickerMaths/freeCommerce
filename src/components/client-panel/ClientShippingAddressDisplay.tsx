import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import ClientShippingAddress from "./ClientShippingAddress";
import ClientShippingAddressForm from "./ClientShippingAddressForm";

const ClientShippingAddressDisplay = () => {
  const [edit, setEdit] = useState<boolean>(true);
  return (
    <section className="client-address-form">
      <div className="client-address-form__container">
        <div className="client-address-form__wrapper">
          <div className="client-address-form__user-info-title-container">
            <h3 className="client-address-form__user-info-title">Twoje Dane</h3>
            <button
              className="client-address-form__edit-button"
              onClick={() => setEdit(!edit)}
            >
              <AiOutlineEdit className="client-address-form__edit-icon" />
            </button>
          </div>
          {edit ? (
            <ClientShippingAddress />
          ) : (
            <ClientShippingAddressForm setEdit={setEdit} edit={edit} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientShippingAddressDisplay;
