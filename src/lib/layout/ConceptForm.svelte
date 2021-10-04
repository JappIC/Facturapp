<script>
    import {Label, Input } from"$lib/html/html.js";

    export let amount= 1
    export let product="Añade un nombre del producto"
    export let price = 20
    $: price_total = amount * price

    const addconcept = () => {
        concepts = [
        ...concepts,
        {
            amount,
            product,
            price,
            price_total
        }
        ];
        product = "";
    };

</script>

<form on:submit|preventDefault={addconcept}>
    <button on:submit|preventDefault={addconcept}>Guardar</button>
    <Label forr="amount" icon="far fa-address-card" text="Cantidad"/>
    <Input type="number" id="amount" bind:value={amount} class="bold"/>
</form>
<form on:submit|preventDefault={addconcept}>
    <Label forr="product" icon="far fa-address-card" text="Producto"/>
    <Input type="text" id="product" bind:value={product} class="bold"/>
</form>
<form on:submit|preventDefault={addconcept}>
    <Label forr="price" icon="far fa-address-card" text="Precio"/>
    <Input type="number" id="price" bind:value={price} class="bold"/>
</form>
<form on:submit|preventDefault={addconcept}>
    <Label forr="price-total" icon="far fa-address-card" text="Total"/>
    <Input type="number" id="price-total" bind:value={price_total} class="bold"/>
</form>