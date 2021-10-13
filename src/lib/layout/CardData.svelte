<script>
    import { Input } from"$lib/html/html.js";
    export let
        img,
        company,
        cif_nif,
        street,
        address,
        telephone,
        email,
        web,
        edit= false
    ;
</script>
<div class="billing" class:edit>
    <div>
        {#if edit} 
            <Input type="url" id="urlCompany" bind:value={img} class="bold"/>
        {:else}
            <img src={img} alt={company}>
        {/if}
    </div>
    <ul>
        <li>
            <i class="far fa-id-card"></i>
            {#if edit} 
                <Input type="text" id="company" bind:value={company} class="bold"/>
            {:else}
                {company}
            {/if}
        </li>
        <li>
            <i class="fas fa-fingerprint"></i> 
            {#if edit} 
                <Input type="text" id="cif-nif" bind:value={cif_nif} class="bold"/>
            {:else}
                <span>{cif_nif}</span>
            {/if}
        </li>
        <li>
            <i class="fas fa-map-marker-alt"></i> 
            {#if edit} 
                <Input type="text" id="street" bind:value={street} class="bold"/>
            {:else}
                <span>{street}</span>
            {/if}
        </li>
        <li>
            <i class="fas fa-map-marked-alt"></i> 
            {#if edit} 
                <Input type="text" id="address" bind:value={address} class="bold"/>
            {:else}
                <span>{address}</span>
            {/if}
        </li>
        <li>
            <i class="fas fa-phone-volume"></i> 
            {#if edit} 
                <Input type="text" id="street" bind:value={telephone} class="bold"/>
            {:else}
                <span>{telephone}</span>
            {/if}
        </li>
        <li>
            <i class="far fa-envelope"></i> 
            {#if edit} 
                <Input type="email" id="email" bind:value={email} class="bold"/>
            {:else}
                <span>{email}</span>
            {/if}
        </li>
        <li>
            <i class="fas fa-globe-africa"></i> 
            {#if edit} 
                <Input type="url" id="web" bind:value={web} class="bold"/>
            {:else}
                <span>{web}</span>
            {/if}
        </li>
    </ul>
</div>

<style lang="postcss">
    .billing{
        border: var(--border);
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;

        & img{
            max-width: 150px;
            width: 100%;
        }

        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            font-size: 1rem;

            & li{
                padding: 5px;
                display: grid;
                align-items: center;
                grid-template-columns: 25px 1fr;
            }

            & li:nth-child(1){
                font-size: 1.2rem;
                font-weight: bold;
            }
        }
    }

    .edit{
        grid-template-columns: 1fr;

        & > div{
            padding: 5px;
        }
    }

</style>