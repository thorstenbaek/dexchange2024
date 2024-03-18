<script lang="ts">
    import Track from "./track";
    import {activeTrackStore} from "../stores/trackStore";
    import Sessions from "./Sessions.svelte";

    export let track: Track;
    export let index: number;


    function handleClick(tabValue:number) {
        console.log("Handle click", tabValue);
        $activeTrackStore = tabValue;
    }

</script>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="track {$activeTrackStore != index ? 'hidden':''} {$activeTrackStore == index ? 'ontop':''}" style="color:var(--contrast-{index});height: 5000px" on:click={() => handleClick(index)}>
        <div class="title" style="background:var(--accent-{index})">
            {track.room}
        </div>
        <Sessions {track} />
    </div>

<style>
    .track {
        max-width: 300px;
        min-width: 20px;
    }

    .hidden {
        overflow: hidden;
        /*max-width: 20px;*/
    }

    .ontop {
        width: 300px;
    }

    .title {
        width: 260px;
        padding: 20px;
        font-size: 1.4rem;
    }

    @media screen and (min-width: 42.5rem) {
        .hidden {
            /*max-width: 300px;*/
        }
    }

    @media print {
        .hidden {
            max-width: 300px;
            width: 300px;
        }
    }
</style>