<script lang="ts">
    import Track from "./track";
    import {activeTrackStore} from "../stores/trackStore";

    export let track: Track;
    export let index: number;


    function handleClick(tabValue:number) {
        $activeTrackStore = tabValue;
    }

</script>
    <div class="track {$activeTrackStore != index ? 'hidden':''}" on:click={handleClick(index)}>
        <!-- <span class="track-title" style="background-color:var(--accent-{index + 1})">
            {track.name}
        </span>                 -->
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
    }

    .hidden {        
        overflow: hidden;
        max-width: 15px;     
    }

    .content {
        width: 270px;
        padding: 15px;
    }

    @media screen and (min-width: 42.5rem) {
        .hidden {
            max-width: 300px;
        }
    }
</style>