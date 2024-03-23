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
            <div class="inner-title">
                <div class="text-box">
                    {track.room}
                </div>
            </div>
        </div>
        <Sessions {track} />
    </div>

<style>
    .track {
        position: relative;
        max-width: 297px;
        min-width: 20px;
    }

    .hidden {
        overflow: hidden;   
    }

    .ontop {
        width: 297px;
    }

    .title {
        border-radius: 10px;
        margin: 0 0 4px 0;
    }

    .inner-title {
        width: calc(100% - 10px);
        overflow: hidden;
    }

    .text-box {
        width: 297px;
        padding: 12px;
        font-size: 1.4rem;
        
        overflow: hidden;
    }

    @media print {
        .hidden {
            max-width: 297px;
            width: 297px;
        }
    }
</style>