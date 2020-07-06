const ticketsLoaded = (newTickets) => ({
  type: "FETCH_TICKETS_SUCCESS",
  payload: newTickets,
});

const ticketsError = (error) => ({
  type: "FETCH_TICKETS_FAILURE",
  payload: error,
});

const setStopsFilterValues = (stops) => ({
  type: "SET_STOPS_FILTER_VALUE",
  payload: stops,
});

const setStopsSortingValue = (sortingValue) => ({
  type: "SET_STOPS_SORTING_VALUE",
  payload: sortingValue,
});

const fetchTickets = (dispatch) => (aviasalesService) => {
  aviasalesService
    .getTickets()
    .then(({tickets}) => {
      dispatch(ticketsLoaded(tickets));
    })
    .catch(({message}) => {
      dispatch(ticketsError(message));
    });
};

export { fetchTickets, setStopsFilterValues, setStopsSortingValue };
