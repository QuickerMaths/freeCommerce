import React, { useState } from "react";
import ClientOrders from "../components/client-panel/ClientOrders";
import ClientProducts from "../components/client-panel/ClientProducts";
import ClientShippingAddressDisplay from "../components/client-panel/ClientShippingAddressDisplay";
import ClientPanelMenu from "../components/client-panel/ClientPanelMenu";
import useMediaQuery from "../hooks/useMediaQuery";
import ClientPanelMobileMenu from "../components/client-panel/ClientPanelMobileMenu";

const ClientPanel = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [activeClient, setActiveClient] = useState<string>("address");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  let content;

  if (activeClient === "address") {
    content = <ClientShippingAddressDisplay />;
  } else if (activeClient === "orders") {
    content = <ClientOrders />;
  } else {
    content = <ClientProducts />;
  }

  return (
    <section className="client-panel">
      <div className="client-panel__container">
        <h2 className="client-panel__title">Panel kilenta</h2>
        {matches ? (
          ""
        ) : (
          <button
            className="client-panel__mobile-menu-button"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        )}
        <div className="client-panel__wrapper">
          <div className="client-panel__content">{content}</div>
          {matches ? (
            <ClientPanelMenu
              activeClient={activeClient}
              setActiveClient={setActiveClient}
            />
          ) : (
            <ClientPanelMobileMenu
              activeClient={activeClient}
              setActiveClient={setActiveClient}
              setMenuOpen={setMenuOpen}
              menuOpen={menuOpen}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientPanel;
