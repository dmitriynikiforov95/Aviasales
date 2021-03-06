import React from "react";
import { connect } from "react-redux";
import { setStopsFilterValues } from "../../actions";
import TicketListFilter from "../../components/ticket-list-filter";

const TicketListFilterContainer = (props) => {
  const ticketListFilterItems = [
    {
      value: "all",
      text: "все",
    },
    {
      value: "0",
      text: "без пересадок",
    },
    {
      value: "1",
      text: "1 пересадка",
    },
    {
      value: "2",
      text: "2 пересадки",
    },
    {
      value: "3",
      text: "3 пересадки",
    },
  ];

  return (
    <TicketListFilter
      {...props}
      ticketListFilterItems={ticketListFilterItems}
    />
  );
};

const mapStateToProps = ({ stopsFilterValues }) => ({
  stopsFilterValues,
});

const mapDispatchToProps = {
  setStopsFilterValues,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListFilterContainer);
