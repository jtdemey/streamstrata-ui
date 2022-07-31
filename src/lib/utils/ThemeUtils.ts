import { Themes, type ITheme } from "$lib/data/themes";

export const getTheme = (themeName: string): ITheme => {
  const theme: ITheme = Themes.filter(
    (theme: ITheme) => theme.name === themeName
  )[0];
  if (!theme) {
    console.error(`No theme found: ${themeName}`);
  }
  return theme;
};
