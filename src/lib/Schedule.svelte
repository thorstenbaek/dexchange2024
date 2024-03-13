<script lang="ts">
    import { browser } from '$app/environment';
    import Tracks from "./Tracks.svelte";
    import Track from "./track";
    import { onMount } from "svelte";
    import {trackStore, nowStore} from "../stores/trackStore";

    export let day: string;

    function scrollTo(time: number) {
        if (browser) {
            window.scroll(0, 50*time/10000);
        }
    }
    
    nowStore.subscribe(time => {scrollTo(time)});


    onMount(async () => {
        try {
            const response = await fetch(`/data/${day}`);
            const data = await response.json();
            
            var tracks = data.schedule.tracks;
            var temp = new Array<Track>()
            
            for (let i = 0; i < tracks.length; i++) {
                temp.push(new Track(tracks[i], data.schedule.startTime, i));
            }

            $trackStore = temp;
        } catch (error) {
            console.error(error);
        }
    });
</script>

<Tracks />   
