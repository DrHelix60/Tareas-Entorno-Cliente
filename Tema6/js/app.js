/*
  Tarea 6 · DWEC · Rafael Santiago De La Torre jiménez
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Rafael",
  apellidos: "De La Torre Jiménez",
  edad: 23,
  curso: "2º DAW",
  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  }
};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const ul = document.createElement("ul");
  ul.classList.add("list-group");

  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    ul.append(li);
  });

  salida.append(ul);

  const p = document.createElement("p");
  p.textContent = estudiante.presentarse();
  salida.append(p);

  console.log("Ejercicio 1:", estudiante);
}

function cumplirAnios() {
  estudiante.edad++;
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores para quitar.");
    return;
  }
  const ultimo = colores.pop();
  mostrarColores();
  console.log("Ejercicio 2: pop →", ultimo);
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hay colores para quitar.");
    return;
  }
  const primero = colores.shift();
  mostrarColores();
  console.log("Ejercicio 2: shift →", primero);
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos.";
}

function ordenarPorPrecio() {
  const copia = [...productos];
  copia.sort(function (a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Ordenados de más barato a más caro.";
  console.log("Ejercicio 3: sort copia");
}

function filtrarCaros() {
  const caros = productos.filter(function (p) {
    return p.precio > 50;
  });
  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = caros.length + " productos de más de 50 €.";
}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();
  const mensaje = document.querySelector("#mensaje3");

  if (texto === "") {
    mensaje.textContent = "Escribe algo para buscar.";
    return;
  }

  const encontrado = productos.find(function (p) {
    return p.nombre.toLowerCase().includes(texto);
  });

  if (encontrado === undefined) {
    mensaje.textContent = "No se ha encontrado ningún producto.";
    document.querySelector("#tablaProductos").textContent = "";
  } else {
    mensaje.textContent = "Producto encontrado: " + encontrado.nombre;
    pintarProductos([encontrado]);
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Rafa",
  notas: [],
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },
  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (acc, n) {
      return acc + n;
    }, 0);
    return suma / this.notas.length;
  }
};

function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";

  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "me-1");
    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }
    badge.textContent = nota;
    contenedor.append(badge);
  });

  const mediaEl = document.querySelector("#media");
  if (alumno.notas.length === 0) {
    mediaEl.textContent = "Todavía no hay notas.";
  } else {
    mediaEl.textContent = "Media de " + alumno.notas.length + " notas: " + alumno.media().toFixed(2);
  }
}

function anadirNota() {
  const input = document.querySelector("#nota");
  const error = document.querySelector("#error4");

  if (input.value.trim() === "") {
    error.textContent = "Escribe una nota.";
    error.classList.remove("d-none");
    return;
  }

  const valor = Number(input.value);

  if (!alumno.anadirNota(valor)) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  input.value = "";
  mostrarNotas();
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (n) {
    return n * 2;
  });
  const salida = document.querySelector("#salida5");
  salida.textContent = "Dobles: " + comoTexto(dobles) + "\nOriginal: " + comoTexto(numeros);
  console.log("Ejercicio 5 map:", dobles);
}

function verPares() {
  const pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });
  const salida = document.querySelector("#salida5");
  salida.textContent = "Pares: " + comoTexto(pares) + "\nOriginal: " + comoTexto(numeros);
  console.log("Ejercicio 5 filter:", pares);
}

function verSuma() {
  const suma = numeros.reduce(function (acc, n) {
    return acc + n;
  }, 0);
  const salida = document.querySelector("#salida5");
  salida.textContent = "Suma: " + suma + "\nOriginal: " + comoTexto(numeros);
  console.log("Ejercicio 5 reduce:", suma);
}

function verCadena() {
  const pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });
  const dobles = pares.map(function (n) {
    return n * 2;
  });
  const suma = dobles.reduce(function (acc, n) {
    return acc + n;
  }, 0);

  const salida = document.querySelector("#salida5");
  salida.textContent = "Pares: " + comoTexto(pares) + "\nDobles de pares: " + comoTexto(dobles) + "\nSuma: " + suma;
  console.log("Ejercicio 5 cadena:", suma);
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  // TODO: vacía #ciudades y pon un badge por ciudad con su posición: «0 · Granada», «1 · Sevilla»...
  //       Pista: forEach le pasa a tu función dos datos: function (ciudad, posicion) { ... }.
}

function verSlice() {
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();