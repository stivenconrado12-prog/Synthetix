/* ===========================================================
   MISIÓN DOM — archivo de trabajo
   Aprendiz: Stiven Daniel Conrado Romero
   Ficha 3230489 · ADSO

   Este archivo empieza vacío. Cada misión de la parte 3 se
   escribe en el bloque que le corresponde, nunca donde quepa.
   =========================================================== */

/* ---------- 1. ELEMENTOS ---------- */
/* Las constantes que guardan las partes de la página.
   Una por cada elemento que vaya a manipular.            */

// Misión 1, 2 y 3: Selección de elementos iniciales
const spanAnio = document.getElementById("anio");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const enlaceM = document.getElementById("enlaceExterno");

// Misión 4: Elementos para el conteo
const listaProyectos = document.getElementById("lista");
const pContador = document.getElementById("contador");


/* ---------- 2. ESTADO ---------- */
/* Los datos que la página recuerda entre un clic y otro.  */


/* ---------- 3. FUNCIONES ---------- */
/* Lo que la página sabe hacer.                            */

// MISIÓN 4 — Contar lo que hay en la página
function actualizarContador() {
  // 1. Buscamos los li ÚNICAMENTE dentro de #lista
  const elementosLi = listaProyectos.querySelectorAll("li");
  const cantidad = elementosLi.length;

  let mensaje = "";

  // 2. Evaluamos los 3 escenarios
  if (cantidad === 0) {
    mensaje = "No hay proyectos registrados";
  } else if (cantidad === 1) {
    mensaje = "1 proyecto registrado";
  } else {
    mensaje = `${cantidad} proyectos registrados`;
  }

  // 3. Escribimos el mensaje en el <p id="contador">
  pContador.textContent = mensaje;
}


/* ---------- 4. EVENTOS ---------- */
/* Cuándo lo hace.                                         */


/* ---------- 5. ARRANQUE ---------- */
/* Lo que pasa apenas carga la página.                     */

// Misión 1 — Año dinámico
const anioActual = new Date().getFullYear();
spanAnio.textContent = anioActual;

// Misión 2 — Textos desde JS
titulo.textContent = "Synthetix";
subtitulo.textContent = `¡Únete a la comunidad de Synthetix y vive la experiencia musical al máximo! — ${anioActual}`;

// Misión 3 — Enlace seguro y dinámico
enlaceM.setAttribute("href", "https://open.spotify.com/intl-es");
enlaceM.setAttribute("target", "_blank");
enlaceM.setAttribute("rel", "noopener");
enlaceM.setAttribute("title", "Ir a Synthetix en Spotify");
enlaceM.textContent = "Escuchar en Spotify";

// Misión 4 — Ejecutar el contador inicial
actualizarContador();