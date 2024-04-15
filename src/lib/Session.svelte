<script lang="ts">
    import moment from "moment";
    import {marked} from "marked";
    import {calculateTop, calculateHeight} from "./timeUtils";
    import Session from "./session";
    import Tag from "./Tag.svelte";
    import {activeTrackStore} from "../stores/scheduleStore";


    export let session: Session;
    
    function getTop() {
        return calculateTop(session.start, session.track.day.start);
    }

    function getHeight() {        
        return calculateHeight(session.start, session.end);
    }

    const displayTime = (() =>  {
        return moment(session.start).format("HH:mm");
    });
</script>

<div class="session" style="top:{getTop()}px;height:{getHeight()-4}px;background-color:var(--accent-{session.track.index})">    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="inner-session">
        <div class="content">
            <div class="textbox">
                <h3 class="title">{displayTime()} {session.title}</h3>
                <Tag {session}/>
                <h4 class="speaker">{session.speaker}</h4>        
                <a class="ingress {$activeTrackStore == session.track.index ? "active":""}" href="./session/{session.id}" style="color:var(--contrast-{session.track.index}" aria-label="Les mer om {session.title}" title="Klikk for å lese mer">
                    {#if session.ingress}
                        {@html marked(session.ingress)}
                    {/if}         
                    
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    h3 {
        font-size: 0.9rem;
        margin: 2px 0;    
    }

    h4 {
        font-size: 0.7rem;
        margin: 6px 0;    
    }

    a {
        display: inline-block;
        font-size: 0.8rem;  
        text-decoration: none;             
        pointer-events: none;
        touch-action: none;
    }

    a.active {
        pointer-events: all;
        touch-action: auto;
    }
     /*.more-button {
        margin: 0;
        padding: 0;
        height: 1rem;
        width: 1rem;
        align-items: center;
        vertical-align: bottom;        
    }

    .invert {
        filter: invert(100%);
    }*/
    
    .session {
        position: absolute;        
        width: 100%;
        border-radius: 10px;        
    }

    .ingress {
        line-height: 1.1rem;
    }

    .inner-session {
        position: relative;
        overflow: hidden;
        height: calc(100% - 16px);
        padding: 8px 12px;
    }

    .content {
        height: 100%;
        position: relative;                
        overflow: hidden;
    }

    .textbox {
        position: absolute;                
        width: 240px;
    }

    @media screen and (min-width: 1150px) {
        a {
            pointer-events: all;
            touch-action: auto;
        }
    }

</style>