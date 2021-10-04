<!--
@component
Componente Btn:
Un componente para generar botones
-->

<script>
    export let href;
</script>

{#if href}
    <a {href} {...$$restProps}>
        <slot/>
    </a>
{:else}
    <button {...$$restProps}>
        <slot/>
    </button>
{/if}

<style>
    a, 
    button
    {
        background: var(--bg-btn);
        border: 1px solid var(--c-btn);;
        border-radius: 5px;
        color: var(--c-btn);
        cursor: pointer;
        font-family: var(--font-1);
        font-size: 15px;
        font-weight: bold;
        padding: 10px 20px;
        text-decoration: none;
        text-align: center;
        transition: var(--transition);
    }

    a:hover,
    button:hover
    {
        background: var(--c-btn);
        color: var(--bg-btn);
    }

    a:active,
    button:active
    {
        position:relative;
        top:1px;
    }

    /* Warning */
    .warning{
        background: var(--c-warning);
    }

    .warning:hover
    {
        background: var(--c-warning2);
        color: var(--c-btn);
    }

    /* Error */
    .error{
        background: var(--c-error);
    }

    .error:hover {
        background: var(--c-error2);
        color: var(--c-btn);
    }

    /* Positive */
    .positive{
        background: var(--c-positive);
    }

    .positive:hover {
        background: var(--c-positive2);
        color: var(--c-btn);
    }
</style>