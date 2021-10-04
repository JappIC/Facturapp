<!--
@component
Componente Iframe:
Un componente para los iframes que soporta video o código usando una clase (video o code).
-->

<script>
    export let
        title = "Título del iframe",
        src,
        frameborder = 0,
        scrolling = "yes",
        sandbox ="allow-scripts allow-same-origin"
    ;
</script>

<div {...$$restProps}>
    <iframe
        title={title}
        src={src}
        frameborder={frameborder}
        scrolling={scrolling}
        sandbox={sandbox}
    >
    </iframe>
</div>

<style>
    div { overflow: hidden; }
    iframe {border: 0; }

    div.code iframe{
        width: 100%;
        max-height: 450px;
    }
    
    div.video{
        position: relative;
        padding-top: 56.25%;
    }

    div.video iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
    
</style>