<script>
    import Day from "$lib/Day.svelte";
    import { onMount } from "svelte";
    import { autoScroll } from "../../stores/scheduleStore";

    onMount(() => {
        $autoScroll = false;
    })
</script>

<Day day={1} />


