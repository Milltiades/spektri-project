import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";

import { AuthProvider } from "react-auth-kit";
import { AuthProviderContext } from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
  >
    <HashRouter>
      <AuthProviderContext>
        <App />
      </AuthProviderContext>
    </HashRouter>
  </AuthProvider>
);
