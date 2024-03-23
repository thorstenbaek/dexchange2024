<script>
    import {dayStore} from "../stores/scheduleStore";    
    import Break from "./Break.svelte";
</script>

<div class="breaks">
    {#each $dayStore.breaks as _break}        
        <Break {_break}/>
    {/each}
</div>

<style>
    .breaks {
        grid-area: 1/1;
        display: grid;
        grid-gap: 0;

        top: 54px;
        position: relative;
    }
</style>
