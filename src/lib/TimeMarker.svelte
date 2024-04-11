<script lang="ts">
    import { get } from "svelte/store";
    import {timePositionStore, timeStore} from "../stores/scheduleStore";

    function format(timeString: string): string {
        if (timeString.length == 2) {
            return timeString;
        }

        return "0" + timeString;
    }

    export let parentWidth: number;
</script>




<div class="overlay" style="top:{$timePositionStore}px">    
    <div class="time-marker">
        <div style="border-bottom: 2px solid">
            {format($timeStore.getHours().toString())}
        </div>    
        <div>
            {format($timeStore.getMinutes().toString())}
        </div>            
    </div>    
    <span class="line" style="width:{parentWidth - 24}px"/>
</div>    



<style>
    .overlay {
        display: blocks;
        position: absolute;
    }

    .time-marker {
        text-align: left;
        color: #ffffff;
        font-size: 0.8rem;   
        padding: 4px;     
        border-radius: 10px;
        font-weight: bold;
        background-color: var(--accent-3);
    }

    .line {
        position: absolute;
        top: 18px;
        left: 24px;
        width: 1vw;
        height: 4px;
        background-color: var(--accent-3);
        opacity: 0.45;
        border-top: 1px solid white;
        border-bottom: 1px solid black;
    }
</style>