import { findFalseValue } from "../helpers";

const initialState = {
  tickets: [],
  isTicketsLoaded: false,
  ticketsLoadingError: null,
  stopsValue: {
    all: true,
    0: false,
    1: false,
    2: false,
    3: false
  },
  sortingValue: "price"
};

const setStopsValue = (state, filter) => {
  let newState = {
    ...state,
    stopsValue: {
      ...state.stopsValue,
      [filter]: !state.stopsValue[filter]
    }
  };

  return findFalseValue(newState.stopsValue) === false
    ? (newState = {
      ...state,
      stopsValue: {
        ...newState.stopsValue,
        all: true
      }
    })
    : newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TICKETS_SUCCESS":
      return {
        ...state,
        tickets: action.payload,
        isTicketsLoaded: true
      };
    case "FETCH_TICKETS_FAILURE":
      return {
        ...state,
        isTicketsLoaded: false,
        ticketsLoadingError: action.payload
      }
    case "SET_STOPS_VALUE":
      return setStopsValue(state, action.payload);
    case "SET_SORTING_VALUE":
      return {
        ...state,
        sortingValue: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
