<script lang="ts">
    import {onMount} from "svelte";
    import Day from "$lib/Day.svelte";
    import { autoScroll } from "../stores/scheduleStore";

    let day: number = 0;

    onMount(() => {
        var today: Date = new Date();
        if (today.getDate() == 18 && today.getMonth() == 3 && today.getFullYear() == 2024) {        
            day = 1
        }
        else {
            day = 0;
        }

        $autoScroll = true;
    });
</script>



<Day {day} />


