import {
  FETCH_WEATHERS,
  FETCH_WEATHERS_SUCCESS,
  FETCH_WEATHERS_FAILURE,
  SELECTED_DATE,
  SAVE_DATA_FOR_CHARTS,
  SAVE_TEMPS_PRESSURES
} from "./type";

const initState = {
  times: [],
  temps: [],
  pressures: [],
  originalData: [],
  data: [],
  error: "",
  loading: false,
  selectedDate: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_WEATHERS:
      return { ...state, loading: true };
    case FETCH_WEATHERS_SUCCESS:
      return {
        ...state,
        loading: false,
        times: action.times,
        originalData: action.originalData
      };
    case FETCH_WEATHERS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case SELECTED_DATE:
      return { ...state, selectedDate: action.selectedDate };
    case SAVE_DATA_FOR_CHARTS:
      return { ...state, data: action.data };
    case SAVE_TEMPS_PRESSURES:
      return { ...state, temps: action.temps, pressures: action.pressures };
    default:
      return state;
  }
};
