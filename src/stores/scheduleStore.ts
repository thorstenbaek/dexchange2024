import {asyncReadable, writable, derived} from "@square/svelte-store";
import type {Writable, Readable} from "@square/svelte-store";
import yaml from "js-yaml";

import type Day from "../lib/day";
import type Track from "../lib/track";
import type Break from "../lib/break";
import Schedule from "../lib/schedule";

export const scheduleStore = asyncReadable(undefined, async () => {
    const response = await fetch(`/data/schedule.yaml`);
    const text: string = await response.text();
    const data: any = yaml.load(text, {schema: yaml.JSON_SCHEMA});

    //const data = await response.json();            
    return new Schedule(data.schedule);
});

export const dayIndexStore: Writable<number> = writable(0);
export const activeTrackStore: Writable<number> = writable(0);

export const dayStore: Readable<Day> = derived(
    [scheduleStore, dayIndexStore], ([$scheduleStore, $dayIndexStore], set) => {
        if ($scheduleStore) {
            set($scheduleStore.days[$dayIndexStore]);
        }
    });


/*export const breakStore: Writable<Array<Break>> = writable([]);


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
*/