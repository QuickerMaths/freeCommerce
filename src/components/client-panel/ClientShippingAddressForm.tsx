import React, { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { RootState } from "../../redux/store";
import { AiOutlineEdit } from "react-icons/ai";
import { useUpdateUserDataMutation } from "../../features/api/apiUploadSlice/athorizationApiSlice";

export type ClientShippingAddressProps = {
  username: string;
  phoneNumber: string;
};

interface Props {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
}

const ClientShippingAddressForm: React.FC<Props> = ({ setEdit, edit }) => {
  const userData = useAppSelector((state: RootState) => state.authSlice);

  const [updateUserData] = useUpdateUserDataMutation();

  const [clientShippingAddress, setClientShippingAddress] =
    useState<ClientShippingAddressProps>({
      username: "",
      phoneNumber: "",
    });

  const [errMsg, setErrMsg] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClientShippingAddress({
      ...clientShippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateUserData({
        userShippingAddress: clientShippingAddress,
        userId: userData.id,
      });
      setEdit(!edit);
    } catch (err: any) {
      if (err.status === 400) {
        setErrMsg("Brakuje hasła lub nazwy uzytkownika");
      } else if (err.status === 401) {
        setErrMsg("Hasło lub nazwa uzywtkownika nieprawidłowe");
      } else if (!err) {
        setErrMsg("Serwer nie odpowiada");
      } else {
        setErrMsg("Hasło lub nazwa uzywtkownika nieprawidłowe");
      }

      alert("error");
    }
  };

  return (
    <>
      <p
        className={errMsg ? "login__error-message" : "not-visible"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form onSubmit={handleSubmit} className="client-address-form__form">
        <label htmlFor="username" className="client-address-form-label">
          Nazwa uzytkownika
        </label>
        <input
          value={clientShippingAddress.username}
          name="username"
          onChange={handleChange}
          id="username"
          type="text"
          className="client-address-form__input"
          required
        />
        <label htmlFor="email" className="client-address-form-label">
          Email
        </label>
        <input
          value={userData.email ? userData.email : ""}
          id="email"
          type="email"
          className="client-address-form__input"
          required
          disabled
        />
        <label htmlFor="phoneNumber" className="client-address-form-label">
          Numer Telefonu
        </label>
        <input
          value={clientShippingAddress.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          id="phoneNumber"
          type="tel"
          className="client-address-form__input"
          required
          minLength={9}
          maxLength={9}
        />
        <button type="submit" className="client_address__submit-button">
          Zaaktualizuj swoje dane
        </button>
      </form>
    </>
  );
};

export default ClientShippingAddressForm;
