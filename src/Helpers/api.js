import axios from "axios";
import { HttpMethod } from "../Constant";

export const CallApiWith = (
  httpMethod,
  url,
  params = {},
  data = {},
  headers = {}
) => {
  const config = {
    params: params,
    headers: headers
  };

  switch (httpMethod) {
    case HttpMethod.GET:
      return axios.get(url, config);
    case HttpMethod.POST:
      return axios.post(url, data, config);
    case HttpMethod.PUT:
      return axios.put(url, data, config);
    case HttpMethod.DELETE:
      return axios.delete(url, config);
    default:
      break;
  }
};
