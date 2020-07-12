import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import { AviasalesServiceContext} from "./components/aviasales-service-context";
import AviasalesService from "./services/aviasales-service";
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
