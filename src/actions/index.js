
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

const setStopsValue = (stops) => {
  return {
    type: "SET_STOPS_VALUE",
    payload: stops
  }
}

const setSortingValue = (value) => {
  return {
    type: "SET_SORTING_VALUE",
    payload: value
  }
}

const fetchTickets = (dispatch, aviasalesService) => () => {
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
  setStopsValue,
  setSortingValue,
}
