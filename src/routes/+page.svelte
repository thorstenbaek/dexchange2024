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
        --accent-0: #001219;
        --accent-1: #005f73;
        --accent-2: #0A9396;
        --accent-3: #94d2bd;
        --accent-4: #e9d8a6;
        --accent-5: #ee9b00;
        --accent-6: #ca6702;
        --accent-7: #bb3e03;
        --accent-8: #ae2012;
        --accent-9: #9b2226;
        --contrast-0: white;
        --contrast-1: white;
        --contrast-2: black;
        --contrast-3: black;
        --contrast-4: black;
        --contrast-5: black;
        --contrast-6: black;
        --contrast-7: white;
        --contrast-8: white;
        --contrast-9: white;
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

    @media screen and (min-width: 42.5rem) {
        main {
            width: auto;
        }        
    }

    @media print {
        main {
            width: auto;
        }
    }
</style>