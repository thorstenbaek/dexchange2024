<script lang="ts">
    import Track from "./track";

    export let track: Track;
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
</style>