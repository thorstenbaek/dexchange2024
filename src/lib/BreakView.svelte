<script lang="ts">
    import moment from "moment";

    export let title: string;
    export let startTime: Date;
    export let endTime: Date;

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

<div class="session" style="height:{calculateHeight()}px">
    <div></div>
    <div></div>
    <div class="time">
        {displayTime()}  
    </div>
    <div class="session-title">
        {title}
    </div>
    
</div>

<style>
    .time {
        display: inline-block;
        font-size: 0.8rem;
        font-weight: bold;
    }

    .session-title {
        font-size: 1.4rem;        
    }

    .session {
        display: grid;
        grid-template-columns: 40px auto;     
        grid-template-rows: 10px auto;     
        grid-gap: 5px;
        overflow: hidden;
        border-top: 1px rgba(255, 255, 255, 0.4) solid;        
        width: 300px;                
    }
</style>