<script lang="ts">
    import Track from "./Track.svelte";
    import {dayStore, activeTrackStore, /*nowStore*/} from "../stores/scheduleStore";    
</script>
    <!-- {#if $dayStore.length === 0}
        <p>Loading tracks...</p>
    {:else} -->
        <div class="tracks" style="grid-template-columns:repeat({$dayStore?.tracks.length}, auto)">
            {#each $dayStore?.tracks as track, index}
                <Track {track} {index}/>     
            {/each}
        </div>
<!--
        <div class="overlay">                                
            <div class="buttons" style="grid-template-columns:repeat({$trackStore.length}, auto)">
                {#each $trackStore as track, index}
                    <!-- <div class="{$activeTrackStore == index ? 'hidden':'visible'}">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <!--<div class="button" 
                            title={track.name}                                
                            style="background-color:var(--accent-{index});color:var(--contrast-{index});margin-top:{index*0}px"
                            on:click={() => $activeTrackStore = index}>
                            {track.name[0]}                                
                        </div>    
                    </div> -->
        <!--        {/each}
            </div>
        </div> -->
    <!-- {/if} -->

<style>
    
    
    .tracks {        
        display: grid;
        column-gap:4px;
    }

    /*.overlay {
        display: blocks;
        visibility: hidden;
        position: fixed;
        grid-area: 1/1;        
    }

    .buttons {
        display: grid;
    }

    .button {
        display: flex;
        height: 26px;
        width: 26px;
        margin-left: -6px;
      
        border-radius: 13px;       
        align-items: center;
        justify-content: center;
    }

    .visible {
        visibility: visible;
        width: 20px
    }
    .hidden {
        visibility: hidden;
        width: 297px
    }

    @media screen and (min-width: 42.5rem) {
        .overlay {            
            display: none;
            visibility: visible;
        }
    }*/
</style>