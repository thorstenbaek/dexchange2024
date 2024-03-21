<script lang="ts">
    import Track from "./track";
    import Session from "./Session.svelte";

    export let track: Track;
</script>

<div class="sessions">
    {#each track.sessions as session, index}
       <Session {session}/>      
    {/each}
</div>

<style>
    .sessions {
        position: relative;
    }
</style>