import {
  FETCH_WEATHERS,
  FETCH_WEATHERS_SUCCESS,
  FETCH_WEATHERS_FAILURE,
  SELECTED_DATE,
  SAVE_DATA_FOR_CHARTS
} from "./type";
import moment from "moment";

const initState = {
  times: [],
  temps: [],
  pressures: [],
  originalData: [],
  timesChart: [],
  error: "",
  loading: false,
  selectedDate: moment()
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
        originalData: action.originalData,
        error: ""
      };
    case FETCH_WEATHERS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case SELECTED_DATE:
      return { ...state, selectedDate: action.selectedDate };
    case SAVE_DATA_FOR_CHARTS:
      return {
        ...state,
        temps: action.temps,
        pressures: action.pressures,
        timesChart: action.timesChart
      };
    default:
      return state;
  }
};
