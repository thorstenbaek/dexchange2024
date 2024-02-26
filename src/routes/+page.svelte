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
        --accent-0: #0A9396;
        --accent-1: #94d2bd;
        --accent-2: #e9d8a6;
        --accent-3: #ee9b00;
        --accent-4: #ca6702;
        --accent-5: #bb3e03;
        --accent-6: #ae2012;
        --accent-7: #9b2226;
        --accent-8: #001219;
        --accent-9: #005f73;
        --contrast-0: black;
        --contrast-1: black;
        --contrast-2: black;
        --contrast-3: black;
        --contrast-4: black;
        --contrast-5: white;
        --contrast-6: white;
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