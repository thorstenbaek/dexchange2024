<script lang="ts">
    import moment from "moment";
    import Track from "./track";

    const pageHeight: number = 10000;

    export let title: string;
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
    })

</script>

<div class="session" style="top:{calculateTop()}px;height:{calculateHeight()}px;background-color:var(--accent-{track.index})">    
    <div class="content">
        <div>{displayTime()}</div>
        <div>{title}</div>
        <div/>
        <div>{speaker}</div>
    </div>
</div>

<style>
    /*.time {
        display: inline-block;
        font-size: 0.8rem;
        font-weight: bold;
    }*/

    .content {
       margin: 20px; 
       display: grid;
       grid-template-columns: 40px auto;     
       grid-template-rows: auto auto;     
       grid-gap: 5px;
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