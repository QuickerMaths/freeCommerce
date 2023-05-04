import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/main.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (import.meta.env.VITE_ENV === "development") {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
