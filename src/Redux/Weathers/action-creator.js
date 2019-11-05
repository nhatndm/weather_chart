import {
  FETCH_WEATHERS,
  FETCH_WEATHERS_SUCCESS,
  FETCH_WEATHERS_FAILURE
} from "./type";

export const fetchWeathers = () => ({ type: FETCH_WEATHERS });

export const fetchWeathersSuccess = weathers => {
  return {
    type: FETCH_WEATHERS_SUCCESS,
    weathers: weathers
  };
};

export const fetchWeathersFailure = error => {
  return {
    type: FETCH_WEATHERS_FAILURE,
    error: error
  };
};
