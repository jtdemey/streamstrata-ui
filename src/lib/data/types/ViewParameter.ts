import type { Writable } from "svelte/store";
import type { ViewParameterTypes } from "./ViewParameterTypes";

export interface ViewParameter {
  parameterType: ViewParameterTypes;
  label: string;
  name: string;
  store: Writable<any>;
  value: any;
  visible: boolean;
}
