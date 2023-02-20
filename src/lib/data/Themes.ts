export interface ITheme {
  name: string;
  primary: string;
  secondary: string;
  highlight: string;
  tertiary: string;
  quaternary: string;
}

const genTheme = (
  name: string,
  primary: string,
  secondary: string,
  tertiary: string = "",
  quaternary: string = "",
  highlight: string
): ITheme => ({
  name,
  primary,
  secondary,
  quaternary,
  tertiary,
  highlight
});

export const Themes: ITheme[] = [
  genTheme(
    "Sunset Cream",
    "hsl(309, 11%, 24%)",
    "hsl(25, 18%, 44%)",
    "hsl(25, 45%, 65%)",
    "hsl(44, 67%, 78%)",
    "hsl(69, 47%, 83%)"
  )
];
