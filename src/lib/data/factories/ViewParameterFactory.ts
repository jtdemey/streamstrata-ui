import type { ViewParameter } from "../types/ViewParameter";
import type { ViewParameterTypes } from "../types/ViewParameterTypes";

export const genViewParameter = (
  parameterType: ViewParameterTypes,
  label: string = ""
): ViewParameter => ({ parameterType, label, value: "" });
