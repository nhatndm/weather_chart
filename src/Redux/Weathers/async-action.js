import { ApiFetchWeathers } from "./api";
import {
  fetchWeathers,
  fetchWeathersSuccess,
  fetchWeathersFailure
} from "./action-creator";
import { CallApiWith } from "../../Helpers";
import { HttpMethod } from "../../Constant";

/**
 * @desc Call api to fetch weathers
 * @param citiId
 * @return function - call API with these informations, then dispatch scuccessful action or failed action
 */

export function asyncFetchWeathers(citiId) {
  return async function(dispatch) {
    dispatch(fetchWeathers());

    try {
      const response = await CallApiWith(HttpMethod.GET, ApiFetchWeathers, {
        id: citiId,
        appid: "0e65d269385c3e189ab0ef90c3ba6f47"
      });

      const weathers = response.data;

      dispatch(fetchWeathersSuccess(weathers));
    } catch (error) {
      dispatch(fetchWeathersFailure(error.response.data));
    }
  };
}
