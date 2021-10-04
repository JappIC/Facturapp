<!--
@component
Componente Textarea:
Un componente para los textareas.
-->

<script>
    export let value;
</script>

<textarea bind:value={value} rows="3" {...$$restProps} />

<style>
    textarea{
        border: var(--border);
        border-radius: 5px;
        background-color: var(--c-secondary);
        color: var(--c-text);
        font-family: var(--font-1);
        font-size: var(--font-size);
        outline: 0;
        padding: 5px 5px;
        transition: var(--transition);
        width: 100%;
    }

    textarea:focus {
        border-color: var(--c-company);
    }

    textarea[readonly] {
        border-style: dotted;
        cursor: not-allowed;
        color: #777;
    }

    textarea[disabled]{
        --input-border: #ccc;
        background-color: #eee;
        cursor: not-allowed;
    }
</style>