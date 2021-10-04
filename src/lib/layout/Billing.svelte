<script>
    export let
        n_invoice,
        subtotal,
        invoiced,
        discount,
        end,
        tax,
        paid,
        total
    ;
</script>

<div {...$$restProps}>
    <ul>
        <li>
            <i class="fas fa-list-ol"></i>
            <span>Nº factura</span> 
            <span>{n_invoice}</span>
        </li>
        <li>
            <i class="far fa-calendar-check"></i>
            <span>Facturado</span>
            <span>{invoiced}</span>
        </li>
        <li>
            <i class="far fa-calendar-times"></i>
            <span>Finaliza</span>
            <span>{end}</span>
        </li>
        <li>
            <i class="far fa-check-circle"></i>
            <span>Pagada</span>
            <span>{paid}</span>
        </li>
    </ul>
    
    <ul>
        <li>
            <i class="fas fa-calculator"></i>
            <span>Subtotal</span>
            <span><b>{subtotal}</b></span>
        </li>
        <li>
            <i class="fas fa-tags"></i>
            <span>Descuento</span>
            <span>{discount}</span>
        </li>
        <li>
            <i class="fas fa-percentage"></i>
            <span>IGIC - IVA</span>
            <span>{tax}</span>
        </li>
        <li>
            <i class="fas fa-cash-register"></i> 
            <span>Total</span>
            <span><b>{total}</b></span>
        </li>
    </ul>
</div>

<style>
    div{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    ul{
        border: var(--border);
        margin: 0;
        padding: 10px;
    }

    ul li{
        display: grid;
        align-items: center;
        grid-template-columns: 25px 1fr auto;
        padding: 3px;
    }

    @media (max-width: 768px) {
		div{
            grid-template-columns: 1fr;
        }
	}
</style>