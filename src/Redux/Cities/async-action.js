import { ApiFetchCities } from "./api";
import {
  fetchCities,
  fetchCitiesSuccess,
  fetchCitiesFailure
} from "./action-creator";
import { CallApiWith } from "../../Helpers";
import { HttpMethod } from "../../Constant";

/**
 * @desc Call api to fetch citis
 * @return function - call API with these informations, then dispatch scuccessful action or failed action
 */

export function asyncFetchCities() {
  return async function(dispatch) {
    dispatch(fetchCities());

    try {
      const response = await CallApiWith(HttpMethod.GET, ApiFetchCities);

      const cities = response.data;

      dispatch(fetchCitiesSuccess(cities));
    } catch (error) {
      dispatch(fetchCitiesFailure(error.response.data));
    }
  };
}
