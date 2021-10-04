<script>
    export let
        img,
        company,
        cif_nif,
        street,
        address,
        telephone,
        email,
        Web
    ;
</script>

<div>
    <img src={img} alt={company}>
    <ul>
        <li>{company}</li>
        <li>
            <i class="fas fa-fingerprint"></i> 
            <span>{cif_nif}</span>
        </li>
        <li>
            <i class="fas fa-map-marker-alt"></i> 
            <span>{street}</span>
        </li>
        <li>
            <i class="fas fa-map-marked-alt"></i> 
            <span>{address}</span>
        </li>
        <li>
            <i class="fas fa-phone-volume"></i> 
            <span>{telephone}</span>
        </li>
        <li>
            <i class="far fa-envelope"></i> 
            <span>{email}</span>
        </li>
        <li>
            <i class="fas fa-globe-africa"></i> 
            <span>{Web}</span>
        </li>
    </ul>
</div>

<style lang="postcss">
    div{
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

</style>