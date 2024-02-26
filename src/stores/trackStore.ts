import {writable, readable} from "svelte/store";
import type {Writable, Readable} from "svelte/store";
import type Track from "../lib/track";

export const trackStore: Writable<Array<Track>> = writable([]);
export const activeTrackStore: Writable<number> = writable(0);

export const startTime:Date = new Date(2024, 4, 17, 11, 0, 0);

let seconds = 0;
export const nowStore: Readable<number> = readable(    
    startTime.getTime(),
    (set) => {
        const interval = setInterval(() => {    
            set(1000*seconds++);        
    }, 60000);
        return () => clearInterval(interval);
    });

// export const nowStore: Readable<number> = readable(
//     Date.now(), 
//     (set) => {
//         const interval = setInterval(() => {    
//             set(Date.now());        
//     }, 1000);
//         return () => clearInterval(interval);
//     });
