<script>
    import { fly, fade } from "svelte/transition";
    import { subtotal } from"$lib/stores/options.js";
    import { Input } from"$lib/html/html.js";

    export let badge;

    let concepts = [];
    // Datos genericos de los inputs de formulario
    let amount= 2;
    let product="Añade un nombre del producto";
    let price = 10;
    // Cálculo del precio total por unidades de un mismo proucto
    $: price_total = amount * price;
    
    // Funcion para añadir conceptos
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
    };

    /**
     * La función map() construye una nueva matriz cambiando el valor de cada elemento en una matriz respectivamente. 
     * Luego, la función de filtro se usa para eliminar los valores que no caen en esa categoría. Finalmente, 
     * la función reduce() toma todos los valores y devuelve un solo valor, que es la suma requerida.
     */
    $: $subtotal = concepts.map(item => item.price_total).reduce((prev, curr) => prev + curr, 0);

    // Función para eliminar conceptos
    const remove = concept => {
        concepts = concepts.filter(i => i !== concept);
    };

</script>

<div class="concepts">
    <div class="concept concept-header"> 
        <div><i class="fas fa-boxes"></i> Nº</div>
        <div><i class="fas fa-clipboard-list"></i> Producto</div>
        <div><i class="fas fa-tag"></i> Precio</div>
        <div><i class="fas fa-tags"></i> Total</div>
    </div>
    {#each concepts as concept}
    <!-- https://svelte.dev/repl/003aeed602754d79a01a066452fb5bd2?version=3.20.1 -->
    <div class="concept" in:fly={{  y:-25, duration: 500, delay: 0 }} out:fade> 
        <div>{concept.amount}</div>
        <div>{concept.product}</div>
        <div>{concept.price} <span>{badge}</span></div>
        <div>{concept.price_total} <span>{badge}</span></div>
        <button on:click={() => remove(concept)} class="mini-btn"><i class="far fa-trash-alt"></i></button>
    </div>
    {/each}
    <form class="concept concept-form" on:submit|preventDefault={addconcept}>
        <Input type="number" id="amount" bind:value={amount} class="bold c-company format"/>
        <Input type="text" id="product" bind:value={product} class="bold c-company format"/>
        <Input type="number" step="any" id="price" bind:value={price} class="bold text-right c-company format"/>
        <div>{price_total.toFixed(2)} <span>{badge}</span></div>
        <button on:submit|preventDefault={addconcept} class="mini-btn"><i class="far fa-save"></i></button>
    </form>
</div>

<style lang="postcss">
    .concepts{
        margin: var(--margin);

        & .concept{
            align-items: center;
            border-bottom: var(--border);
            display: grid;
            grid-template-columns: 65px 1fr 100px 100px;
            position: relative;

            & div{
                border-left: var(--border);
                padding: 10px;
            }

            & div:nth-child(3),
            div:nth-child(4){
                text-align: right;
            }

            & div:nth-child(4){
                border-right: var(--border);
            }

            button{
                position: absolute;
                right: 0;
                margin-right: -35px;
            }
        }

        & .concept-header{
            background: var(--c-company);
            border-radius: 3px;
            color: var(--c-company2);
            margin-bottom: 0;
        }

        & .concept-form{
            border: 0;
            grid-gap: 1px;
        }
    }

    @media print {
        .concepts .concept-form{ display: none; }
        .concepts .concept-header{
            color: var(--c-company2) !important;
            -webkit-print-color-adjust: exact !important;
        }
        .concepts .concept button{
            display: none;
        }
    }

</style>