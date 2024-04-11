<script lang="ts">
    import {get} from "svelte/store";
    import { browser } from '$app/environment';
    import Tracks from "./Tracks.svelte";
    import Breaks from "./Breaks.svelte";
    import {timeStore, dayStore, pixelsPerHourStore, heightStore} from "../stores/scheduleStore";    

    function scrollTo(time: number) {
        if (browser) {
            var scrollPos = 0;
            scrollPos = (time - get(dayStore).start.getTime())/3600000*pixelsPerHourStore;
            
            if (scrollPos > 0 && scrollPos < get(heightStore)) {
                //window.scroll(0, scrollPos);
            }
            
        }
    }
    
    timeStore.subscribe(time => {scrollTo(time.getTime())});
</script>



<div class="container">        
    <Breaks />
    <Tracks />
</div>

<style>
    .container {
        display: grid;
        position: relative;
    }
</style>