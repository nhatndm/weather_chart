import {
  FETCH_WEATHERS,
  FETCH_WEATHERS_SUCCESS,
  FETCH_WEATHERS_FAILURE
} from "./type";

export const fetchWeathers = () => ({ type: FETCH_WEATHERS });

export const fetchWeathersSuccess = (times, temps, pressures) => {
  return {
    type: FETCH_WEATHERS_SUCCESS,
    times: times,
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
