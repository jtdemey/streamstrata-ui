import type { ViewParameter } from "$lib/data/types/ViewParameter";
import type { Writable } from "svelte/store";

export const getViewParameterStore = (
  viewParameters: ViewParameter[],
  label: string
): Writable<any> => {
  const match: ViewParameter = viewParameters.filter(
    (viewParameter: ViewParameter) => viewParameter.label === label
  )[0];
  if (!match) {
    console.error(`No view parameter store for ${label}`);
  }
  return match.store;
};
