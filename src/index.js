import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-g-6blqhv.us.auth0.com
//7qbcBd58IkDINfzDCBbEwzLa9RhVDIiL

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-g-6blqhv.us.auth0.com"
      clientId="7qbcBd58IkDINfzDCBbEwzLa9RhVDIiL"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
