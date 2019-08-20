import React from 'react';
import {connect} from 'react-redux';
import {setStopsValue} from '../../actions';

const TicketsListFilter = ({stopsValue, setStopsValue}) => {
  return (
    <div className="tickets-filter-wrapper">
      <h2 lassName="tickets-filter-title">КОЛИЧЕСТВО ПЕРЕСАДОК</h2>

      <ul className="tickets-filter-list">
        <li className="tickets-filter-list-item">
          <input
            id="chk-all"
            type="checkbox"
            defaultChecked={stopsValue.all}
            onChange={() => setStopsValue("all")}
            checked={stopsValue.all}
          />
          <label htmlFor="chk-all"> Все</label>
        </li>
        <li className="tickets-filter-list-item">
          <input
            id="chk-0"
            type="checkbox"
            onChange={() => setStopsValue("0")}
            checked={stopsValue.zero}
          />
          <label htmlFor="chk-0"> Без пересадок</label>
        </li>
        <li lassName="tickets-filter-list-item">
          <input
            id="chk-1"
            type="checkbox"
            onChange={() => setStopsValue("1")}
            checked={stopsValue.one}
          />
          <label htmlFor="chk-1"> Одна пересадка</label>
        </li>
        <li lassName="tickets-filter-list-item">
          <input
            id="chk-2"
            type="checkbox"
            onChange={() => setStopsValue("2")}
            checked={stopsValue.two}
          />
          <label htmlFor="chk-2"> Две пересадки</label>
        </li>
        <li className="tickets-filter-list-item">
          <input
            id="chk-3"
            type="checkbox"
            onChange={() => setStopsValue("3")}
            checked={stopsValue.three}
          />
          <label htmlFor="chk-3"> Три пересадки</label>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({stopsValue}) => {
  return {
    stopsValue
  }
}

const mapDispatchToProps = {
  setStopsValue
};

export default connect(mapStateToProps,mapDispatchToProps)(TicketsListFilter);
