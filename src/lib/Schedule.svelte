<script lang="ts">
    import { browser } from '$app/environment';
    import Tracks from "./Tracks.svelte";
    import Breaks from "./Breaks.svelte";

    function scrollTo(time: number) {
        if (browser) {
            window.scroll(0, 50*time/10000);
        }
    }
    //nowStore.subscribe(time => {scrollTo(time)});
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