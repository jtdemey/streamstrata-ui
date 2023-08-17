import type { Writable } from "svelte/store";
import type { ViewParameterTypes } from "./ViewParameterTypes";

export interface ViewParameter {
  attributes: any;
  parameterType: ViewParameterTypes;
  label: string;
  name: string;
  store: Writable<any>;
  visible: boolean;
}
