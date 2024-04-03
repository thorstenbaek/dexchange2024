<script lang="ts">
    import moment from "moment";
    import Break from "./break";
    import {calculateTop, calculateHeight} from "./timeUtils";
    
    export let _break: Break;

    function getTop() {
        return calculateTop(_break.start, _break.day.start);        
    }

    function getHeight() {        
        return calculateHeight(_break.start, _break.end);
    }

    const displayTime = (() =>  {
        return moment(_break.start).format("HH:mm");
    });
</script>



<div class="break" style="top:{getTop()}px;height:{getHeight() - 4}px">    
    <div class="content">
        {displayTime()} {_break.title}
    </div>
</div>

<style>
    .content {
        font-size: 1.4rem;
        text-align: left;
        margin: 20px;
    }

    .break {
        position: absolute;
        background: white;
        color: var(--accent-0);
        width: 100%;
        border-radius: 10px;
    }
</style>