<script lang="ts">
    import Track from "./track";
    import Sessions from "./Sessions.svelte";
    import {activeTrackStore, heightStore} from "../stores/scheduleStore";

    export let track: Track;
    export let index: number;


    function handleClick(tabValue:number) {
        $activeTrackStore = tabValue;
    }

</script>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="track {$activeTrackStore != index ? 'hidden':''} {$activeTrackStore == index ? 'ontop':''}" style="color:var(--contrast-{index});height: {$heightStore}px" on:click={() => handleClick(index)}>
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
        }
    }

    @media print {
        .hidden {
            max-width: 300px;
            width: 300px;
        }
    }
</style>