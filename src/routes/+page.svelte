<script>
    import Schedule from "$lib/Schedule.svelte";
</script>
<main>
    <h1>d:exchange 2024</h1>

    <h2>onsdag 17. april</h2>
    <Schedule day="dag1.json"/>

    <h2>torsdag 18. april</h2>
    <Schedule day="dag2.json"/>
</main>

<style>
    /*---------------------------
    ** Variables
    -----------------------------*/
    :global(:root) {
        --accent-1: hsl(31, 77%, 52%);
        --accent-2: hsl(184, 100%, 22%);
        --accent-3: hsl(179, 100%, 13%);
        --accent-4: hsl(199, 100%, 22%);
        --black: hsl(0, 0%, 0%);
        --font-body: helvetica, sans-serif;
        --font-heading: helvetica, sans-serif;
        --neutral: hsl(0, 0%, 95%);
        --white: hsla(0, 0%, 100%, 0.75);
    }

    :global(body) {
        background: var(--neutral);
        font-family: var(--font-body);
        font-size: 0.9375rem;
    }

    main {
        padding: 1.5rem 0.2rem;
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
        padding: 1.375rem;
        border-radius: 0.95rem;
        width: 200px;
        background-color: var(--accent-1);
        color: var(--white);
    }

    @media screen and (min-width: 42.5rem) {
        :global(.container) {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
                -ms-flex-direction: row;
                    flex-direction: row;
            max-width: 53.75rem;
        }
    }
</style>