<script>
    import { selectedInvoiceStatus } from"$lib/stores/options.js";
    import { Input } from"$lib/html/html.js";

    export let
        n_invoice,
        invoiced,
        end,
        subtotal,
        discount,
        tax,
        paid =false,
        edit=false,
        //budget=true,
        badge
    ;

    let state;

    $:if (paid === false){
        state = "No"
    } else {
        state = "Si"
    }

    // Formatemos las fecha
    $: dateInvoiced = new Date(invoiced).toLocaleDateString("es-ES");
    $: dateEnd = new Date(end).toLocaleDateString("es-ES");

    // Calculo % del descuento y el impuesto
    $: calDiscount = (subtotal*discount)/100;
    $: calTax = (subtotal*tax)/100;
    // Total final de factura o presupuesto
    $: total = subtotal-calDiscount+calTax;

</script>

<div class="billing" {...$$restProps}>
    <ul>
        <li>
            <i class="fas fa-list-ol"></i>
            <span>Nº factura</span> 
            {#if edit} 
                <Input type="text" id="n_invoice" bind:value={n_invoice} class="bold text-right"/>
            {:else}
                <span>{n_invoice}</span>
            {/if}
        </li>
        <li>
            <i class="far fa-calendar-check"></i>
            <span>Facturado</span>
            {#if edit} 
                <Input type="date" id="invoiced" bind:value={invoiced} class="bold text-right"/>
            {:else}
                <span>{dateInvoiced}</span>
            {/if}
        </li>
        <li>
            <i class="far fa-calendar-times"></i>
            <span>Finaliza</span>
            {#if edit} 
                <Input type="date" id="end" bind:value={end} class="bold text-right"/>
            {:else}
                <span>{dateEnd}</span>
            {/if}
        </li>
        <li class={$selectedInvoiceStatus} >
            <i class="fas fa-file-invoice-dollar"></i>
            {#if $selectedInvoiceStatus === "budget"}
                <span>Presupuesto</span>
            {/if}
            {#if $selectedInvoiceStatus === "pay"}
                <span>Pagada</span>
                <i class="far fa-check-circle"></i>
            {/if}
            {#if $selectedInvoiceStatus === "unpaid"}
                <span>Impaga</span>
                <i class="far fa-times-circle"></i>
            {/if}
        </li>
    </ul>
    
    <ul>
        <li>
            <i class="fas fa-calculator"></i>
            <span>Subtotal</span>
            <span>{subtotal} {badge}</span>
        </li>
        <li>
            <i class="fas fa-tags"></i>
            <span>Descuento</span>
            {#if edit} 
                <Input type="text" id="discount" bind:value={discount} class="bold text-right"/>
            {:else}
                <span>{discount} %</span>
            {/if}
        </li>
        <li>
            <i class="fas fa-percentage"></i>
            <span>IGIC - IVA</span>
            {#if edit} 
                <Input type="text" id="tax" bind:value={tax} class="bold text-right"/>
            {:else}
                <span>{tax} %</span>
            {/if}
        </li>
        <li>
            <i class="fas fa-cash-register"></i> 
            <span>Total</span>
            <span><b>{total} {badge}</b></span>
        </li>
    </ul>
</div>

<style lang="postcss">
    .billing{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        margin: var(--margin);

        & ul{
            border: var(--border);
            margin: 0;
            padding: 10px;
        }

        & ul li{
            display: grid;
            align-items: center;
            grid-template-columns: 25px 1fr auto;
            padding: 3px;

            & .state{
                display: flex;
                align-items: center;
            }
        }

        .unpaid{
            color: red;
        }

        .budget{
            color: orange;
        }

        .pay{
            color: green;
        }
    }

    /* Ajustes de impresión */
    @media print {
        .billing{
            grid-template-columns: repeat(2, 1fr) !important;
        }
    }

    /* Adaptativa */
    @media (max-width: 768px) {
		.billing{
            grid-template-columns: 1fr;
        }
	}
</style>