<script>
    export let
        amount,
        product,
        price,
        price_total
    ;
</script>

<div class="concept"> 
    <div>{amount}</div>
    <div>{product}</div>
    <div>{price}</div>
    <div>{price_total}</div>
</div>

<style>
    .concept{
        align-items: center;
        border-bottom: var(--border);
        display: grid;
        grid-template-columns: 100px 1fr 100px 100px;
    }

    .concept div{
        border-left: var(--border);
    }

    .concept div:nth-child(3),
    .concept div:nth-child(4){
        text-align: right;
    }

    .concept div:nth-child(4){
        border-right: var(--border);
    }

    .concept div{
        padding: 10px;
    }
</style>