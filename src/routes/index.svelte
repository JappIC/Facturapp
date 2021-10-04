<script context="module">
	export const prerender = true;
</script>

<script>
	import CardData from "$lib/layout/CardData.svelte";
    import Concept from "$lib/layout/Concept.svelte";
    import Billing from "$lib/layout/Billing.svelte";
    import ConceptForm from "$lib/layout/ConceptForm.svelte";

    let concepts = [
        { amount: 1, product: "Milk", price: 30, price_total: 30, done: false },
        { amount: 2, product: "Molk", price: 30, price_total: 60, done: false },
        { amount: 3, product: "Malk", price: 30, price_total: 90, done: false }
    ];

    let 
        amount,
        product,
        price
    ;

    const remove = concept => {
        concepts = concepts.filter(i => i !== concept);
    };

    console.log(concepts);

</script>

<main>
    <div class="cards-data padding">
        <CardData
            img="https://japp.es/wp-content/uploads/2019/12/Icono-fondo-movil.png"
            company="Compañia"
            cif_nif="G77777778"
            street="Calle y numero"
            address="domicilio"
            telephone="999 888 777"
            email="miemail@miemail.com"
            Web="www.miweb.com"
        />
        <CardData
            img="https://japp.es/wp-content/uploads/2019/12/Icono-fondo-movil.png"
            company="Compañia"
            cif_nif="G77777778"
            street="Calle y numero"
            address="domicilio"
            telephone="999 888 777"
            email="miemail@miemail.com"
            Web="www.miweb.com"
        />
    </div>
    <div class="padding">
        <ConceptForm {amount} {product} {price} />
        
        <div class="concepts"> 
            <div><i class="fas fa-boxes"></i> Nº</div>
            <div><i class="fas fa-clipboard-list"></i> Producto</div>
            <div><i class="fas fa-tag"></i> Precio</div>
            <div><i class="fas fa-tags"></i> Total</div>
        </div>
        {#each concepts as concept}
        <Concept amount={concept.amount} product={concept.product} price={concept.price} price_total={concept.price_total}/>
        <button on:click={() => remove(concept)}>&times;</button>
        {/each}
    </div>

    <Billing
        class="padding"
        n_invoice="JS-345"
        subtotal="80€"
        invoiced="23 septiembre, 2021"
        discount="3%"
        end="23 septiembre, 2021"
        tax="3%"
        paid="false"
        total="78,30€" 
    />
</main>

<style>
	main{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        height: 100vh;
        max-width: 1024px;
        margin: 0 auto;
    }

    main .cards-data{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 10px;
    }

    main .concepts{
        background: var(--c-company);
        border-radius: 3px;
        color: var(--c-company2);
        display: grid;
        grid-template-columns: 100px 1fr 100px 100px;
        align-items: center;
    }

    main .concepts div{
        padding: 10px;
    }

    .concepts div:nth-child(3),
    .concepts div:nth-child(4){
        text-align: right;
    }

	@media (max-width: 768px) {
		main {
			max-width: none;
		}

        main .cards-data{
            grid-template-columns: 1fr;
        }
	}
</style>