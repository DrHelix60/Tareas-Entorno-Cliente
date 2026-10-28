/*
  Tarea 5 · DWEC · Rafael Santiago De La Torre Jimenez
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  // Seleccionamos el segundo párrafo por su clase y le añadimos un fondo amarillo suave
  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  // Seleccionamos todos los párrafos y accedemos al tercero por su índice (posición 2) para ponerlo en rojo
  const parrafos = document.querySelectorAll("#contenido p");
  parrafos[2].classList.add("text-danger");

  console.log("Se han aplicado los cambios");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  // Creamos un nuevo elemento <p> y calculamos su número basándonos en los hijos actuales del contenedor
  const contenido = document.querySelector("#contenido");
  const nuevoParrafo = document.createElement("p");
  const numero = contenido.children.length + 1;
  nuevoParrafo.textContent = `Párrafo nuevo ${numero}`;
  
  // Lo añadimos al final del contenedor usando append
  contenido.append(nuevoParrafo);
  
  // Con esto nos aseguramos de esconder el mensaje de error si anteriormente borramos todos los parrafos. No era necesario pero lo he hecho por gusto
  document.querySelector("#aviso2").classList.add("d-none");

  console.log(`Añadido párrafo número ${numero}`);
}

function eliminarUltimo() {
  // Buscamos el último hijo del contenedor. Si no existe (null), mostramos el aviso; si no, lo eliminamos
  const contenido = document.querySelector("#contenido");
  const ultimo = contenido.lastElementChild;

  if (ultimo === null) {
    document.querySelector("#aviso2").classList.remove("d-none");
  } else {
    ultimo.remove();
    document.querySelector("#aviso2").classList.add("d-none");
  }
  
  console.log("Último párrafo eliminado o aviso mostrado");
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  // Recorremos todos los párrafos actuales para asignarles los eventos de ratón
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // Al entrar el ratón, añadimos la clase gris
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // Al salir el ratón, quitamos la clase para volver al estado original
    parrafo.addEventListener("mouseleave", 
      function(){
        parrafo.classList.remove("bg-body-secondary");
      }
    );
  }

  console.log(`Resaltado activado en ${parrafos.length} párrafos`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  // Obtenemos el valor del input limpiando los espacios extra. Si está vacío mostramos error, si no, actualizamos el texto plano
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");
  const primero = document.querySelector("#contenido p");

  if (texto === "") {
    error.classList.remove("d-none");
  } else {
    primero.textContent = texto;
    error.classList.add("d-none");
  }
}

function cambiarConHtml() {
  // Hacemos lo mismo que arriba pero usando innerHTML, lo que permite que el navegador interprete etiquetas como <b> o <i>
  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");
  const primero = document.querySelector("#contenido p");

  if (texto === "") {
    error.classList.remove("d-none");
  } else {
    primero.innerHTML = texto;
    error.classList.add("d-none");
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  // Leemos la tarea. Si está vacía avisamos; si no, creamos un <li> con un checkbox y el texto, y lo añadimos a la lista
  const texto = document.querySelector("#tareaInput").value.trim();
  const error = document.querySelector("#error5");
  const lista = document.querySelector("#listaTareas");
  const contador = document.querySelector("#totalTareas");

  if (texto === "") {
    error.textContent = "El campo está vacío.";
    error.classList.remove("d-none");
  } else {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input");

    const span = document.createElement("span");
    span.textContent = texto;

    li.append(checkbox, span);
    lista.append(li);

    document.querySelector("#tareaInput").value = "";
    error.classList.add("d-none");
  }

  // Actualizamos el contador con el número total de elementos en la lista
  contador.textContent = lista.children.length;
}

function borrarCompletadas() {
  // Buscamos todos los checkboxes marcados. Si no hay ninguno avisamos; si los hay, borramos su elemento padre (<li>)
  const completadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");
  const contador = document.querySelector("#totalTareas");
  const lista = document.querySelector("#listaTareas");

  if (completadas.length === 0) {
    error.textContent = "No hay tareas completadas.";
    error.classList.remove("d-none");
  } else {
    for (const casilla of completadas) {
      casilla.parentElement.remove();
    }
    error.classList.add("d-none");
  }

  contador.textContent = lista.children.length;
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // Mostramos el tamaño actual de la ventana del navegador
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // Determinamos el punto de corte de Bootstrap comparando el ancho con los valores estándar (xs, sm, md...)
  const datoPunto = document.querySelector("#datoPunto");
  if (ancho < 576) {
    datoPunto.textContent = "xs";
  } else if (ancho < 768) {
    datoPunto.textContent = "sm";
  } else if (ancho < 992) {
    datoPunto.textContent = "md";
  } else if (ancho < 1200) {
    datoPunto.textContent = "lg";
  } else if (ancho < 1400) {
    datoPunto.textContent = "xl";
  } else {
    datoPunto.textContent = "xxl";
  }

  // Rellenamos el resto de datos: tamaño físico de la pantalla, URL actual e idioma del navegador
  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;

  console.log("Datos de la ventana mostrados");
}