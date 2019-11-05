import { ApiFetchWeathers } from "./api";
import {
  fetchWeathers,
  fetchWeathersSuccess,
  fetchWeathersFailure
} from "./action-creator";
import { CallApiWith } from "../../Helpers";
import { HttpMethod } from "../../Constant";

/**
 * @desc Call api to fetch citis
 * @return function - call API with these informations, then dispatch scuccessful action or failed action
 */

export function asyncFetchWeathers(citiId) {
  return async function(dispatch) {
    dispatch(fetchWeathers());

    try {
      const response = await CallApiWith(
        HttpMethod.GET,
        ApiFetchWeathers(citiId)
      );

      const weathers = response.data;

      dispatch(fetchWeathersSuccess(weathers));
    } catch (error) {
      dispatch(fetchWeathersFailure(error.response.data));
    }
  };
}
