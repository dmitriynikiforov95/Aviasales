import React from "react";
import "./normalize.css";
import "./app.css";

import appLogo from "./Logo.png";

import TicketListContainer from "../../containers/ticket-list-container";
import TicketListFilterContainer from "../../containers/ticket-list-filter-container";
import TIcketListSortingTabsContainer from "../../containers/ticket-list-sorting-tabs-container";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-logo-container">
        <img src={appLogo} width="82" height="89" alt="logo" />
      </div>
      <div className="components-container">
        <div>
          <TicketListFilterContainer />
        </div>
        <div>
          <TIcketListSortingTabsContainer />
          <TicketListContainer />
        </div>
      </div>
    </div>
  );
};

export default App;