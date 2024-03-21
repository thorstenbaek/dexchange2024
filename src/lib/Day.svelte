<script lang="ts">
    import Schedule from "./Schedule.svelte";
    import { loadAll } from "@square/svelte-store";
    import {scheduleStore, dayIndexStore} from "../stores/scheduleStore";

    export let day = 0;

    $: $dayIndexStore = day;
</script>

{#await loadAll([scheduleStore])}
    Loading Schedule...
{:then}    
    <Schedule/>
{/await}

<style>
    
</style>