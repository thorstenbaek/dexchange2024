<script>
    import Schedule from "$lib/Schedule.svelte";
</script>
<main>
    <h1>d:exchange 2024</h1>

    <h2>onsdag 17. april</h2>
    <Schedule day="dag1.json"/>

    <!-- <h2>torsdag 18. april</h2>
    <Schedule day="dag2.json"/> -->
</main>

<style>
    /*---------------------------
    ** Variables
    -----------------------------*/
    :global(:root) {
        --accent-1: hsl(31, 77%, 52%);
        --accent-2: hsl(184, 100%, 22%);
        --accent-3: hsl(179, 100%, 13%);
        --accent-4: hsl(0, 100%, 22%);
        --black: hsl(0, 0%, 0%);
        --font-body: helvetica, sans-serif;
        --font-heading: helvetica, sans-serif;
        --neutral: hsl(0, 0%, 95%);
        --white: hsla(0, 0%, 100%, 0.95);
    }

    :global(body) {
        background: var(--neutral);
        font-family: var(--font-body);
        margin: 0;
        padding: 0;
        font-size: 0.9375rem;
    }

    main {
        display: grid;
        margin: 5px 7px 5px 8px;
        grid-area: 1;
        width: 360px;        
    }

    :global(.card) {        
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: flex-start;
        padding: 15px;
        max-width: 300px;
        width: 300px;
        color: var(--white);
    }

    :global(.track-title) {
        /*visibility: hidden;
        display: none;*/
        font-size: 1.2rem;
    }

    @media screen and (min-width: 42.5rem) {
        main {
            width: auto;
        }
        /*:global(.track-title) {
            visibility: visible;
            display: inline;
        }*/
    }

    @media print {
        main {
            width: auto;
        }
        :global(.track-title) {
            visibility: visible;
            display: inline;
        }
        :global(.card) {        
            color: black;
        }
    }
</style>