# Facturapp

Facturapp es una aplicación web desarrollado usando el Framework SvelteKit. Esta aplicación permite crear facturas y automatiza el cálculo dependiendo de los conceptos, descuento e impuestos que introduzcas en la aplicación

- SvelteKit está en versión beta. No se recomienda el uso de Facturapp en producción

## Opciones y componentes:

El componente CardData permite Añadir datos de la empresa facturadora y la empresa a la que se factura:

- Nombre de empresa.
- NIF o DNI.
- Calle y número.
- Domicilio y CP.
- Teléfono.
- Email.
- URL Web.

El componente Concept permite añadir los productos que se van a facturar:

- Cantidad del producto.
- Descripción del producto.
- Precio por unidad.
- Precio de unidad por la cantidad. Este paso se realiza de forma automática.

El componente Billings permite añadir datos de factura y el cálculo final:

- Nº de factura.
- Fecha de facturación.
- Fecha de finalización.
- Estado de factura, paga, impaga o presupuesto.
- Subtotal. Se hace de forma automatizada sumando el total de todos los conceptos.
- Añadir descuento. La aplicación hará el cálculo automático calculando el % en el subtotal.
- Añadir impuesto. La aplicación hará el cálculo automático calculando el % en el subtotal más el descuento.
- Total. Este cálculo se realiza de forma automática.

El componente Options permite activar la edición y otras opciones como:

- Tipo de divisa, euro o dolar.
- Estado de factura, paga, impaga o presupuesto
- Opción para activar el formato de edición.
- Botón imprimir o guardar en pdf

<img src="/static/Ejemplo-editor-facturapp.png" alt="Facturapp"/>

## Otros datos de interes:

Facturapp contiene css para formatear el resultado final de la factura eliminando los componentes u opciones de edición. También evita que el pdf o factura a imprimir muestren la url y fecha en la parte inferior o superior del documento.

<img src="/static/Ejemplo-factura-final.png" alt="Facturapp"/>

## Librerias y dependencias adicionales a SvelteKit:

- Font Awesome CDN V5.15.3
- Google Fonts CDN

## Desarrollo

Una vez instaladas las dependencias con `npm install` (o `pnpm install` o `yarn`), inicia un servidor de desarrollo:

```bash
npm run dev
# o inicia el servidor y abre la aplicación en una nueva pestaña del navegador
npm run dev -- --open
```

## Producción

Antes de crear una versión de producción de tu aplicación, instala un [adaptador] (https://kit.svelte.dev/docs#adapters) para tu entorno de destino. Luego:

```bash
npm run build
```

> Puedes obtener una vista previa de la aplicación creada con `npm run preview`, independientemente de si instaló un adaptador. Esto _no_ debes usarlo para entregar tu aplicación en producción.

## Licencia

[MIT](LICENSE.md)