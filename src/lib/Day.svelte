<script lang="ts">
    import Schedule from "./Schedule.svelte";
    import { loadAll } from "@square/svelte-store";
    import {scheduleStore, dayIndexStore} from "../stores/scheduleStore";

    export let day = 0;

    $: $dayIndexStore = day;
</script>
<nav class="days">
    <a class={$dayIndexStore == 0 ? 'selected':''} href="./day1">Onsdag</a>
    |
    <a class={$dayIndexStore == 1 ? 'selected':''} href="./day2">Torsdag</a>
</nav>
{#await loadAll([scheduleStore])}
    Loading Schedule...
{:then}    
    <Schedule/>
{/await}

<style>
    .days {
        font-size: 1.3rem;
        background: var(--accent-0);
        color: var(--accent-1);
        padding: 4px 15px;
    }

    a {
        color: var(--accent-1);
        font-weight: bold;
        text-decoration: none;    
    }

    .selected {
        color: white;
    }
</style>