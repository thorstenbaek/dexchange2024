<script lang="ts">
    
    import {scheduleStore} from "../../../stores/scheduleStore";
    import Day from "$lib/day";
    import Session from "$lib/session";
    import Schedule from "$lib/schedule";
    import { backIn } from "svelte/easing";

    let session: Session;
    
	/** @type {import('./$types').PageData} */
    export let data: any;
    
    function findSession(schedule: Schedule, sessionId: number) {
        if (schedule) {
            schedule.days.forEach((d: Day) => {
                d.tracks.forEach(t => {
                    t.sessions.forEach((s: Session) => {
                        if (s.id == sessionId)
                        {                            
                            session = s;
                        }
                    })
                })
            })
        }
    }

    $: if ($scheduleStore) findSession($scheduleStore, data.id);
</script>    

{#if session}
<div class="session">
    <h1>{session?.title}</h1>
    <h2>{session.speaker}</h2>
    <p class="ingress">
        {session.ingress}
    </p>    
    <p>
        {session.description}
    </p> 
    <button on:click={() => history.back()}>Tilbake</button>   
</div>    
{/if}

<style>
    .session {
        padding: 20px;
    }

    .ingress {
        font-weight: bold;
    }
</style>