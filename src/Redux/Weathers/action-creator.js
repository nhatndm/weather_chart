import {
  FETCH_WEATHERS,
  FETCH_WEATHERS_SUCCESS,
  FETCH_WEATHERS_FAILURE,
  SELECTED_DATE,
  SAVE_TEMPS_PRESSURES,
  SAVE_DATA_FOR_CHARTS
} from "./type";

export const fetchWeathers = () => ({ type: FETCH_WEATHERS });

export const fetchWeathersSuccess = (times, data) => {
  return {
    type: FETCH_WEATHERS_SUCCESS,
    times: times,
    originalData: data
  };
};

export const saveTempsPressures = (temps, pressures) => {
  return {
    type: SAVE_TEMPS_PRESSURES,
    temps: temps,
    pressures: pressures
  };
};

export const saveDataForChart = data => {
  return {
    type: SAVE_DATA_FOR_CHARTS,
    data: data
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
