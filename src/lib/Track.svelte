<script lang="ts">
    import Track from "./track";

    export let track: Track;
    export let color: string;
</script>

<div class="card" style="background-color:var({color})">
    <p class="title">{track.name}</p>
        <div class="sessions">
            {#each track.sessions as session}
                <svelte:component this={session.component} {...session.props} />
            {/each}
        </div>
</div>

<style>
    .sessions {
        position: relative;
        height: 100%;
    }
</style>