import React, { useEffect } from "react";
import TicketList from "../../components/ticket-list";
import withAviasalesService from "../../components/hoc";
import ErrorIndicator from "../../components/error-indicator";
import Spinner from "../../components/spinner/";
import { connect } from "react-redux";
import {fetchTickets} from "../../actions";
import { sortByPrice, sortByDuration } from "../../helpers";


const TicketLstContainer = ({ tickets, isTicketsLoaded, ticketsLoadingError, fetchTickets }) => {

  useEffect(
    fetchTickets, []
  )

  const spinner = !isTicketsLoaded && !ticketsLoadingError ? <Spinner /> : null;
  const hasData = isTicketsLoaded || ticketsLoadingError;
  const errorMessage = ticketsLoadingError ? <ErrorIndicator /> : null;
  const content = hasData ? <TicketList tickets={tickets} /> : null;

  return (
    <React.Fragment>
      {errorMessage}
      {spinner}
      {content}
    </React.Fragment>
  );

}

function sortAndFilter(tickets, stopsValue, sortingValue) {
  let newTickets = tickets;

  for (let ticket of newTickets) {
    ticket.summDuration = function () {
      return this.segments.reduce((prev, curr) => {
        return prev + curr.duration;
      }, 0);
    };
  }

  // Фильтруем билеты по количеству пересадок в одну сторону

  newTickets = stopsValue.all
    ? tickets
    : tickets.filter(({segments}) => {
      for (let {stops} of segments) {
        if (!stopsValue[stops.length]) {
          return false;
        }
      }
      return true;
    });

  // Вариант фильтрации билетов по общему количеству пересадок
  /* tickets.filter(ticket => {
        let ticketStopsQuantity = 0;
        for (let segment of ticket.segments) {
          ticketStopsQuantity += segment.stops.length;
        }
        if (stopsValue[ticketStopsQuantity]) {
          return true;
        }
        return false;
      }); */

  if (sortingValue === "price") {
    newTickets = newTickets.sort(sortByPrice);
  } else if (sortingValue === "duration") {
    newTickets = newTickets.sort(sortByDuration);
  }
  return newTickets.slice(0, 5);
}

const mapStateToProps = ({
  tickets,
  isTicketsLoaded,
  stopsValue,
  sortingValue,
  ticketsLoadingError
}) => {
  return {
    tickets: sortAndFilter(tickets, stopsValue, sortingValue),
    isTicketsLoaded,
    ticketsLoadingError
  };
};

const mapDispatchToProps = (dispatch, {aviasalesService}) => {
  return {
    fetchTickets: fetchTickets(dispatch, aviasalesService),
  };
};

export default withAviasalesService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TicketLstContainer)
);
