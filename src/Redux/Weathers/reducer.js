import {
  FETCH_WEATHERS,
  FETCH_WEATHERS_SUCCESS,
  FETCH_WEATHERS_FAILURE
} from "./type";

const initState = {
  weathers: [],
  error: "",
  loading: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_WEATHERS:
      return { ...state, loading: true };
    case FETCH_WEATHERS_SUCCESS:
      return { ...state, loading: false, weathers: action.weathers };
    case FETCH_WEATHERS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
