import React from "react";
import s from "./ticket-list-filter.module.css";

const TicketListFilter = ({
  stopsFilterValues,
  setStopsFilterValues,
  ticketListFilterItems,
}) => (
  <div className={s.container}>
    <h2 className={s.title}>Количество пересадок</h2>
    <ul className={s.list}>
      {ticketListFilterItems.map(({ value, text }, idx) => (
        <li className={s.item} key={idx}>
          <label className={s.itemLabel} htmlFor={value}>
            <input
              id={value}
              type="checkbox"
              className={s.visuallyHidden}
              onChange={() => setStopsFilterValues(value)}
              checked={stopsFilterValues[value]}
            />
            <span className={s.checkboxIndicator} />{" "}
            {text[0].toUpperCase() + text.slice(1)}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default TicketListFilter;
