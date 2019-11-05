import {
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from "./type";

export const fetchCities = () => ({ type: FETCH_CITIES });

export const fetchCitiesSuccess = cities => {
  return {
    type: FETCH_CITIES_SUCCESS,
    cities: cities
  };
};

export const fetchCitiesFailure = error => {
  return {
    type: FETCH_CITIES_FAILURE,
    error: error
  };
};
