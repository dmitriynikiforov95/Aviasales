import React from "react";
import s from "./ticket-list-filter.module.css";

const TicketListFilter = ({ stopsValue, setStopsValue, ticketListFilterItems }) => {

  return (

    <div className={s.container}>
      <h2 className={s.title}>Количество пересадок</h2>
      <ul className={s.list}>
        {ticketListFilterItems.map(({ value, text }) => (
          <li className={s.item}>
            <label className={s.itemLabel} htmlFor={value}>
              <input
                id={value}
                type="checkbox"
                className={s.visuallyHidden}
                onChange={() => setStopsValue(value)}
                checked={stopsValue[value]}
              />
              <span className={s.checkboxIndicator} /> {text[0].toUpperCase() + text.slice(1)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default TicketListFilter;
