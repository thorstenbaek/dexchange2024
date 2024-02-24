<script lang="ts">
    import Session from "./session";
    
    export let session: Session;
</script>

<div class="session" style="height:{session.calculateHeight()}px">
    <div class="time">
        {session.displayTime()}
    </div>
    <div class="session-title">
        {session.title}
        
        <div class="speaker">
            {session.speaker}
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
        font-size: 1.4rem;        
    }

    .speaker {
        font-size: 1.0rem;        
        font-weight: bold;
        padding-top: 5px;
    }

    .session {
        display: grid;
        grid-template-columns: 40px auto;        
        grid-gap: 5px;
        overflow: hidden;
        border-bottom: 1px white solid;        
        width: 300px;
        padding: 10px 0 0 0;
        margin: 0;
    }
</style>