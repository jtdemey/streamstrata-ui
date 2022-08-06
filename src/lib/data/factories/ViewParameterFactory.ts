import type { ViewParameter } from "../types/ViewParameter";
import type { ViewParameterTypes } from "../types/ViewParameterTypes";

const getInputNameFromLabel = (label: string): string =>
  label.replace(" ", "-").toLocaleLowerCase();

export const genViewParameter = (
  parameterType: ViewParameterTypes,
  label: string = "",
  name: string = "parameter-input"
): ViewParameter => {
  const inputName: string = label === "" ? name : getInputNameFromLabel(label);
  console.log(inputName)
  return {
    parameterType,
    label,
    name: inputName,
    value: ""
  };
};
