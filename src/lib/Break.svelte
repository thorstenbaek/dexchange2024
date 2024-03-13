<script lang="ts">
    import moment from "moment";
    import Break from "./break";

    const pageHeight: number = 10000;
    
    export let _break: Break;

    function calculateTop() {
        var result = _break.start.getTime() - _break.day.getTime();        
        return result / pageHeight;
        
    }

    function calculateHeight() {        
        if (_break.end == null) {
            return 0;
        }

        var result = _break.end.getTime() - _break.start.getTime() ;
        return result / pageHeight;
    }

    const displayTime = (() =>  {
        return moment(_break.start).format("HH:mm");
    })
</script>



<div class="break" style="top:{calculateTop()}px;height:{calculateHeight()}px">    
    <div class="content">
        {_break.title}
    </div>
</div>

<style>
    .content {
        font-size: 1.7rem;
        text-align: center;
        margin: auto;
    }

    .break {
        position: absolute;
        background: white;
        width: 100%;
        display: grid;            
    }
</style>