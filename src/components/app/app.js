import React from "react";
// import './app.css';
import TicketsListSortSettings from "../tickets-list-sort-settings";
import TicketsListContainer from "../../containers/tickets-list-container";
import TicketsListFilter from "../tickets-list-filter";

const App = () => {
  return (
    <div>
      <TicketsListSortSettings />
      <TicketsListFilter />
      <TicketsListContainer />
    </div>
  );
};

export default App;
