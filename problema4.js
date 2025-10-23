const prompt = require("prompt-sync")();

// Datos de entrada
const precioLibro = 568;
const cantidadLibros = 4;
const descuentoLibros = 0.20; // 20%

const precioDisco = 45;
const cantidadDiscos = 3;
const descuentoDiscos = 0.15; // 15%

const precioTocadiscos = 678;
// No tiene descuento

const descuentoProntoPago = 0.02; // 2%   `

// Cálculo del total de libros
const subtotalLibros = precioLibro * cantidadLibros;
const descuentoTotalLibros = subtotalLibros * descuentoLibros;
const totalLibros = subtotalLibros - descuentoTotalLibros;

// Cálculo del subtotal de discos
const subtotalDiscos = precioDisco * cantidadDiscos;
const descuentoTotalDiscos = subtotalDiscos * descuentoDiscos;
const totalDiscos = subtotalDiscos - descuentoTotalDiscos;

// Tocadiscos (sin descuento)
const totalTocadiscos = precioTocadiscos;

// Subtotal antes del descuento por pronto pago
const subtotalCompra = totalLibros + totalDiscos + totalTocadiscos;

// Aplicar descuento por pronto pago (2%)
const descuentoPronto = subtotalCompra * descuentoProntoPago;
const totalFinal = subtotalCompra - descuentoPronto;

// Mostrar resultados
console.log("\n--- DETALLE DE LA COMPRA ---");
console.log( `Libros (4 x $${precioLibro} c/u): $${subtotalLibros} `);
console.log( `Descuento libros (20%): -$${descuentoTotalLibros.toFixed(2)} `);
console.log( `Total libros: $${totalLibros.toFixed(2)}\n `);

console.log( `Discos (3 x $${precioDisco} c/u): $${subtotalDiscos} `);
console.log( `Descuento discos (15%): -$${descuentoTotalDiscos.toFixed(2)} `);
console.log( `Total discos: $${totalDiscos.toFixed(2)}\n `);

console.log( `Tocadiscos: $${totalTocadiscos}\n `);

console.log( `Subtotal: $${subtotalCompra.toFixed(2)} `);
console.log( `Descuento pronto pago (2%): -$${descuentoPronto.toFixed(2)} `);
console.log( `TOTAL FINAL: $${totalFinal.toFixed(2)} `);