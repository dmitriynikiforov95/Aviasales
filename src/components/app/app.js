import React from "react";
import "./app.css";
import appLogo from "../../svg/Logo.svg";

import TicketListContainer from "../../containers/ticket-list-container";
import TicketListFilterContainer from "../../containers/ticket-list-filter-container";
import TIcketListSortingTabsContainer from "../../containers/ticket-list-sorting-tabs-container";

const App = () => {
  return (
    <div className="app-container">
      <div className="app-logo-wrapper">
        <img src={appLogo} alt="logo" />
      </div>
      <div className="components-wrapper">
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