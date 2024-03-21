<script lang="ts">
    import moment from "moment";
    import {calculateTop, calculateHeight} from "./timeUtils";
    import Session from "./session";
    import {activeSessionStore} from "../stores/scheduleStore";

    export let session: Session;

    let contentHeight: number;
    
    function getTop() {
        return calculateTop(session.start, session.track.day.start);
    }

    function getHeight() {        
        return calculateHeight(session.start, session.end);
    }

    function getLines(): number {
        let result = Math.trunc(getHeight() / 16) - 2;
        return result;
    }

    const displayTime = (() =>  {
        return moment(session.start).format("HH:mm");
    });
    
    const showSessionPopup = (() => {
        $activeSessionStore = session;
    })

</script>

<div class="session" style="top:{getTop()}px;height:{getHeight()}px;background-color:var(--accent-{session.track.index})">    
    <div class="content" style="-webkit-line-clamp: {getLines()}">
        <h3 class="title">{displayTime()} {session.title}</h3>
        <h4 class="speaker">{session.speaker}</h4>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <p style="-webkit-line-clamp: {getLines()}" on:click={() => showSessionPopup()}>
            {#if session.description}
                {session.description}
            {/if}         
        </p>
    </div>
</div>

<style>
    /*.time {
        display: inline-block;
        font-size: 0.8rem;
        font-weight: bold;
    }*/

    h3 {
        font-size: 1.0rem;
        margin: 5px 0;    
    }

    h4 {
        font-size: 0.8rem;
        margin: 5px 0;    
    }

    p {
        font-size: 0.8rem;               
    }
    
    .content {
       margin: 20px;          
       display: -webkit-box;        
       -webkit-box-orient: vertical;        
       overflow: hidden;
       border-top: solid 1px;
    }
    .session {
        position: absolute;
        width: 300px;
        overflow: hidden;
    }
</style>