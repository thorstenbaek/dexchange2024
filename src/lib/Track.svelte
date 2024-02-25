<script lang="ts">
    import Track from "./track";
    import {activeTrackStore} from "../stores/trackStore";

    export let track: Track;
    export let index: number;


    function handleClick(tabValue:number) {
        $activeTrackStore = tabValue;
    }

</script>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="track  {$activeTrackStore != index ? 'hidden':''} {$activeTrackStore == index ? 'ontop':''}" on:click={() => handleClick(index)}>
        <div class="title" style="background-color:var(--accent-{index + 1})">
            {track.name}
        </div>                
        <div class="content" style="background-color:var(--accent-{index + 1})">
            <p>
                Velkommen
            </p>
            <p>
                Keynote
            </p>
            <p>
                Verdi og brukervennlighet
            </p>
            <p>
                Utvikling i klinikken
            </p>
        </div>
    </div>

<style>
    .track {
        max-width: 300px;
        min-width: 1rem;
        color: var(--white);
    }

    .hidden {        
        overflow: hidden;
        max-width: 1rem;     
        width: 1rem;
    }

    .ontop {
        width: 300px;
    }

    .content {
        width: 270px;
        padding: 1rem;
    }

    .title {
        width: 270px;
        padding: 1rem;      
    }

    @media screen and (min-width: 42.5rem) {
        .hidden {
            overflow: hidden;
            max-width: 300px;         
            width: auto;   
        }
    }
</style>