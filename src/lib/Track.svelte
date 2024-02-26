<script lang="ts">
    import Track from "./track";
    import {activeTrackStore} from "../stores/trackStore";
    import Sessions from "./Sessions.svelte";

    export let track: Track;
    export let index: number;


    function handleClick(tabValue:number) {
        $activeTrackStore = tabValue;
    }

</script>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="track {$activeTrackStore != index ? 'hidden':''} {$activeTrackStore == index ? 'ontop':''}" style="color:var(--contrast-{index});height: 5000px"
        
        on:click={() => handleClick(index)}>
        <div class="title" style="background-color:var(--accent-{index})">
            {track.name}
        </div>                
        <Sessions {track} trackIndex={index}/>
    </div>

<style>
    .track {
        max-width: 300px;
        min-width: 1rem;
    }

    .hidden {   
        overflow: hidden;     
        max-width: 1rem;     
        width: 1rem;
    }

    .ontop {
        width: 300px;
    }    

    .title {
        width: 270px;
        padding: 1rem;      
    }

    @media screen and (min-width: 42.5rem) {
        .hidden {            
            max-width: 300px;         
            width: auto;   
        }
    }

    @media print {
        .hidden {            
            max-width: 300px;         
            width: auto;   
        }
    }
</style>