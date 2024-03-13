<script>
    import {breakStore} from "../stores/trackStore";    
    import Break from "./Break.svelte";
</script>

<div class="breaks">
    {#each $breakStore as _break}        
        <Break {_break}/>
    {/each}
</div>

<style>
    .breaks {
        grid-area: 1/1;
        display: grid;
        grid-gap: 0;

        top: 66px;
        position: relative;
    }
</style>
