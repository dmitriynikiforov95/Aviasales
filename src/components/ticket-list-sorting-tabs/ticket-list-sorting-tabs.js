import React from "react";
import s from "./ticket-list-sorting-tabs.module.css";
import classNames from "classnames/bind";

const TicketListSortingTabs = ({
  activeTab,
  setStopsSortingValue,
  sortingTabs,
}) => {
  const cx = classNames.bind(s);

  return (
    <div className={s.container}>
      {sortingTabs.map(({ tabText, sortingValue }, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => setStopsSortingValue(sortingValue)}
          className={cx({
            tab: true,
            activeTab: activeTab === sortingValue,
          })}
        >
          {tabText}
        </button>
      ))}
    </div>
  );
};

export default TicketListSortingTabs;
