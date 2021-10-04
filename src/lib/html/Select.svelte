<!--
@component
Componente Select:
Un componente para mostrar una lista seleccionable.
-->

<script>
    export let 
        value,
        options
    ;
</script>

<select bind:value={$value} {...$$restProps}>
	{#each $options as option}
		<option value={option.value}>{option.name}</option> 
	{/each}
</select>

<style>
    select{
        border: var(--border);
        border-radius: 5px;
        background-color: transparent;
        color: var(--c-text);
        font-size: var(--font-size);
        font-family: var(--font-1);
        cursor: pointer;
        outline: none;
        padding: 5px 5px;
        transition: var(--transition);
    }

    select *{
        background-color: var(--c-secondary);
    }

    select:focus{
        border-color: var(--c-company);
    }
</style>