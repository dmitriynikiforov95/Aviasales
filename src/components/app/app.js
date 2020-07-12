import React from "react";
import TicketListContainer from "../../containers/ticket-list-container";
import TicketListFilterContainer from "../../containers/ticket-list-filter-container";
import TicketListSortingTabsContainer from "../../containers/ticket-list-sorting-tabs-container";
import "./app.css";
import appLogo from "./app-logo.png";

const App = () => (
  <div className="app-container">
    <div className="app-logo-container">
      <img src={appLogo} width="82" height="89" alt="logo" />
    </div>
    <div className="components-flex-container">
      <div>
        <TicketListFilterContainer />
      </div>
      <div>
        <TicketListSortingTabsContainer />
        <TicketListContainer />
      </div>
    </div>
  </div>
);

export default App;
