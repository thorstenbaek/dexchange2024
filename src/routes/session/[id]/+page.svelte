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
<div class="container">
    <div/>
    <div class="session">
        <h4>        
            {session.track.room} <br/>
            {moment(session.start).format("DD. MMMM HH.mm")} - {moment(session.end).format("HH.mm")}
        </h4>
        
        {#if session.kind=="speech"}
            <span class="tag">FOREDRAG</span>
        {:else if session.kind=="lightning"}
            <span class="tag">LYNTALE</span>
        {:else if session.kind=="workshop"}
            <span class="tag">WORKSHOP</span>  
        {/if}

        <h1>    
            {session?.title}
        </h1>
        
        <h2>{session.speaker}</h2>
        <p class="ingress">
            {@html marked(session.ingress)}
        </p>    
        <p>
            {@html marked(session.description)}
        </p> 
        <div class="button-panel">
            {#if (session.teams)}
                <Button on:click={() => {open(session.teams)}}>Åpne i Teams</Button>
            {/if}
            {#if (session.recording)}
                <Button on:click={() => {open(session.recording)}}>Se opptak</Button>
            {/if}
            <Button on:click={() => history.back()}>Tilbake</Button>   
        </div>
    </div>
    <div/>   
</div> 
{/if}

<style>
    h1 {
        margin: 5px 0;
    }

    .tag {
        font-size: 1rem;
        font-weight: bold;
        color: #eeeeee;
        background: black;
        padding: 1px 3px;
    }

    .button-panel {
        padding-top: 20px;
    }

    .container {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .session {
        padding: 24px;
        max-width: 700px;
    }

    .ingress {
        font-weight: bold;
        padding-bottom: 1rem;
    }
</style>