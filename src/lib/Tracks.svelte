<script lang="ts">
    import Track from "./Track.svelte";
    import {trackStore} from "../stores/trackStore";

    function generateGridTemplate() {
        var template = "auto";
        for(let i = 0; i < $trackStore.length - 1; i++)
        {
            template += " auto";
        }
        return template;
    }
</script>
    {#if $trackStore.length === 0}
        <p>Loading tracks...</p>
    {:else}
        <div class="tracks" style="grid-template-columns:{generateGridTemplate()}">
            {#each $trackStore as track, index}
                <Track {track} {index}/>     
            {/each}
        </div>
    {/if}


<style>
    .tracks {
        display: grid;
        grid-gap: 0;
    }
</style>