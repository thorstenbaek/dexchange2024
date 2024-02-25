import {writable} from "svelte/store";
import type {Writable} from "svelte/store";
import type Track from "../lib/track";

export const trackStore: Writable<Array<Track>> = writable([]);
export const activeTrackStore: Writable<number> = writable(0);