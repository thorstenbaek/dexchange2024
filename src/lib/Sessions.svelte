<script lang="ts">
    import Track from "./track";

    export let track: Track;
    export let trackIndex: number;
</script>

<div class="sessions">
    {#each track.sessions as session, index}
       <svelte:component this={session.component} {...session.props}/>      
    {/each}
</div>

<style>
    .sessions {
        position: relative;
    }

    .session {
        position: absolute;
        width: 270px;
        padding: 1rem;
    }
</style>