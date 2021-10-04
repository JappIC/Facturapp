<!--
@component
Componente Input:
Un componente para usar cualquier tipo de input.
-->

<script>
    export let checked;
</script>

<input type="checkbox" bind:checked {...$$restProps}>

<style>
    input[type="checkbox"] {
        appearance: none;
        background-clip: content-box;
        background-color: var(--c-tertiary);
        border: 2px solid var(--c-border);
        border-radius: 5px;
        cursor: pointer;
        height: 25px;
        outline: 0;
        padding: 3px;
        transition: var(--transition);
        width: 25px;
    }

    input[type="checkbox"]:focus{
        border: 1px solid var(--c-border);
    }

    input[type="checkbox"]:checked {
        background-color: var(--c-company);
        border: 1px solid var(--c-company);
    }
</style>