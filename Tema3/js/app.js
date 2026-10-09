/*
  Tarea 3 · DWEC · [Tu nombre y apellidos]
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Ejemplo: una variable y su typeof en la consola
  const edad = 20;   // number
  console.log("edad =", edad, "→", typeof edad);

  const nombre = 'Pepito'; //String
  console.log("nombre =", nombre, "→", typeof nombre);

  const Booleano = true; //Booleano
  console.log("Booleano =", Booleano, "→", typeof Booleano);

  const Nulo = null; //null
  console.log("Nulo =", Nulo, "→", typeof Nulo);
  
  let variable; //undefined
  console.log("variable =", variable, "→", typeof variable);

  const numeroGrande = 10n; //bigint
  console.log("numeroGrande =", numeroGrande, "→", typeof numeroGrande);

  variable = 15;
  console.log("variable tras inicializar =", variable, "→", typeof variable);
}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  // Ejemplo: una conversión, tu predicción y el resultado con su tipo
  const a = String(123);   // espero string
  console.log("String(123) →", a, typeof a);

  const b = Number("12abc"); //espero number (12)
  console.log("Number(\"12abc\") →" , b, typeof b );

  const c = Number(""); //espero object (null)
  console.log("Number(\"\") →", c, typeof c);

  const d = Number(true); //espero number (1)
  console.log("Number(true) →", d, typeof d);

  const e = Boolean(0); //espero boolean(false)
  console.log("Boolean(0) →", e, typeof e);

  const f = Boolean("Texto Cualquiera"); //espero boolean(true)
  console.log("Boolean(\"Texto Cualquiera\") →", f, typeof f);

  const g = Boolean(""); //espero boolean(false)
  console.log("Boolean(\"\") →", g, typeof g);

  // TODO: el resto de conversiones obligatorias, cada una con su «espero …»:
  //       Number("123"), Number("12abc"), Number(""), Number(true),
  //       Boolean(0), Boolean("texto") y Boolean("").
  // TODO: muestra en la consola el resultado y el typeof de cada una.
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero NaN (La resta es una operacion que no existe para string)
  console.log("5 - \"2\" →", 5 - "2"); //espero 3 (Espero que el primer valor determine a que tipo de dato se debe castear el siguiente)
  console.log("true && 0 →", true && 0); //espero false
  console.log("true && \"true\" →", true && "true"); //espero true (Quiero ver si se puede castear el string asi de flexiblemente a boolean)
  console.log("\"5\" + 6 + 2 →", "5" + 6 + 2 ); //espero string (supongo que la combinacion de casteos minimos no predomina sobre el orden de productos)
  console.log("5 + 6 + \"7\" →", 5 + 6 + "7"), // espero 18 (Lo pongo por si el orden no tiene preferencia, si string tiene prioridad sin mas, se haria la suma numerica primero y luego concatenacion, dando 117)

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero true
  console.log('5 === "5" →', 5 === "5");   // espero false

  console.log('0 == false →', 0 == false);     // espero true
  console.log('0 === false →', 0 === false);   // espero false

  console.log('null == undefined →', null == undefined);     // espero false (quiero creer que darle valor null a algo y no darle valor son cosas distintas)
  console.log('null === undefined →', null === undefined);   // espero false (no creo que ambos sean object)

}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "Rafa";
  const ciclo = "DAW";
  const curso = "2º";
  const aficion = "diseñar juegos";
  
  let horasEstudio = 2;
  horasEstudio += 6;

  const ficha = `Soy ${nombre}. Estudio en el ${curso} año del ciclo de ${ciclo}. Además, me gusta ${aficion}. Esta semana llevo ${horasEstudio} horas de estudio.`;
  alert(ficha);
  console.log(ficha);

  const fichaConMas = "Soy " + nombre + ". Estudio en el " + curso + " año del ciclo de " + ciclo + ". Además, me gusta " + aficion + ". Esta semana llevo " + horasEstudio + " horas de estudio.";
  console.log(fichaConMas);

  console.log(ficha === fichaConMas);
}
