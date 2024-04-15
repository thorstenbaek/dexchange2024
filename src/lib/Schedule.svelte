<script lang="ts">
    import Tracks from "./Tracks.svelte";
    import Breaks from "./Breaks.svelte";
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