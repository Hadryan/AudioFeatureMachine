/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const getParamValues = (url: string): Record<string, any> => {
  return url
    .slice(1)
    .split("&")
    .reduce((prev: Record<string, any>, curr: string) => {
      console.log(typeof prev, typeof curr);
      const [title, value]: string[] = curr.split("=");
      console.log(title, value);
      const previous = prev;
      previous[title] = value;
      return previous;
    }, {});
};
export const setAuthHeader = (): void => {
  try {
    const params = JSON.parse(localStorage.getItem("params") || "{}");
    if (params) {
      axios.defaults.headers.common.Authorization = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.error("Error setting auth", error);
  }
};
