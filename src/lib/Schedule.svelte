<script lang="ts">
    import { browser } from '$app/environment';
    import Tracks from "./Tracks.svelte";
    import Track from "./track";
    import { onMount } from "svelte";
    import {trackStore, nowStore} from "../stores/trackStore";

    export let day: number = 0;

    function scrollTo(time: number) {
        if (browser) {
            window.scroll(0, 50*time/10000);
        }
    }
    
    nowStore.subscribe(time => {scrollTo(time)});


    onMount(async () => {
        try {
            const response = await fetch(`/data/schedule.json`);
            const data = await response.json();

            var tracks = data.schedule.days[day].tracks;
            var temp = new Array<Track>()
            
            for (let i = 0; i < tracks.length; i++) {
                temp.push(new Track(tracks[i], data.schedule.days[0], i));
            }

            $trackStore = temp;
        } catch (error) {
            console.error(error);
        }
    });
</script>

<Tracks />
