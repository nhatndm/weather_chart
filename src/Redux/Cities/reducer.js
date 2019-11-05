import {
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from "./type";

const initState = {
  cities: [],
  error: "",
  loading: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return { ...state, loading: true };
    case FETCH_CITIES_SUCCESS:
      return { ...state, loading: false, cities: action.cities };
    case FETCH_CITIES_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
