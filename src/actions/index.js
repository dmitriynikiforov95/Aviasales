
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
      type:"SET_STOPS_VALUE",
      payload: stops
    }
  }

  const setSortValue = (value) => {
    return {
        type:"SET_SORT_VALUE",
        payload: value
      }
  }



export {
    ticketsLoaded,
    ticketsError,
    setStopsValue,
    setSortValue,
}
