import type { ViewParameter } from "$lib/data/types/ViewParameter";
import { genViewParameter } from "$lib/data/factories/ViewParameterFactory";
import { ViewParameterTypes } from "$lib/data/types/ViewParameterTypes";

export const TestViewParameters: ViewParameter[] = [
  genViewParameter(ViewParameterTypes.Color, "Border color"),
  genViewParameter(ViewParameterTypes.Slider, "Border width"),
  genViewParameter(ViewParameterTypes.TextInput, "Text")
];
