import type { ViewParameterTypes } from "./ViewParameterTypes";

export interface ViewParameter {
  parameterType: ViewParameterTypes;
  label: string;
  value: string;
}
