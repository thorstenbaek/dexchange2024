import { get } from "svelte/store";
import { heightStore, pixelsPerHourStore } from "../stores/scheduleStore";

export function calculateTop(start: Date, dayStart: Date): number {
    var result = start.getTime() - dayStart.getTime();
    return result/3600000*pixelsPerHourStore;
}

export function calculateHeight(start: Date, end: Date): number {
    if (end == null) {
        return 0;
    }

    var result = end.getTime() - start.getTime();
    return result/3600000*pixelsPerHourStore;
}