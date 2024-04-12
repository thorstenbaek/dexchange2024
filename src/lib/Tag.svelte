<script lang="ts">
    import Session from "./session";

    export let session: Session;
</script>

{#if session.kind}
    <span class="tag" style="color: var(--accent-{session.track.index}); background: var(--contrast-{session.track.index}">    
        {#if session.kind=="speech"}
            FOREDRAG
        {:else if session.kind=="lightning"}
            LYNTALE
        {:else}
            WORKSHOP
        {/if}
    </span>
{/if}

<style>
     .tag {
        font-size: xx-small;
        font-weight: bold;
        padding: 1px 3px;        
    }
</style>