import type { ViewParameter } from "$lib/data/types/ViewParameter";
import { env } from "$env/dynamic/public";
import { get, type Writable } from "svelte/store";

export const checkForExportParam = (): boolean => {
  const params: any = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop.toString()),
  });
  return params.r === "1"
    ? true
    : false;
};

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
  return env.PUBLIC_EXPORT_URI || "" + qs;
};

export const populateViewParameters = (
  retrievedParameters: any,
  currentParameters: ViewParameter[]
): void => currentParameters.forEach((parameter: ViewParameter) => {
  const retrievedValue: any = retrievedParameters[parameter.name];
  if (retrievedValue) {
    parameter.store.set(retrievedValue);
  }
});

export const requestExport = (payload: string) => {
  if (!env.PUBLIC_EXPORT_URI) {
    console.error("No public export URI found in settings");
    return;
  }
  fetch(env.PUBLIC_EXPORT_URI, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": env.PUBLIC_EXPORT_URI,
      "Content-Type": "application/json"
    },
    body: payload
  })
    .then(res => res.json())
    .then(res => {
      if (!res.status || res.status === 404)
        window.alert("Something went wrong; please try again later.");
      console.log(res);
      window.location.href = `${env.PUBLIC_CLIENT_URI}render`
    });
};

export const stringifyViewParameters = (
  viewName: string,
  viewParameters: ViewParameter[]
): string => {
  const states: any = viewParameters.reduce(
    (obj: any, viewParameter: ViewParameter) => {
      obj.parameters[viewParameter.name] = get(viewParameter.store);
      return obj;
    },
    { parameters: {}, view: viewName }
  );
  return JSON.stringify(states);
};
