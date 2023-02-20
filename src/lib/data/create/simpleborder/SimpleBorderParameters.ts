
import type { ViewParameter } from "$lib/data/types/ViewParameter";
import { genViewParameter } from "$lib/data/factories/ViewParameterFactory";
import { ViewParameterTypes } from "$lib/data/types/ViewParameterTypes";

export const SimpleBorderParameters: ViewParameter[] = [
  genViewParameter(ViewParameterTypes.Color, "lavender", "Inner border color", "inner-color"),
  genViewParameter(ViewParameterTypes.Color, "#47d1d1", "Outer border color", "outer-color"),
  genViewParameter(ViewParameterTypes.Slider, 24, "Inner border width", "inner-width"),
  genViewParameter(ViewParameterTypes.Slider, 12, "Outer border width", "outer-width")
];
