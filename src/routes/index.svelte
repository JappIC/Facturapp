<script context="module">
	export const prerender = true;
</script>

<script>
    // ESTILOS GLOBALES
    import "../app.css"
    // STORES
    import { selectedBadge, edit } from"$lib/stores/options.js";
    import { subtotal } from"$lib/stores/options.js";
	// COMPONENTES
    import CardData from "$lib/layout/CardData.svelte";
    import Concept from "$lib/layout/Concept.svelte";
    import Billing from "$lib/layout/Billing.svelte";
    import Options from "$lib/layout/options.svelte";
</script>

<main class="main">
    <div class="cards-data">
        <CardData
            img="https://japp.es/img/logo.svg"
            company="Compañia"
            cif_nif="G77777778"
            street="Calle y numero"
            address="domicilio"
            telephone="999 888 777"
            email="miemail@miemail.com"
            web="www.miweb.com"
            edit={$edit}
        />
        <CardData
            img="https://japp.es/img/logo.svg"
            company="Compañia"
            cif_nif="G77777778"
            street="Calle y numero"
            address="domicilio"
            telephone="999 888 777"
            email="miemail@miemail.com"
            web="www.miweb.com"
            edit={$edit}
        />
    </div>
    
    <Concept badge={$selectedBadge}/>

    <Billing
        n_invoice="JS-345"
        subtotal={$subtotal}
        invoiced="2021-05-31"
        end="2021-05-31"
        discount="10"
        tax="0.5"
        edit={$edit}
        badge={$selectedBadge}
    />

    <Options />
</main>

<style lang="postcss">
	main{
        background: var(--c-company2);
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto auto;
        grid-gap: 25px;
        height: 100vh;
        max-width: 1024px;
        margin: 0 auto;

        & .cards-data{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 10px;
            margin: var(--margin);
        }
    }

    /* Ajustes de impresión */
    @media print {
        main .cards-data{ grid-template-columns: repeat(2,1fr) !important; }
    }

    /* Adaptativa */
	@media (max-width: 768px) 
    {
		main {
			max-width: none;

            & .cards-data{
                grid-template-columns: 1fr;
            } 
		} 
	}
</style>