import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchTickets } from "../../actions";
import { sortByPrice, sortByDuration } from "../../helpers";
import TicketList from "../../components/ticket-list";
import { AviasalesServiceContext } from "../../components/aviasales-service-context";
import ErrorIndicator from "../../components/error-indicator";
import Spinner from "../../components/spinner/";

const TicketLstContainer = ({
  tickets,
  isTicketsLoading,
  ticketsLoadingError,
  fetchTickets,
}) => {
  const aviasalesService = useContext(AviasalesServiceContext);

  useEffect(() => fetchTickets(aviasalesService), [
    aviasalesService,
    fetchTickets,
  ]);

  const spinner = isTicketsLoading && !ticketsLoadingError ? <Spinner /> : null;
  const hasData = !(isTicketsLoading || ticketsLoadingError);
  const errorMessage = ticketsLoadingError ? <ErrorIndicator /> : null;
  const content = hasData ? <TicketList tickets={tickets} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

// Вариант фильтрации билетов по общему количеству пересадок
/* newTickets.filter(ticket => {
        let ticketStopsQuantity = 0;
        for (let segment of ticket.segments) {
          ticketStopsQuantity += segment.stops.length;
        }
        if (stopsFilterValues[ticketStopsQuantity]) {
          return true;
        }
        return false;
      }); */

const filterTickets = (stopsFilterValues) => (tickets) => {
  if (!stopsFilterValues.all) {
    return tickets.filter(({ segments }) => {
      for (let { stops } of segments) {
        if (!stopsFilterValues[stops.length]) {
          return false;
        }
      }
      return true;
    });
  }
  return tickets;
};

const sortTickets = (stopsSortingValue) => (tickets) => {
  let sortedTickets = tickets.slice();

  if (stopsSortingValue === "price") {
    sortedTickets.sort(sortByPrice);
  } else if (stopsSortingValue === "duration") {
    sortedTickets.sort(sortByDuration);
  }
  return sortedTickets;
};

const mapStateToProps = ({
  tickets,
  isTicketsLoading,
  stopsFilterValues,
  stopsSortingValue,
  ticketsLoadingError,
}) => ({
  tickets: compose(
    filterTickets(stopsFilterValues),
    sortTickets(stopsSortingValue)
  )(tickets).slice(0, 5),
  isTicketsLoading,
  ticketsLoadingError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTickets: fetchTickets(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketLstContainer);
