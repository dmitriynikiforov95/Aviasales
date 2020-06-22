import React, { useEffect, useContext } from "react";
import TicketList from "../../components/ticket-list";
import {AviasalesServiceContext} from "../../components/aviasales-service-context";
import ErrorIndicator from "../../components/error-indicator";
import Spinner from "../../components/spinner/";
import { connect } from "react-redux";
import { fetchTickets } from "../../actions";
import { sortByPrice, sortByDuration } from "../../helpers";

const TicketLstContainer = ({
  tickets,
  isTicketsLoaded,
  ticketsLoadingError,
  fetchTickets,
}) => {
  const aviasalesService = useContext(AviasalesServiceContext);
  useEffect(() => fetchTickets(aviasalesService), [aviasalesService, fetchTickets]);

  const spinner = !isTicketsLoaded && !ticketsLoadingError ? <Spinner /> : null;
  const hasData = isTicketsLoaded || ticketsLoadingError;
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

function sortAndFilterTickets(tickets, stopsFilterValues, stopsSortingValue) {
  let newTickets = tickets.slice();

  // Фильтруем билеты по количеству пересадок в одну сторону

  if (!stopsFilterValues.all) {
    newTickets = newTickets.filter(({ segments }) => {
      for (let { stops } of segments) {
        if (!stopsFilterValues[stops.length]) {
          return false;
        }
      }
      return true;
    });
  }

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

  if (stopsSortingValue === "price") {
    newTickets.sort(sortByPrice);
  } else if (stopsSortingValue === "duration") {
    newTickets.sort(sortByDuration);
  }
  return newTickets;
}

const mapStateToProps = ({
  tickets,
  isTicketsLoaded,
  stopsFilterValues,
  stopsSortingValue,
  ticketsLoadingError,
}) => {
  return {
    tickets: sortAndFilterTickets(tickets, stopsFilterValues, stopsSortingValue).slice(0, 5),
    isTicketsLoaded,
    ticketsLoadingError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTickets: fetchTickets(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketLstContainer);

