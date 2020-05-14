import React from "react";
import s from "./ticket-list-sorting-tabs.module.css";

const TicketListSortingTabs = ({ activeBtn, setActiveSortingValue, sortingButtons}) => {

  return (
    <div className={s.container}>
      {sortingButtons.map(({ value, sortingValue }) => (
        <button
          type="button"
          onClick={() => setActiveSortingValue(sortingValue)}
          className={`${s.btn} " ${
            activeBtn === sortingValue && s.activeBtn
            }`}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default TicketListSortingTabs;
