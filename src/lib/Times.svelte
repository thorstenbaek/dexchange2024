<script lang="ts">
    import {dayStore} from "../stores/scheduleStore";
    import {calculateTop, calculateHeight} from "./timeUtils";

    function getTop(time: Date): number {
        return calculateTop(time, $dayStore.start) + 32;        
    }

    function getTimes(): Array<Date> {
        var hours = Math.abs($dayStore.end.getTime() - $dayStore.start.getTime()) / 36e5;
        
        var results = new Array<Date>();
        for(var i:number = 0; i <= hours; i++) {
            results.push(new Date($dayStore.start.getTime() + i*36e5));
        }
         
        return results;
    }    

    function formatHours(time: Date): string {
        const hours = time.getHours().toString();

        if (hours.length == 2) {
            return hours;
        }

        return "0" + hours;
    }
</script>



<div class="times">
    {#each getTimes() as time}
        <div class="time" style="top:{getTop(time)}px">
            {#if time.getMinutes() == 0}
                <div class="time-marker" style="border-bottom: 2px solid #aaaaaa">
                    {formatHours(time)}
                </div>    
                <div>
                    00
                </div>    
            {:else}
                <div class="time-marker" style="border-bottom: 1px solid #cccccc">
                    &nbsp;
                </div>
            {/if}
        </div>
    {/each}
</div>

<style>
    .time {
        position: absolute;
        text-align: left;        
        
        width: 1125px;
    }
    
    .times {     
        position: relative;   
        color: #aaaaaa;
        border-radius: 10px;
        font-size: 0.8rem;   
        padding-left: 3px;     
        /*margin-right: 4px;*/
        font-weight: bold;
        
    }
</style>