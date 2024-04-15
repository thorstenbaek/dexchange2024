<script lang="ts">
    import Track from "./Track.svelte";
    import {dayStore} from "../stores/scheduleStore";    
</script>
    <div class="tracks" style="grid-template-columns:repeat({$dayStore?.tracks.length}, auto)">
        {#each $dayStore?.tracks as track, index}
            <Track {track} {index}/>     
        {/each}
    </div>
<style>
    .tracks {        
        display: grid;
        column-gap:4px;
    }
</style>