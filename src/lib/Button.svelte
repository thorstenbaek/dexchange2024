<script>
    let buttonProps = {
        class:[$$restProps.class]
    }
</script>

    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <button on:click on:mouseover on:mouseenter on:mouseleave>
        <slot/>
    </button>

<style>
	button {
        background-color: var(--accent-0);
        color: white;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        padding: 10px;
        border-radius: 10px;
    }

    button:hover {
        color: var(--accent-1)
    }
</style>