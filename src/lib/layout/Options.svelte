<script>
    import { badge, selectedBadge, invoiceStatus, selectedInvoiceStatus, edit } from"$lib/stores/options.js";
    import { Label ,InputCheck, Select } from"$lib/html/html.js";
</script>

<div class="options">
    <div>
        <Label forr="edit" text="Divisa"/> 
        <Select
            value={selectedBadge}
            options={badge}
        />
    </div>
    <div>
        <Label forr="edit" text="Estado"/> 
        <Select
            value={selectedInvoiceStatus}
            options={invoiceStatus}
        />
    </div>
    <div>
        <Label forr="edit" text="Editar"/>
        <InputCheck id="edit" bind:checked={$edit} /> 
    </div>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="" onclick="window.print()" title="Imprimir - PDF">
        <i class="fas fa-print"></i> Imprimir
    </a>
</div>

<style lang="postcss">
    .options{
        align-items: center;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 10px;
        justify-items: center;
        padding: 25px;

        & div{
            display: flex;
            align-items: center;
            grid-gap: 5px;
        }
    }

    /* Ajustes de impresión */
    @media print {
        .options { display: none !important; }
    }
</style>