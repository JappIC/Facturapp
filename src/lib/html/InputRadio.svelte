<!--
@component
Componente Input:
Un componente para usar cualquier tipo de input.
-->

<script>
    export let 
        group,
        value
    ;
</script>

<input type="radio" {value} bind:group {...$$restProps}>

<style>
    input[type="radio"]{
        appearance: none;
        background-clip: content-box;
        background-color: var(--c-tertiary);
        border: 2px solid var(--c-border);
        border-radius: 50%;
        cursor: pointer;
        height: 25px;
        outline: 0;
        padding: 3px;
        transition: var(--transition);
        width: 25px;
    }

    input[type="radio"]:focus{
        border-color: var(--c-company);
    }

    input[type="radio"]:checked{
        background-color: var(--c-company);
        border: 1px solid var(--c-company);
    }
</style>