<script lang="ts">
    import moment from "moment";
    import Track from "./track";

    const pageHeight: number = 10000;
    const maxDescriptionLength = 350;

    export let title: string;
    export let description: string;
    export let speaker: string;
    export let startTime: Date;
    export let endTime: Date;
    export let track: Track;

    function calculateTop() {
        var result = startTime.getTime() - track.day.start.getTime();
        return result / pageHeight;
    }

    function calculateHeight() {        
        if (endTime == null) {
            return 0;
        }

        var result = endTime.getTime() - startTime.getTime() ;
        return result / pageHeight;
    }

    const displayTime = (() =>  {
        return moment(startTime).format("HH:mm");
    });

    const displayDescription = (() => {
        if (!description) {
            return "";
        }
        //TODO: Vary length based on calculatedHeight    
        if (description.length > maxDescriptionLength) {
            return description.substring(0, maxDescriptionLength);
        } 
        else {
            return description;
        }        
    });

    const showDescriptionPopup = (() => {
    
    })

</script>

<div class="session" style="top:{calculateTop()}px;height:{calculateHeight()}px;background-color:var(--accent-{track.index})">    
    <div class="content">
        <h3>{displayTime()}</h3>
        <h3 class="title">{title}</h3>
        <p/>
        <h4 class="speaker">{speaker}</h4>
        <!-- <div class="description">{@html displayDescription()}</div> -->
        <p class="description">
            {displayDescription()}
            {#if description?.length > maxDescriptionLength}
                <a href="#" on:click={() => showDescriptionPopup()}>mer...</a>
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
       display: grid;
       grid-template-columns: 40px auto;            
       grid-template-rows: auto auto;     
       grid-column-gap: 8px;
    }

    .description {
        margin: 0;
        grid-column: 1/ span 2
    }

    /*
    .session-title {
        font-size: 1.0rem;        
    }

    .speaker {
        font-size: 1.0rem;        
        padding-top: 5px;
    }*/

    .session {
        position: absolute;
        
        width: 300px;
        overflow: hidden;
    }
</style>