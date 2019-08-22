import React from "react";
import { connect } from "react-redux";
import { setStopsValue } from "../../actions";
import "./tickets-list-filter.css";

const TicketsListFilter = ({ stopsValue, setStopsValue }) => {
  return (
    <div className="tickets-filter-wrapper">
      <h2 className="tickets-filter-title">Количество пересадок</h2>

      <ul className="tickets-filter-list">
        <li className="tickets-filter-list-item">
          <label className="tickets-filter-list-item-label" htmlFor="chk-all">
            <input
              id="chk-all"
              type="checkbox"
              className="visually-hidden"
              defaultChecked={stopsValue.all}
              onChange={() => setStopsValue("all")}
              checked={stopsValue.all}
            />
            <span className="checkbox-indicator" /> Все
          </label>
        </li>

        <li className="tickets-filter-list-item">
          <label className="tickets-filter-list-item-label" htmlFor="chk-0">
            <input
              id="chk-0"
              type="checkbox"
              className="visually-hidden"
              onChange={() => setStopsValue("0")}
              checked={stopsValue.zero}
            />
            <span className="checkbox-indicator" /> Без пересадок
          </label>
        </li>
        <li className="tickets-filter-list-item">
          <label className="tickets-filter-list-item-label" htmlFor="chk-1">
            <input
              id="chk-1"
              type="checkbox"
              className="visually-hidden"
              onChange={() => setStopsValue("1")}
              checked={stopsValue.one}
            />
            <span className="checkbox-indicator" /> 1 пересадка
          </label>
        </li>
        <li className="tickets-filter-list-item">
          <label className="tickets-filter-list-item-label" htmlFor="chk-2">
            <input
              id="chk-2"
              type="checkbox"
              className="visually-hidden"
              onChange={() => setStopsValue("2")}
              checked={stopsValue.two}
            />
            <span className="checkbox-indicator" /> 2 пересадки
          </label>
        </li>
        <li className="tickets-filter-list-item">
          <label className="tickets-filter-list-item-label" htmlFor="chk-3">
            <input
              id="chk-3"
              type="checkbox"
              className="visually-hidden"
              onChange={() => setStopsValue("3")}
              checked={stopsValue.three}
            />
            <span className="checkbox-indicator" /> 3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ stopsValue }) => {
  return {
    stopsValue
  };
};

const mapDispatchToProps = {
  setStopsValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsListFilter);
