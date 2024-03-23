<script lang="ts">
    let texts = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore temporibus a, totam expedita odio aperiam repudiandae id officiis molestias quos distinctio voluptas magni recusandae omnis possimus pariatur reiciendis enim aut.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla repellendus illum, a debitis hic dolor qui voluptatibus odit nisi id voluptatem? Nemo fuga enim debitis, dignissimos ad dolores earum?",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis animi officiis nisi totam facere. Deserunt reprehenderit, nisi accusamus tempore molestiae, perferendis placeat eaque, dicta veniam dolore culpa debitis beatae expedita.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, unde assumenda quasi iusto sunt est, doloribus tempora amet odio incidunt soluta quis cumque illum officia voluptates possimus in provident ipsa!"
    ];
</script>


<div class="container">    
    {#each texts as text}
        <div class="column">
            <div class="inner-column">
                <div class="textbox">
                    {text}
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-column-gap: 15px;
    }

    .column {
        position: relative;
        border-radius: 15px;
        border-color: white solid 1px;
        background-color: rgb(5, 66, 66);
        height: 900px;
        overflow: hidden;
    }

    .inner-column {
        position: absolute;
        overflow: hidden;
        left: 15px;
        top: 15px;
        width: calc(100% - 30px);
        height: 900px;       
    }

    .textbox {
        z-index: 999;
        color: white;
        width: 256px;
    }
</style>