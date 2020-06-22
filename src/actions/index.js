
const ticketsLoaded = (newTickets) => {
  return {
    type: 'FETCH_TICKETS_SUCCESS',
    payload: newTickets
  }
}
const ticketsError = (error) => {
  return {
    type: 'FETCH_TICKETS_FAILURE',
    payload: error
  }
}

const setStopsFilterValues = (stops) => {
  return {
    type: "SET_STOPS_FILTER_VALUE",
    payload: stops
  }
}

const setStopsSortingValue = (sortingValue) => {
  return {
    type: "SET_STOPS_SORTING_VALUE",
    payload: sortingValue
  }
}

const fetchTickets = (dispatch) => (aviasalesService) => {
  aviasalesService
    .getTickets()
    .then(res => {
      dispatch(ticketsLoaded(res.tickets));
    })
    .catch(error => {
      dispatch(ticketsError(error.message));
    });
};

export {
  fetchTickets,
  setStopsFilterValues,
  setStopsSortingValue,
}
