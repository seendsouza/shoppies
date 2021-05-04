import ReactNotification from "react-notifications-component";
import { NominationsProvider } from "../src/contexts/NominationsContext";

import "../styles/globals.css";
import "../styles/RcSelect.less";
import "react-notifications-component/dist/theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <NominationsProvider>
      <ReactNotification />
      <Component {...pageProps} />
    </NominationsProvider>
  );
}

export default MyApp;
