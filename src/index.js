import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import AviasalesService from "./services/aviasales-service";
import { AviasalesServiceContext} from "./components/aviasales-service-context";

import store from "./store";

const aviasalesService = new AviasalesService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <AviasalesServiceContext.Provider value={aviasalesService}>
        <App />
      </AviasalesServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
