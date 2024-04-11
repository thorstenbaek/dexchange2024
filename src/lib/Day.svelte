<script lang="ts">
    import Times from "./Times.svelte";
    import Schedule from "./Schedule.svelte";
    import TimeMarker from "./TimeMarker.svelte";
    import { loadAll } from "@square/svelte-store";
    import {scheduleStore, dayIndexStore, dayStore} from "../stores/scheduleStore";

    export let day: number = 0;
    let width: number;

    $: {
        $dayIndexStore = day;
    }
</script>

{#await loadAll([scheduleStore])}
    Loading Schedule...
{:then}    
    <div class="container" bind:clientWidth={width}>
        <Times/>
        <Schedule/>
        <TimeMarker parentWidth={width}/>
    </div>
{/await}

<style>
    .container {
        position: relative;
        display: grid;
        grid-template-columns: 24px auto;
    }
</style>