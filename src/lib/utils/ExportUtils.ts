import type { ViewParameter } from "$lib/data/types/ViewParameter";
import { env } from "$env/dynamic/public";
import { get, type Writable } from "svelte/store";

export const getQueryStringFromStores = (stores: Writable<any>[]): string => {
  const storeValues: any[] = stores.map((store: Writable<any>) => get(store));
  if (storeValues.length > 26) {
    console.error(
      "More than 26 chars: tell dev to update getQueryStringFromStores()"
    );
  }
  let qs: string = "?";
  const alphaValues: string[] = [];
  for (let i = 0; i < 26; i++) {
    alphaValues.push(String.fromCharCode(97 + i));
  }
  storeValues.forEach((storeValue: any, i: number) => {
    qs += `${alphaValues[i]}=${storeValue.toString()}`;
    if (i < storeValues.length - 1) {
      qs += "&";
    }
  });
  return env.PUBLIC_EXPORT_URI + qs;
};

export const requestExport = (payload: string) =>
  fetch(env.PUBLIC_EXPORT_URI, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": env.PUBLIC_EXPORT_URI,
      "Content-Type": "application/json"
    },
    body: payload
  });

export const stringifyViewParameters = (
  viewParameters: ViewParameter[]
): string => {
  const states: any = viewParameters.reduce(
    (obj: any, viewParameter: ViewParameter) => {
      obj[viewParameter.name] = get(viewParameter.store);
      return obj;
    },
    {}
  );
  console.log(states);
  return JSON.stringify(states);
};
