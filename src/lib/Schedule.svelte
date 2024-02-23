<script lang="ts">
    import { onMount } from "svelte";

    export let day: string;
    let tracks: any = [];

    onMount(async () => {
        try {
            const response = await fetch(`/data/${day}`);
            const data = await response.json();
            
            tracks = data.schedule.tracks;
            
        } catch (error) {
            console.error(error);
        }
    });
</script>

{#if tracks.length === 0}
    <p>Loading...</p>
{:else}
    {#each tracks as track}
        <section>
            <h3>{track.name}</h3>
            <ul>
                {#each track.sessions as session}
                    <li>
                        <h4>{session.title}</h4>
                        <p>{session.speaker}</p>
                    </li>
                {/each}
            </ul>
        </section>
    {/each}
{/if}