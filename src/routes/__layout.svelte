<script>
    import { edit } from"$lib/stores/options.js";

</script>

<section class="theme" class:edit="{$edit === true}">
    <slot></slot>
</section>

<style>
    .theme{
        transition: 1s;
    }
    .edit{
        background: var(--c-company);
    }
</style>