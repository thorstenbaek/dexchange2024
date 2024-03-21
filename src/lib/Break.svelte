<script lang="ts">
    import Break from "./break";
    import {calculateTop, calculateHeight} from "./timeUtils";
    
    export let _break: Break;

    function getTop() {
        return calculateTop(_break.start, _break.day.start);        
    }

    function getHeight() {        
        return calculateHeight(_break.start, _break.end);
    }
</script>



<div class="break" style="top:{getTop()}px;height:{getHeight()}px">    
    <div class="content">
        {_break.title}
    </div>
</div>

<style>
    .content {
        font-size: 1.4rem;
        text-align: left;
        margin: auto auto auto 20px;
    }

    .break {
        position: absolute;
        background: white;
        color: var(--accent-0);
        width: 100%;
        display: grid;            
    }
</style>