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
