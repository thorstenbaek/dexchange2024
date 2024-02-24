<script lang="ts">
    import Session from "./session";
    
    export let session: Session;
</script>

<div class="session" style="height:{session.calculateHeight()}px">
    
    <h4>{session.displayTime()} {session.title}</h4>
    <p>{session.speaker}</p>
</div>

<style>
    .session {
        overflow: hidden;
        border-bottom: 1px white solid;        
        width: 300px;
        padding: 0;
        margin: 0;
    }
</style>