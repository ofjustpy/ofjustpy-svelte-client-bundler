import { writable } from "svelte/store";

export const justpyComponents = writable([]);

export function setJustpyComponents(newData) {
      justpyComponents.set(newData);
}
