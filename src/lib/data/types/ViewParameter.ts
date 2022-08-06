import type { ViewParameterTypes } from "./ViewParameterTypes";

export interface ViewParameter {
  parameterType: ViewParameterTypes;
  label: string;
  name: string;
  value: string;
}
