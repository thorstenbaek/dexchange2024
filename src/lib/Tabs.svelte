<script lang="ts">
    import Track from "./Track.svelte";

    export let items:any = [];
    export let activeTab:number = 0;

    function handleClick(tabValue:number) {
        activeTab = tabValue;
    }

</script>

<ul class="tabs">
    {#each items as item, i}        
        <li class={activeTab === item.index ? 'active' : ''}>
            <span on:click={() => handleClick(item.index)} style="background-color:var(--accent-{i + 1})">
                {item.track.name}
            </span>
        </li>
    {/each}
</ul>
<div class="container">
    {#each items as item, i}
        <div class="box {activeTab != i ? 'hidden':''}" on:click={() => handleClick(i)} style="z-index:{activeTab == item.index ? 999 : item.index};">
            <Track track={item.track} color="--accent-{i + 1}" />
        </div>        
    {/each}
</div>

<style>
    .container {
        display: grid;
        
        grid-template-columns: auto auto auto auto;
        grid-gap: 0;
    }

    .hidden {        
        overflow: hidden;
        max-width: 15px;        
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
         padding-bottom: 0;
    }

    span {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        display: inline;
        padding: 0.5rem 0.5rem 0.1rem 0.5rem;
        cursor: pointer;
        font-size: 1.2rem;
        color: var(--white);
    }

    li.active > span {
        color: var(--white);
        border-color: #dee2e6 #dee2e6 #fff;
    }

    @media screen and (min-width: 42.5rem) {
        .hidden {
            max-width: 350px;
        }
        .tabs {
            display: none;
        }        
    }

    @media print {
        .hidden {
            max-width: 350px;
        }
        .tabs {
            display: none;
        }        
    }
</style>