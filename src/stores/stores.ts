import { writable } from "svelte/store";

export let isOpen = writable(false);
export let isOpenModalDeleteUser = writable(false);
export let deleUserId = writable(0);
export let users = writable([]);