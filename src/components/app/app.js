import React from "react";
import "./app.css";
import logo from "../../svg/Logo.svg";
import TicketsListSortSettings from "../tickets-list-sort-settings";
import TicketsListContainer from "../../containers/tickets-list-container";
import TicketsListFilter from "../tickets-list-filter";

const App = () => {
  return (
    <div className="app-wrapp">
      <div className="app-logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="components-wrapper">
        <div>
          <TicketsListFilter />
        </div>
        <div>
          <TicketsListSortSettings />
          <TicketsListContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
