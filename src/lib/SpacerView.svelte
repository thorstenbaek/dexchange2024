<script lang="ts">
    export let startTime: Date;
    export let endTime: Date;

    function calculateHeight() {
        if(endTime == null) {
            return 0;
        }

        var result = endTime.getTime() - startTime.getTime() ;
        return result / 10000;
    }
</script>

<div style="height:{calculateHeight()}px">
    
</div>