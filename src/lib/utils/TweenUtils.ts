import { elasticInOut } from "svelte/easing";

export const genElasticTweenConfig = (
  duration: number = 1100,
  delay: number = 0
): any => ({
  delay,
  duration,
  easing: elasticInOut
});
