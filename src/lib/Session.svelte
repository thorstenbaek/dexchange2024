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
</script>

<div class="session" style="top:{getTop()}px;height:{getHeight()}px;background-color:var(--accent-{session.track.index})">    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="content" style="-webkit-line-clamp: {getLines()}">
        <h3 class="title">{displayTime()} {session.title}</h3>
        <h4 class="speaker">{session.speaker}</h4>        
        <a href="./session/{session.id}" style="color:var(--contrast-{session.track.index}">
            {#if session.description}
                {session.description}
            {/if}         
        </a>
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

    a {
        font-size: 0.8rem;  
        text-decoration: none;             
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