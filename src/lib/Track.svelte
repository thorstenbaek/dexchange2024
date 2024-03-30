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
        max-width: var(--expanded-width);
        min-width: var(--collapsed-width);
    }

    .hidden {
        overflow: hidden;   
    }

    .ontop {
        width: var(--expanded-width);
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
        width: var(--expanded-width);
        padding: 12px;
        font-size: 1.4rem;
        
        overflow: hidden;
    }

    @media print {
        .hidden {
            max-width: var(--expanded-width);
            width: var(--expanded-width);
        }
    }
</style>