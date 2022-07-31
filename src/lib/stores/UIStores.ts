import { writable, type Writable } from "svelte/store";

export const selectedTheme: Writable<string> = writable<string>("Sunset Cream");

export const setTheme = (themeName: string): void => selectedTheme.set(themeName);
