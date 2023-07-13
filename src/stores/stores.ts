import { writable } from "svelte/store";

export let isOpen = writable(false);
export let users = writable([]);