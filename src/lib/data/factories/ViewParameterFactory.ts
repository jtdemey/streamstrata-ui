import type { ViewParameter } from "../types/ViewParameter";
import type { ViewParameterTypes } from "../types/ViewParameterTypes";
import { writable } from "svelte/store";

const getInputNameFromLabel = (label: string): string =>
  label.replace(" ", "-").toLocaleLowerCase();

export const genViewParameter = (
  parameterType: ViewParameterTypes,
  label: string = "",
  name: string = "parameter-input",
  initialValue: any = ""
): ViewParameter => {
  const inputName: string = label === "" ? name : getInputNameFromLabel(label);
  return {
    parameterType,
    label,
    name: inputName,
    store: writable(initialValue),
    value: initialValue
  };
};
