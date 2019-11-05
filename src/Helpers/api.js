import axios from "./node_modules/axios";

export const CallApiWith = (
  httpMethod,
  url,
  params = {},
  data = {},
  headers = {}
) => {
  return axios({
    method: httpMethod,
    url: url,
    params: params,
    data: data,
    headers: headers
  });
};
