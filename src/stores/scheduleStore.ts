import {asyncReadable, writable, readable, derived} from "@square/svelte-store";
import type {Writable, Readable} from "@square/svelte-store";
import yaml from "js-yaml";

import type Day from "../lib/day";
import Schedule from "../lib/schedule";
import Session from "../lib/session";
import { calculateTop } from "../lib/timeUtils";

export const scheduleStore = asyncReadable(undefined, async () => {
    const response = await fetch(`/data/schedule.yaml`);
    const text: string = await response.text();
    const data: any = yaml.load(text, {schema: yaml.JSON_SCHEMA});

    return new Schedule(data.schedule);
});

export const dayIndexStore: Writable<number> = writable(0);
export const activeTrackStore: Writable<number> = writable(0);
export const activeSessionStore: Writable<Session> = writable();

export const dayStore: Readable<Day> = derived(
    [scheduleStore, dayIndexStore], ([$scheduleStore, $dayIndexStore], set) => {
        if ($scheduleStore) {
            set($scheduleStore.days[$dayIndexStore]);
        }
    });

export const pixelsPerHourStore: number = 370;

export const heightStore: Readable<number> = derived(
    dayStore, ($dayStore, set) => {
        var value = ($dayStore.end.getTime() - $dayStore.start.getTime())/3600000 * pixelsPerHourStore;
        set(value);
    });

export const autoScroll: Writable<boolean> = writable(false);    

export const timeStore: Readable<Date> = readable(
    new Date(1900, 0, 0), 
    (set) => {
        const interval = setInterval(() => 
            { 
                let now: Date = new Date(Date.now() + 1000*60*60*24 - 116*60*1000);
                if (now >= new Date(2024, 3, 17, 11, 0, 0) && now <= new Date(2024, 3, 18, 16, 0, 0)) {
                    set(now)
                } else {
                    set(new Date(1900, 0, 0));
                }
            }, 
            15000);
        return () => clearInterval(interval);
    });

export const timePositionStore: Readable<number> = derived(
    [timeStore, dayStore],  ([$timeStore, $dayStore], set) => {
        set(calculateTop($timeStore, $dayStore.start) + 35);
    });

export const timeDisplayStore: Readable<string> = derived(
        [timeStore, dayStore],  ([$timeStore, $dayStore], set) => {
            set($timeStore.toLocaleDateString() + " " + $timeStore.toLocaleTimeString());
        });    

export const timeScrollStore: Readable<number> = derived(
    [autoScroll, timeStore, dayStore],  ([$autoScroll, $timeStore, $dayStore], set) => {
        if ($autoScroll && $timeStore && $dayStore) {
            set(calculateTop($timeStore, $dayStore?.start) + 35);
        } else {
            //console.log("no autoscroll")
            set(0);
        }
    });