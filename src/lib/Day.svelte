<script lang="ts">
    import {get} from "svelte/store";
    import { browser } from '$app/environment';
    import Times from "./Times.svelte";
    import Schedule from "./Schedule.svelte";
    import TimeMarker from "./TimeMarker.svelte";
    import { loadAll } from "@square/svelte-store";
    import {scheduleStore, dayIndexStore, timeScrollStore, heightStore} from "../stores/scheduleStore";

    export let day: number = 0;
    let width: number;

    function scrollTo(position: number) {
        if (browser) {
            if (position > 0 && position < get(heightStore)) {
                window.scroll(0, position);
            }
        }
    }
    
    timeScrollStore.subscribe(positiom => 
    {
        scrollTo(positiom);
    });

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