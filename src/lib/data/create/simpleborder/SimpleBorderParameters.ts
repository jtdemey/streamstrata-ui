
import type { ViewParameter } from "$lib/data/types/ViewParameter";
import { genViewParameter } from "$lib/data/factories/ViewParameterFactory";
import { ViewParameterTypes } from "$lib/data/types/ViewParameterTypes";

export const SimpleBorderParameters: ViewParameter[] = [
  genViewParameter(ViewParameterTypes.Color, "Outer border color", "outer_color"),
  genViewParameter(ViewParameterTypes.Color, "Inner border color", "inner_color"),
  genViewParameter(ViewParameterTypes.Slider, "Outer width", "outer-width"),
  genViewParameter(ViewParameterTypes.Slider, "Inner width", "inner-width"),
  genViewParameter(ViewParameterTypes.TextInput, "Text", "text")
];
