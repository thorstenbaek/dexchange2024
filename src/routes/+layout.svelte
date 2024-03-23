<script>
    import {dayIndexStore} from "../stores/scheduleStore";
</script>

<main>
    <div class="logo">
        <h1>
            <img src="/logo.svg" width="200" alt="d:exchange"/>
            2024
        </h1>
    </div> 
    <nav class="days">
        <a class={$dayIndexStore == 0 ? 'selected':''} href="/day1">onsdag 17. apr</a>
        |
        <a class={$dayIndexStore == 1 ? 'selected':''} href="/day2">torsdag 18. apr</a>
    </nav>   
    <slot />
</main>

<style>
    .logo {
        background: linear-gradient(90deg, rgba(0,20,158,1) 30%, rgba(243,88,61,1) 100%);
        margin: 0;
        padding: 0 0 0 12px;
        border-radius: 10px;
    }

    .days {
        font-size: 1.3rem;
        background: var(--white);
        color: var(--accent-0);
        margin: 4px 0 4px 0;
        padding: 4px 15px;
        border-radius: 10px;
    }

    a {
        color: var(--accent-0);
        font-weight: bold;
        text-decoration: none;    
    }

    .selected {
        color: var(--accent-1);
    }

    h1 {
        display: flex;
        align-items: center;
        color: white;
        font-size: 2rem;
    }

    img {
        padding: 0 12px 0 0;
    }
    /*---------------------------
    ** Variables
    -----------------------------*/
    :global(:root) {
        --accent-0: #00149e;
        --accent-1: #00d4d4;
        --accent-2: #12565c;
        --accent-3: #f3583d;        
        --accent-4: #050948;
        --accent-5: #811c0b;
        --accent-6: #8da9e4;
        --accent-7: #9aeded;
        --accent-8: #fbc7bb;
        
        
        --contrast-0: white;
        --contrast-1: black;
        --contrast-2: white;
        --contrast-3: black;
        --contrast-4: white;
        --contrast-5: white;
        --contrast-6: black;
        --contrast-7: black;
        --contrast-8: black;
        
        --black: hsl(0, 0%, 0%);
        --font-body: helvetica, sans-serif;
        --font-heading: helvetica, sans-serif;
        --neutral: hsl(0, 0%, 95%);
        --white: hsla(0, 0%, 100%, 0.95);
        margin: 0;
        padding: 0;
    }

    :global(body) {
        background: #eeeeee;
        font-family: var(--font-body);
        color: var(--black);
        margin: 0 2px 0 2px;
        padding: 0;
        font-size: 0.9375rem;
    }

    main {
        display: grid;
        margin: 4px auto 4px auto;
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