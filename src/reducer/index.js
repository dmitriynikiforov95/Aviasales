const initialStopsFilterValues = {
  all: true,
  0: false,
  1: false,
  2: false,
  3: false,
};

const initialState = {
  tickets: [],
  isTicketsLoaded: false,
  ticketsLoadingError: null,
  stopsFilterValues: initialStopsFilterValues,
  stopsSortingValue: "price",
};

const setStopsFilterValues = (stopFilterValues, filter) => {

  const newStopsFilterValues = (filter === "all")
    ? { ...initialStopsFilterValues }
    : {
      ...stopFilterValues,
      all: false,
      [filter]: !stopFilterValues[filter],
    };

  const isEveryStopsValuesFalse = !Object.values(newStopsFilterValues).includes(true);

  if (isEveryStopsValuesFalse) {
    newStopsFilterValues.all = true;
  }

  return newStopsFilterValues;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TICKETS_SUCCESS":
      return {
        ...state,
        tickets: action.payload,
        isTicketsLoaded: true,
      };
    case "FETCH_TICKETS_FAILURE":
      return {
        ...state,
        isTicketsLoaded: false,
        ticketsLoadingError: action.payload,
      };
    case "SET_STOPS_FILTER_VALUE":
      return {
        ...state,
        stopsFilterValues: setStopsFilterValues(state.stopsFilterValues, action.payload),
      };
    case "SET_STOPS_SORTING_VALUE":
      return {
        ...state,
        stopsSortingValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
