import axios from "axios";

export const defaultAuthenticatedAxios = ({ baseUrl, ...restAxiosConfig }) => {
  const axiosInstance = axios.create({
    baseURL:
      "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
    timeout: 10000,
    headers: {
      Accept: "application/json",
    },
  });

  return axiosInstance;
};

export async function getEqDataApi() {
  return axios
    .create({
      timeout: 10000,
      headers: {
        Accept: "application/json",
      },
    })
    .get(
      "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    );;
}
