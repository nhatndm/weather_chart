import { ApiFetchWeathers } from "./api";
import {
  fetchWeathers,
  fetchWeathersSuccess,
  fetchWeathersFailure,
  saveDataForChart
} from "./action-creator";
import { CallApiWith } from "../../Helpers";
import { HttpMethod } from "../../Constant";
import { map } from "lodash";

/**
 * @desc Call api to fetch weathers
 * @param citiId
 * @return function - call API with these informations, then dispatch scuccessful action or failed action
 */

export function asyncFetchWeathers(citiId, selectedDate) {
  return async function(dispatch) {
    dispatch(fetchWeathers());

    try {
      const response = await CallApiWith(HttpMethod.GET, ApiFetchWeathers, {
        id: citiId,
        appid: "0e65d269385c3e189ab0ef90c3ba6f47"
      });

      const weathers = response.data.list;

      const times = map(weathers, v => v.dt_txt);

      dispatch(fetchWeathersSuccess(times, weathers));
      dispatch(saveDataForChart(weathers, selectedDate));
    } catch (error) {
      dispatch(fetchWeathersFailure(error.response.data));
    }
  };
}
