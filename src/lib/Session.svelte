<script lang="ts">
    import moment from "moment";
    import {marked} from "marked";
    import {calculateTop, calculateHeight} from "./timeUtils";
    import Session from "./session";

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
                <h4 class="speaker">{session.speaker}</h4>        
                <a href="./session/{session.id}" style="color:var(--contrast-{session.track.index}">
                    {#if session.ingress}
                        {@html marked(session.ingress)}
                        <!-- <img class="more-button {}" src="/noun-more-symbol.svg" alt="Les mer"/> -->
                    {/if}         
                    
                </a>
            </div>
        </div>
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

    .inner-session {
        position: relative;
        overflow: hidden;
        height: calc(100% - 20px);
        padding: 10px 12px;
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
</style>