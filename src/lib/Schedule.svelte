<script lang="ts">
    import Track from "./track";
    import { onMount } from "svelte";
    import Tabs from "./Tabs.svelte";

    export let day: string;
    let tabs: any = [];

    onMount(async () => {
        try {
            const response = await fetch(`/data/${day}`);
            const data = await response.json();
            
            var tracks = data.schedule.tracks;
            var temp = []
            
            for (let i = 0; i < tracks.length; i++) {
                temp.push({track: new Track(tracks[i], data.schedule.startTime), index: i});
            }
            tabs = temp;
            
        } catch (error) {
            console.error(error);
        }
    });
</script>

    {#if tabs.length === 0}
        <p>Loading tracks...</p>
    {:else}
        <Tabs items={tabs}/>
    {/if}
