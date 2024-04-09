<script lang="ts">
    
    import {scheduleStore} from "../../../stores/scheduleStore";
    import Day from "$lib/day";
    import Session from "$lib/session";
    import Schedule from "$lib/schedule";
    import Button from "$lib/Button.svelte";
    import {marked} from "marked";
    import moment from "moment";

    let session: Session;
    
	/** @type {import('./$types').PageData} */
    export let data: any;
    
    function open(url: string) {
        window.open(url, '_blank');
    }

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
    <h4>        
        {session.track.room} <br/>
        {moment(session.start).format("DD. MMMM HH.mm")} - {moment(session.end).format("HH.mm")}
    </h4>
    <h1>{session?.title}</h1>
    <h2>{session.speaker}</h2>
    <p class="ingress">
        {@html marked(session.ingress)}
    </p>    
    <p>
        {@html marked(session.description)}
    </p> 
    
    {#if (session.teams)}
        <Button on:click={() => {open(session.teams)}}>Åpne i Teams</Button>
    {/if}
    <Button on:click={() => history.back()}>Tilbake</Button>   
</div>    
{/if}

<style>
    .session {
        padding: 24px;
    }

    .ingress {
        font-weight: bold;
    }
</style>