<script lang="ts">
    import Times from "./Times.svelte";
    import Schedule from "./Schedule.svelte";
    import { loadAll } from "@square/svelte-store";
    import {scheduleStore, dayIndexStore, dayStore} from "../stores/scheduleStore";

    export let day = 0;

    $: {
        $dayIndexStore = day;
    }
</script>

{#await loadAll([scheduleStore])}
    Loading Schedule...
{:then}    
    <div class="container">
        <Times/>
        <Schedule/>
    </div>
{/await}

<style>
    .container {
        display: grid;
        grid-template-columns: 24px auto;
    }
</style>