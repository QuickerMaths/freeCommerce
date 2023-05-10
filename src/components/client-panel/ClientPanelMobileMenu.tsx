import React from "react";
import { useLogoutUserMutation } from "../../features/api/apiUploadSlice/athorizationApiSlice";
import { logOut } from "../../features/authSlice/authSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { GrClose } from "react-icons/gr";
import useToastCreator from "../../hooks/useToastCreator";

interface Props {
  activeClient: string;
  setActiveClient: React.Dispatch<React.SetStateAction<string>>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuOpen: boolean;
}

const ClientPanelMenuMobile: React.FC<Props> = ({
  setActiveClient,
  activeClient,
  setMenuOpen,
  menuOpen,
}) => {
  const dispatch = useAppDispatch();

  const [logoutUser] = useLogoutUserMutation();

  return (
    <ul
      className={`client-panel__menu-mobile ${
        menuOpen ? "client-panel-menu-open" : ""
      }`}
    >
      <GrClose
        className="client-panel__mobile-menu-close-icon"
        onClick={() => setMenuOpen(false)}
      />
      <li className="client-panel__menu-item">
        <button
          className={`client-panel__menu-button ${
            activeClient === "address" ? "client-panel-active" : ""
          }`}
          onClick={() => {
            setActiveClient("address");
            setMenuOpen(false);
          }}
        >
          About You
        </button>
      </li>
      <li className="client-panel__menu-item">
        <button
          className={`client-panel__menu-button ${
            activeClient === "orders" ? "client-panel-active" : ""
          }`}
          onClick={() => {
            setActiveClient("orders");
            setMenuOpen(false);
          }}
        >
          Your Orders
        </button>
      </li>
      <li className="client-panel__menu-item">
        <button
          className={`client-panel__menu-button ${
            activeClient === "products" ? "client-panel-active" : ""
          }`}
          onClick={() => {
            setActiveClient("products");
            setMenuOpen(false);
          }}
        >
          Saved Products
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
          Logout
        </button>
      </li>
    </ul>
  );
};

export default ClientPanelMenuMobile;
