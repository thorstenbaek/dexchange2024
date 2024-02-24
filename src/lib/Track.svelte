<script lang="ts">
    export let track: any;
    export let color: string;
</script>

<div class="card" style="background-color:var({color})">
    <h2>{track.name}</h2>
    <ul>
        {#each track.sessions as session}
            <li>
                <h4>{session.title}</h4>
                <p>{session.speaker}</p>
            </li>
        {/each}
    </ul>
</div>

<style>
   
</style>