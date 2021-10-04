<!--
@component
Componente List:
Un componente para mostrar listas con clases para formatear el diseño.
-->

<script>
    export let list;
</script>

<ul {...$$restProps}>
    {#each list as text}
        <li>{text}</li>
    {/each}
</ul>

<style>
    ul{
        list-style: none;
    }

    /* Tipo de estilo de lista */
    .li-none{
        list-style: none;
        margin: 0;
        padding: 0.5rem;
    }

    .li-disc{
        list-style: disc;
    }

    .li-decimal{
        list-style: decimal;
    }

    .li-circle{
        list-style: circle;
    }

    .li-square{
        list-style: square;
    }

    .li-upper-roman{
        list-style: upper-roman;
    }

    .li-lower-alpha{
        list-style: lower-alpha;
    }
</style>