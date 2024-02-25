<script lang="ts">
    import moment from "moment";

    export let title: string;
    export let speaker: string;
    export let startTime: Date;
    export let endTime: Date;
    export let dayTime: Date;
    export let trackIndex: number;

    function calculateTop() {
        var result = startTime.getTime() - dayTime.getTime();
        return result / 10000;
    }

    function calculateHeight() {        
        if (endTime == null) {
            return 0;
        }

        var result = endTime.getTime() - startTime.getTime() ;
        return result / 10000;
    }

    const displayTime = (() =>  {
        return moment(startTime).format("HH:mm");
    })

</script>

<div class="session" style="top:{calculateTop()}px;height:{calculateHeight()}px;background-color:var(--accent-{trackIndex + 1})">    
    <div class="time">
        {displayTime()}
    </div>
    <div class="session-title">
        {title}
        
        <div class="speaker">
            {speaker}
        </div>    
    </div>
</div>

<style>
    .time {
        display: inline-block;
        font-size: 0.8rem;
        font-weight: bold;
    }

    .session-title {
        font-size: 1.0rem;        
    }

    .speaker {
        font-size: 1.0rem;        
        padding-top: 5px;
    }

    .session {
        position: absolute;
        display: grid;
        grid-template-columns: 40px auto;     
        grid-gap: 5px;
        overflow: hidden;
        width: 270px;
        border-top: 1px rgba(255, 255, 255, 0.4) solid;        
        padding: 1rem;
    }
</style>