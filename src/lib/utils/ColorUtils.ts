const adjustColorValue = (
  hsl: string,
  targetIndex: number,
  replaceFunction: Function
): string =>
  hsl
    .split(",")
    .map((segment: string, i: number) => {
      if (i === targetIndex) {
        return replaceFunction(segment);
      }
      return segment;
    })
    .join(",");

const positive = (amount: number): number => (amount < 0 ? 0 : amount);

export const adjustLightness = (hsl: string, amount: number): string =>
  adjustColorValue(
    hsl,
    2,
    (segment: string) => ` ${positive(parseInt(segment) + amount)}%)`
  );

export const adjustSaturation = (hsl: string, amount: number): string =>
  adjustColorValue(
    hsl,
    1,
    (segment: string) => ` ${positive(parseInt(segment) + amount)}%`
  );
