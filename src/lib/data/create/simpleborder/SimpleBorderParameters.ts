
import type { ViewParameter } from "$lib/data/types/ViewParameter";
import { genViewParameter } from "$lib/data/factories/ViewParameterFactory";
import { ViewParameterTypes } from "$lib/data/types/ViewParameterTypes";

export const SimpleBorderParameters: ViewParameter[] = [
  genViewParameter(ViewParameterTypes.Color, "blue", "Inner border color", "inner-color"),
  genViewParameter(ViewParameterTypes.Color, "orange", "Outer border color", "outer-color"),
  genViewParameter(ViewParameterTypes.Slider, 24, "Inner width", "inner-width"),
  genViewParameter(ViewParameterTypes.Slider, 12, "Outer width", "outer-width"),
  genViewParameter(ViewParameterTypes.TextInput, "Text", "text")
];
