<script lang="ts">
    import Tracks from "./Tracks.svelte";
    import Track from "./track";
    import { onMount } from "svelte";
    import {trackStore} from "../stores/trackStore";

    export let day: string;
    let tabs: any = [];

    onMount(async () => {
        try {
            const response = await fetch(`/data/${day}`);
            const data = await response.json();
            
            var tracks = data.schedule.tracks;
            var temp = new Array<Track>()
            
            for (let i = 0; i < tracks.length; i++) {
                temp.push(new Track(tracks[i], data.schedule.startTime));
            }

            $trackStore = temp;
            
        } catch (error) {
            console.error(error);
        }
    });
</script>

<Tracks />   
