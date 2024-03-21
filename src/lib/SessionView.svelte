<script lang="ts">
    import moment from "moment";
    import {calculateTop, calculateHeight} from "./timeUtils";
    import Track from "./track";

    const maxDescriptionLength = 350;

    export let title: string;
    export let description: string;
    export let speaker: string;
    export let startTime: Date;
    export let endTime: Date;
    export let track: Track;

    let contentHeight: number;
    
    function getTop() {
        return calculateTop(startTime, track.day.start);
    }

    function getHeight() {        
        return calculateHeight(startTime, endTime);
    }

    function getLines(): number {
        let result = Math.trunc(getHeight() / 16) - 2;
        console.log(result);
        return result;
    }

    const displayTime = (() =>  {
        return moment(startTime).format("HH:mm");
    });
    
    const showSessionPopup = (() => {
        //$currentSession = 
    })

</script>

<div class="session" style="top:{getTop()}px;height:{getHeight()}px;background-color:var(--accent-{track.index})">    
    <div class="content" style="-webkit-line-clamp: {getLines()}">
        <h3 class="title">{displayTime()} {title}</h3>
        <h4 class="speaker">{speaker}</h4>
        <p style="-webkit-line-clamp: {getLines()}" on:click={() => showSessionPopup()}>
            {#if description}
                {description}
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