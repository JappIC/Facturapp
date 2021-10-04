<!--
@component
Componente Input:
Un componente para usar casi cualquier tipo de input.
Los input de tipo "Checkbox" y "Radiobutton" tienen sus propios componentes.
Esto se debe porque svelte maneja el "value" de estos input de manera diferente al "bind:value" general de casi todos los input.
-->

<script>
    export let value;
</script>

<input bind:value {...$$restProps}>

<style>
    input{
        border: var(--border);
        border-radius: 5px;
        background-color: var(--c-secondary);
        color: var(--c-text);
        font-family: var(--font-1);
        font-size: var(--font-size);
        outline: 0;
        padding: 6px 6px;
        transition: var(--transition);
    }

    input:focus{
        border-color: var(--c-company);
    }

    /*input[type="email"],
    input[type="number"],
    input[type="password"],
    input[type="search"],
    input[type="url"],
    input[type="tel"],
    input[type="text"]
    {
        box-shadow: inset var(--shadow)
    }*/
    
    input[type="range"] {
        appearance: none;
        height: 1px;
        border-radius: 5px;
        transition: 0.3;
    }

    input[type="range"]::-webkit-slider-thumb {
        appearance: none;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background: var(--c-company);
        cursor: pointer;
    }

    input[type=range]::-webkit-slider-runnable-track  {
        appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }

    input[type="color"] {
        cursor: pointer;
        height: 1.5em;
        padding: 0 2px;
        position: relative;
        width: 1.5em;
        -webkit-appearance: none;
    }

    input[type="submit"],
    input[type="reset"]
    {
        background: var(--bg-btn);
        border: var(--border);
        border-radius: 5px;
        box-shadow: var(--shadow);
        color: var(--c-btn);
        cursor: pointer;
        font-family: var(--font-1);
        font-size: 15px;
        font-weight: bold;
        padding: 10px 20px;
        text-decoration: none;
        transition: var(--transition);
    }

    input[type="submit"]:hover,
    input[type="reset"]:hover
    {
        background: var(--c-btn);
        border: var(--border);
        box-shadow: var(--shadow-hover);
        color: var(--bg-btn );
    }

    input[type="submit"]:active,
    input[type="reset"]:active 
    {
        position:relative;
        top:1px;
    }

    input[readonly]{
        border-style: dotted;
        cursor: not-allowed;
        color: #777;
    }

    input[disabled]{
        --input-border: #ccc;
        background-color: #eee;
        cursor: not-allowed;
    }

</style>