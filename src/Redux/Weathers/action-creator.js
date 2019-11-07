import {
  FETCH_WEATHERS,
  FETCH_WEATHERS_SUCCESS,
  FETCH_WEATHERS_FAILURE,
  SELECTED_DATE,
  SAVE_DATA_FOR_CHARTS
} from "./type";
import moment from "moment";
import { filter, map } from "lodash";

export const fetchWeathers = () => ({ type: FETCH_WEATHERS });

export const fetchWeathersSuccess = (times, data) => {
  return {
    type: FETCH_WEATHERS_SUCCESS,
    times: times,
    originalData: data
  };
};

export const saveDataForChart = (originalData, selectedDate) => {
  const data = filter(originalData, v =>
    moment(v.dt_txt).isSame(selectedDate, "days")
  );

  const timesChart = map(data, v => moment(v.dt_txt).format("HH:mm"));
  const temps = map(data, v => v.main.temp);
  const pressures = map(data, v => v.main.pressure);

  return {
    type: SAVE_DATA_FOR_CHARTS,
    timesChart: timesChart,
    temps: temps,
    pressures: pressures
  };
};

export const fetchWeathersFailure = error => {
  return {
    type: FETCH_WEATHERS_FAILURE,
    error: error
  };
};

export const selectDate = date => {
  return {
    type: SELECTED_DATE,
    selectedDate: date
  };
};
