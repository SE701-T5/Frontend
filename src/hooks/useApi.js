import axios from "axios";
import { useCallback } from "react";
import useSWR from "swr";

/**
 * @param {string} url - excluding base, i.e. /api/v1/users` should just be `/users`.
 * @param {import("axios").AxiosRequestConfig} options - axios options.
 * @returns
 */
export const useApi = (url, options) => {
  const { data, error, ...rest } = useSWR(getUrl(url), fetcher(options));
  const loading = !data && !error;

  return { data, error, ...rest, loading };
};

/**
 * @param {string} url
 * @param {import("axios").AxiosRequestConfig} options
 *
 */
export const useMutation = (url, options) => {
  const fn = useCallback(
    /**
     * @param {import("axios").AxiosRequestConfig} overrideOptions
     */
    (overrideOptions) => {
      return fetcher({
        ...{ ...options, ...overrideOptions },
      })(getUrl(url));
    },
    [options, url]
  );

  return fn;
};

/**
 * @param { import("axios").AxiosRequestConfig } axiosConfig
 */
export const fetcher = (axiosConfig) => {
  /** @param {string} url */
  return async (url) => {
    const request = await axios(url, axiosConfig);
    return request.data;
  };
};

/**
 * @param {string} url
 * @returns {string}
 */
export const getUrl = (url) => {
  if (!url.startsWith("/")) {
    url = "/" + url;
  }

  const base =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4200/api/v1"
      : "https://uni-forum.herokuapp.com/api/v1";

  return base + url;
};

/**
 *
 * @param {string} url
 * @param {Record<string, string | number>} params
 * @returns {string}
 */
export const substitutePathParams = (url, params = {}) => {
  const regex = /\{.*?\}/g;
  let urlCopy = url;

  let match = regex.exec(url);
  while (match !== null) {
    const sub = params?.[match[0].slice(1, -1)];
    if (!sub) {
      throw new Error(`No path parameter found for ${match[0]}`);
    }
    urlCopy = urlCopy.replace(match[0], sub.toString());
    match = regex.exec(url);
  }

  return urlCopy;
};
