const initialStopsFilterValues = {
  all: true,
  0: false,
  1: false,
  2: false,
  3: false,
};

const initialState = {
  tickets: [],
  isTicketsLoading: true,
  ticketsLoadingError: null,
  stopsFilterValues: initialStopsFilterValues,
  stopsSortingValue: "price",
};

const setStopsFilterValues = (stopFilterValues, filter) => {
  if (filter === "all") {
    return { ...initialStopsFilterValues };
  }
  
  const newStopsFilterValues = {
    ...stopFilterValues,
    [filter]: !stopFilterValues[filter],
  };

  const isEveryStopsValuesFalse = !Object.values(newStopsFilterValues).includes(
    true
  );

  newStopsFilterValues.all = isEveryStopsValuesFalse;

  return newStopsFilterValues;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TICKETS_SUCCESS":
      return {
        ...state,
        tickets: action.payload,
        isTicketsLoading: false,
      };
    case "FETCH_TICKETS_FAILURE":
      return {
        ...state,
        isTicketsLoading: false,
        ticketsLoadingError: action.payload,
      };
    case "SET_STOPS_FILTER_VALUE":
      return {
        ...state,
        stopsFilterValues: setStopsFilterValues(
          state.stopsFilterValues,
          action.payload
        ),
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
