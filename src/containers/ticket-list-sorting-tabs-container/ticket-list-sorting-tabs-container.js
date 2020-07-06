import React from "react";
import { connect } from "react-redux";
import { setStopsSortingValue } from "../../actions";
import TicketListSortingTabs from "../../components/ticket-list-sorting-tabs";

const TicketListSortingTabsContainer = ({
  stopsSortingValue,
  setStopsSortingValue,
}) => {
  const sortingTabs = [
    {
      tabText: "Самый дешевый",
      sortingValue: "price",
    },
    {
      tabText: "Самый быстрый",
      sortingValue: "duration",
    },
  ];

  return (
    <TicketListSortingTabs
      activeTab={stopsSortingValue}
      setStopsSortingValue={setStopsSortingValue}
      sortingTabs={sortingTabs}
    />
  );
};

const mapStateToProps = ({ stopsSortingValue }) => ({
  stopsSortingValue,
});

const mapDispatchToProps = {
  setStopsSortingValue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListSortingTabsContainer);
