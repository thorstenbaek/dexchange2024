<script lang="ts">
    import Session from "./Session.svelte";

    export let session: Session;
</script>

<span class="label" style="color: var(--accent-{session.track.index}); background: var(--contrast-{session.track.index}">
    {#if session.kind=="speech"}
        FOREDRAG
    {:else if session.kind=="lightning"}
        LYNTALE
    {:else}
        WORKSHOP
    {/if}
</span>

<style>
     .label {
        font-size: xx-small;
        font-weight: bold;
        color: var(--accent-0);
        background: var(--contrast-0);
        padding: 1px 3px;
    }
</style>