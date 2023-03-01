import { writable, type Writable } from "svelte/store";

export const selectedTheme: Writable<string> = writable<string>("Mossy");

export const setTheme = (themeName: string): void => selectedTheme.set(themeName);
