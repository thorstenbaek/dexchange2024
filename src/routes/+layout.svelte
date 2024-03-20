<main>
    <nav>
        <a href="./day1">Day 1</a>
        <a href="./day2">Day 2</a>
    </nav>
    <h1>d:exchange 2024</h1>
    <slot />
</main>

<style>
    /*---------------------------
    ** Variables
    -----------------------------*/
    :global(:root) {
        --accent-0: #00d4d4;
        --accent-1: #f3583d;        
        --accent-2: #050948;
        --accent-3: #12565c;
        --accent-4: #811c0b;
        --accent-5: #8da9e4;
        --accent-6: #9aeded;
        --accent-7: #fbc7bb;
        --accent-8: #00149e;
        
        --contrast-0: black;
        --contrast-1: black;
        --contrast-2: white;
        --contrast-3: white;
        --contrast-4: white;
        --contrast-5: black;
        --contrast-6: black;
        --contrast-7: black;
        --contrast-8: white;
        --black: hsl(0, 0%, 0%);
        --font-body: helvetica, sans-serif;
        --font-heading: helvetica, sans-serif;
        --neutral: hsl(0, 0%, 95%);
        --white: hsla(0, 0%, 100%, 0.95);
    }

    :global(body) {
        background: #eeeeee;
        /*background: linear-gradient(90deg, #00149e 69%, rgba(243,88,61,1) 100%);*/     
        font-family: var(--font-body);
        color: var(--black);
        margin: 5px 7px 5px 8px;
        padding: 0;
        font-size: 0.9375rem;
    }

    main {
        display: grid;
        margin: auto;
        grid-area: 1;
        width: auto;
        max-width: 1200px;
        min-width: 360px;
    }

    @media print {
        main {
            width: auto;
        }
    }
</style>