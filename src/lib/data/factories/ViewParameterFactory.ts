import type { ViewParameter } from "../types/ViewParameter";
import type { ViewParameterTypes } from "../types/ViewParameterTypes";
import { writable } from "svelte/store";

export const genViewParameter = <T>(
  parameterType: ViewParameterTypes,
  initialValue: T,
  label: string = "",
  name: string = "parameter-input",
  visible: boolean = true,
  attributes: object = {}
): ViewParameter => {
  return {
    attributes,
    parameterType,
    label,
    name,
    store: writable(initialValue),
    value: initialValue,
    visible
  };
};
