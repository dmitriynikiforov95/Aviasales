import React, { Component } from "react";
import { connect } from "react-redux";
import { setSortValue } from "../../actions";
import "./tickets-list-sort-settings.css";

class TicketsListSortSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: true,
      duration: false
    };
    this.setActiveButton = this.setActiveButton.bind(this);
  }

  setActiveButton(currentValue, otherValue, sortSetting) {
    this.props.setSortValue(sortSetting);
    this.setState(state => {
      if (!state[currentValue]) {
        return {
          [currentValue]: !state[currentValue],
          [otherValue]: !state[otherValue]
        };
      }
    });
  }

  render() {
    return (
      <div className="tickets-sort-settings-wrapper">
        <input
          id="price"
          className={
            "tickets-sort-settings-btn " +
            (this.state.price === true ? "active" : "")
          }
          type="button"
          onClick={e =>
            this.setActiveButton("price", "duration", "sortByPrice")
          }
          value="Самый дешевый"
        />

        <input
          id="duration"
          className={
            "tickets-sort-settings-btn " +
            (this.state.duration === true ? "active" : "")
          }
          type="button"
          onClick={e =>
            this.setActiveButton("duration", "price", "sortByDuration")
          }
          value="Самый быстрый"
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setSortValue
};
export default connect(
  null,
  mapDispatchToProps
)(TicketsListSortSettings);
