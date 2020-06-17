import { writable } from "svelte/store";
export const pageIndex = writable(1);
export const results = writable([]);
export const maxPage = writable(-1);
