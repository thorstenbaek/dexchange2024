<script lang="ts">
    import Track from "./Track.svelte";

    export let items:any = [];
    export let activeTab:number = 0;

    function handleClick(tabValue:number) {
        activeTab = tabValue;
    }

</script>

<ul>
    {#each items as item}        
        <li class={activeTab === item.index ? 'active' : ''}>
            <span on:click={() => handleClick(item.index)}>
                {item.track.name}
            </span>
        </li>
    {/each}
</ul>
<div class="container">
    {#each items as item, i}
        <div class="box" on:click={() => handleClick(i)} style="z-index:{activeTab == item.index ? 999 : item.index};margin-left:{item.index*15}px">
            <Track track={item.track} color="--accent-{i + 1}"/>
        </div>        
    {/each}
</div>

<style>
    .container {
        display: grid;
        
        /*grid-template-columns: auto auto auto auto;
        grid-gap: 0;*/
    }

    .box {        
        grid-area: 1/1;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        border-bottom: 1px solid #dee2e6;
    }
    li {
            margin-bottom: -1px;
    }

    span {
        border: 1px solid transparent;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        display: inline;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    span:hover {
        border-color: #e9ecef #e9ecef #dee2e6;
    }

    li.active > span {
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    }
</style>