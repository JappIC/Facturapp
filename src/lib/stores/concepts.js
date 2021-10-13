import { writable } from 'svelte/store';

export const concepts = writable([
    { amount: 1, product: "Milk", price: 30, price_total: 30, done: false },
    { amount: 2, product: "Molk", price: 30, price_total: 60, done: false },
    { amount: 3, product: "Malk", price: 30, price_total: 90, done: false }
]);
