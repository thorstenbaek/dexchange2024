<script lang="ts">
    import { browser } from '$app/environment';
    import Tracks from "./Tracks.svelte";
    import Breaks from "./Breaks.svelte";
    import Track from "./track";
    import Break from "./break";
    import { onMount } from "svelte";
    import {trackStore, breakStore, nowStore} from "../stores/trackStore";

    export let day: number = 0;

    function scrollTo(time: number) {
        if (browser) {
            window.scroll(0, 50*time/10000);
        }
    }
    
    nowStore.subscribe(time => {scrollTo(time)});

    /*Move this to store - scheduleStore...*/
    onMount(async () => {
        try {
            const response = await fetch(`/data/schedule.json`);
            const data = await response.json();

            var currentDay = data.schedule.days[day];

            var tracks = currentDay.tracks;
            var temp = new Array<Track>()
            
            for (let i = 0; i < tracks.length; i++) {
                temp.push(new Track(tracks[i], currentDay, i));
            }

            $trackStore = temp;

            var breaks = currentDay.breaks;
            var b = new Array<Break>();
            for (let i = 0; i < breaks.length; i++) {
                b.push(new Break(breaks[i], currentDay, i));
            }

            $breakStore = b;

        } catch (error) {
            console.error(error);
        }
    });
</script>

<div class="container">        
    <Breaks />
    <Tracks />
</div>

<style>
    .container {
        display: grid;
        position: relative;
    }
</style>