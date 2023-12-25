import { DashboardRoutes } from "features/dashboard";
import { I18nextProvider } from "react-i18next";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "router";
import NoMatch from "shared/views/NoMatch";

import i18n from "../i18n";

import "assets/scss/app.scss";
import "react-toastify/dist/ReactToastify.css";

import "../prototype";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {useRoutes([
        ...AppRoutes,
        {
          path: "",
          element: DashboardRoutes[0].element,
        },
        {
          path: "*",
          element: <NoMatch />,
        },
      ])}
      {/* <LoadingIndicator /> */}
      <ToastContainer autoClose={3000} />
    </I18nextProvider>
  );
}

export default App;
