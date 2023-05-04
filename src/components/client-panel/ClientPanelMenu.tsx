import React from "react";
import { useLogoutUserMutation } from "../../features/api/apiUploadSlice/athorizationApiSlice";
import { logOut } from "../../features/authSlice/authSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import useToastCreator from "../../hooks/useToastCreator";

interface Props {
  activeClient: string;
  setActiveClient: React.Dispatch<React.SetStateAction<string>>;
}

const ClientPanelMenu: React.FC<Props> = ({
  setActiveClient,
  activeClient,
}) => {
  const dispatch = useAppDispatch();

  const [logoutUser] = useLogoutUserMutation();

  return (
    <ul className="client-panel__menu">
      <li className="client-panel__menu-item">
        <button
          className={`client-panel__menu-button ${
            activeClient === "address" ? "client-panel-active" : ""
          }`}
          onClick={() => setActiveClient("address")}
        >
          Twoje Dane
        </button>
      </li>
      <li className="client-panel__menu-item">
        <button
          className={`client-panel__menu-button ${
            activeClient === "orders" ? "client-panel-active" : ""
          }`}
          onClick={() => setActiveClient("orders")}
        >
          Twoje zamówienia
        </button>
      </li>
      <li className="client-panel__menu-item">
        <button
          className={`client-panel__menu-button ${
            activeClient === "products" ? "client-panel-active" : ""
          }`}
          onClick={() => setActiveClient("products")}
        >
          Zapisane Produkty
        </button>
      </li>
      <li className="client-panel__menu-item">
        <button
          onClick={() => {
            logoutUser("");
            dispatch(logOut());
            useToastCreator("Wylogowano pomyślnie", "success");
          }}
          className="client-panel__menu-button"
        >
          Wyloguj
        </button>
      </li>
    </ul>
  );
};

export default ClientPanelMenu;
