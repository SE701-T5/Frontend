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
    (overrideOptions, newUrl = url) => {
      return fetcher({
        ...{ ...options, ...overrideOptions },
      })(getUrl(newUrl));
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
    const request = await axios(url, {
      ...axiosConfig,
      headers: {
        "X-Authorization": "1351084ff70eaf0a0fb027bf09cef099",
        "Content-Type": "application/json",
      },
    });
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
