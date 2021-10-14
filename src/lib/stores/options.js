import { writable } from 'svelte/store';

// Tipo de divisa
export const badge = writable([
	{ value: "€", name:"Euro" },
    { value: "$", name:"Dolar" }
]);
export const selectedBadge = writable();

// Tipo de impuesto
export const tax = writable([
	{ value: "IVA", name:"IVA" },
    { value: "IGIC", name:"IGIC" }
]);
export const selectedTax = writable();

// Estado de factura o presupuesto
export const invoiceStatus = writable([
	{ value: "budget", name:"Presupuesto" },
    { value: "pay", name:"Paga" },
    { value: "unpaid", name:"Impaga" }
]);
export const selectedInvoiceStatus = writable();

// Modo edición
export const edit = writable(false);

// Suma del total de todos los conceptos para el cálculo final
export const subtotal = writable(5);