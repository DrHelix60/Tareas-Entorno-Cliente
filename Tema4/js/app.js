console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;

// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// Modelo base: leo los dos números, valido y opero
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

// Mismo patrón que sumar, cambio el operador
function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} × ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

// Aquí añado un else if para controlar la división entre 0,
// ya que JS no lanza error, devuelve Infinity
function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn("Dividir: división entre 0");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

// El operador ** eleva el primero al segundo
function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

// El módulo también falla con 0 (devuelve NaN), así que lo controlo igual
function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede calcular el módulo entre 0.", "danger");
    console.warn("Módulo: módulo entre 0");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}

// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

// Comparo con > y <, si no se cumple ninguno son iguales
function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de comparar.", "danger");
    console.warn("Cual es mayor: falta algún número");
  } else if (n1 > n2) {
    mostrar(`El número ${n1} es mayor que ${n2}.`);
    console.log(`Cual es mayor: ${n1} > ${n2}`);
  } else if (n1 < n2) {
    mostrar(`El número ${n2} es mayor que ${n1}.`);
    console.log(`Cual es mayor: ${n2} > ${n1}`);
  } else {
    mostrar(`Los números ${n1} y ${n2} son iguales.`);
    console.log(`Cual es mayor: ${n1} === ${n2}`);
  }
}

// Uso % 1 !== 0 para detectar decimales, y ternario para par/impar
function parOImpar() {
  const n1 = leerNumero("numero1");

  if (Number.isNaN(n1)) {
    mostrar("Escribe el número 1 antes de comprobar.", "danger");
    console.warn("Par o impar: falta el número 1");
  } else if (n1 % 1 !== 0) {
    mostrar("El número tiene decimales, no es ni par ni impar.", "warning");
    console.warn(`Par o impar: ${n1} tiene decimales`);
  } else {
    const tipo = n1 % 2 === 0 ? "par" : "impar";
    mostrar(`El número ${n1} es ${tipo}.`);
    console.log(`Par o impar: ${n1} es ${tipo}`);
  }
}

// ============================================================
// Ejercicio 3 · Bucles con texto
// ============================================================

// Valido con || para cubrir vacío, decimales y exceso en una sola condición.
// Uso return para salir sin ejecutar el bucle si hay error.
function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`El número debe ser entero y no pasar de ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn(`Bucle for: número inválido (${veces})`);
    return;
  }

  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    contador++;
  }

  const total = contador === 1 ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${total}`);
  console.log(`Bucle for: ${contador} repeticiones`);
}

// Mismo funcionamiento que for, pero declaro e incremento i manualmente.
// Útil cuando no sé de antemano cuántas vueltas daré.
function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`El número debe ser entero y no pasar de ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn(`Bucle while: número inválido (${veces})`);
    return;
  }

  let contador = 0;
  let i = 1;
  while (i <= veces) {
    anadirLinea(`while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  }

  const total = contador === 1 ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${total}`);
  console.log(`Bucle while: ${contador} repeticiones`);
}

// La condición va al final, así el bloque se ejecuta al menos una vez.
// Con 0 o negativo, for y while no entran, pero este sí.
function bucleDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`El número debe ser entero y no pasar de ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn(`Bucle do...while: número inválido (${veces})`);
    return;
  }

  let contador = 0;
  let i = 1;
  do {
    anadirLinea(`do...while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  } while (i <= veces);

  const total = contador === 1 ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${total}`);
  console.log(`Bucle do...while: ${contador} repeticiones`);
}

// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

// Igual que bucleFor, pero uso anadirBadge en vez de anadirLinea.
// El color alterna con ternario: par verde, impar azul.
function badgesFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`El número debe ser entero y no pasar de ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn(`Badges for: número inválido (${veces})`);
    return;
  }

  let contador = 0;
  for (let i = 1; i <= veces; i++) {
    const color = i % 2 === 0 ? "success" : "primary";
    anadirBadge(i, color);
    contador++;
  }

  const total = contador === 1 ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${total}`);
  console.log(`Badges for: ${contador} repeticiones`);
}

function badgesWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`El número debe ser entero y no pasar de ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn(`Badges while: número inválido (${veces})`);
    return;
  }

  let contador = 0;
  let i = 1;
  while (i <= veces) {
    const color = i % 2 === 0 ? "success" : "primary";
    anadirBadge(i, color);
    contador++;
    i++;
  }

  const total = contador === 1 ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${total}`);
  console.log(`Badges while: ${contador} repeticiones`);
}

function badgesDoWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || veces % 1 !== 0 || veces > MAXIMO_REPETICIONES) {
    mostrar(`El número debe ser entero y no pasar de ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn(`Badges do...while: número inválido (${veces})`);
    return;
  }

  let contador = 0;
  let i = 1;
  do {
    const color = i % 2 === 0 ? "success" : "primary";
    anadirBadge(i, color);
    contador++;
    i++;
  } while (i <= veces);

  const total = contador === 1 ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${total}`);
  console.log(`Badges do...while: ${contador} repeticiones`);
}