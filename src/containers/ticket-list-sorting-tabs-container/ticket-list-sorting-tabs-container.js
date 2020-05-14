import React, { useState } from "react";
import { connect } from "react-redux";
import { setSortingValue } from "../../actions";
import TicketListSortingTabs from "../../components/ticket-list-sorting-tabs";

const TicketListSortingTabsContainer = ({ setSortingValue }) => {
    const [activeBtn, setValue] = useState("price");

    const setActiveSortingValue = (sortingValue) => {
        setSortingValue(sortingValue)
        setValue(sortingValue);
    };

    const sortingButtons = [
        {
            value: "Самый дешевый",
            sortingValue: "price",
        },
        {
            value: "Самый быстрый",
            sortingValue: "duration",
        },
    ];

    return (
        <TicketListSortingTabs
            activeBtn={activeBtn} setActiveSortingValue={setActiveSortingValue} sortingButtons={sortingButtons} />
    );
};

const mapDispatchToProps = {
    setSortingValue
};

export default connect(
    null,
    mapDispatchToProps
)(TicketListSortingTabsContainer);
