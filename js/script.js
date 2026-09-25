/* ===========================================================
   MISIÓN DOM — archivo de trabajo
   Aprendiz: Stiven Daniel Conrado Romero
   Ficha 3230489 · ADSO

   Este archivo empieza vacío. Cada misión se escribe en el
   bloque que le corresponde, nunca donde quepa.
   =========================================================== */

/* ---------- 1. ELEMENTOS ---------- */
/* Las constantes que guardan las partes de la página.
   Una por cada elemento que vaya a manipular.            */


const spanAnio = document.getElementById("anio");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const enlaceM = document.getElementById("enlaceExterno");

const listaProyectos = document.getElementById("lista");
const pContador = document.getElementById("contador");

const caja = document.getElementById("caja");
const btnDestacar = document.getElementById("btnDestacar");
const btnOcultar = document.getElementById("btnOcultar");
const btnColor = document.getElementById("btnColor");


const campoProyecto = document.getElementById("campoProyecto");
const btnAgregar = document.getElementById("btnAgregar");
const btnQuitar = document.getElementById("btnQuitar");
const btnVaciar = document.getElementById("btnVaciar");


const filasTabla = document.querySelectorAll("#tabla tbody tr");

const formulario = document.getElementById("formulario");
const campoNombre = document.getElementById("campoNombre");
const campoMensaje = document.getElementById("campoMensaje");
const contadorLetras = document.getElementById("contadorLetras");
const avisoForm = document.getElementById("avisoForm");


const btnTema = document.getElementById("btnTema");


/* ---------- 2. ESTADO ---------- */
/* Los datos que la página recuerda entre un clic y otro.  */

const listaColores = ["#00ff59", "#8a2be2", "#ff007f", "#00d4ff"];
let posicionColor = 0;


/* ---------- 3. FUNCIONES ---------- */
/* Lo que la página sabe hacer.                            */


function actualizarContador() {
  const elementosLi = listaProyectos.querySelectorAll("li");
  const cantidad = elementosLi.length;

  let mensaje = "";

  if (cantidad === 0) {
    mensaje = "Tu playlist está vacía";
  } else if (cantidad === 1) {
    mensaje = "1 canción en tu playlist";
  } else {
    mensaje = `${cantidad} canciones en tu playlist`;
  }

  pContador.textContent = mensaje;
}

function pintarFilasTabla() {
  const filas = document.querySelectorAll("#tabla tbody tr");

  filas.forEach((fila, indice) => {
    if (indice % 2 !== 0) {
      fila.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    } else {
      fila.style.backgroundColor = "";
    }
  });
}

function agregarProyecto() {
  const texto = campoProyecto.value.trim();


  if (texto === "") return;

  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = `🎵 ${texto}`;

  listaProyectos.append(nuevoLi);
  campoProyecto.value = "";
  campoProyecto.focus();

  actualizarContador();
}

function quitarUltimoProyecto() {
  const ultimoLi = listaProyectos.lastElementChild;

  if (ultimoLi !== null) {
    ultimoLi.remove();
    actualizarContador();
  }
}

function vaciarLista() {
  listaProyectos.innerHTML = "";
  actualizarContador();
}

function filtrarProyectos() {
  const busqueda = campoProyecto.value.trim().toLowerCase();
  const elementosLi = listaProyectos.querySelectorAll("li");

  elementosLi.forEach((li) => {
    const coincide = li.textContent.toLowerCase().includes(busqueda);
    // Si NO coincide y hay búsqueda activa, lo oculta
    if (busqueda !== "" && !coincide) {
      li.style.display = "none";
    } else {
      li.style.display = "";
    }
  });
}


/* ---------- 4. EVENTOS ---------- */
/* Cuándo lo hace.                                         */

btnDestacar.addEventListener("click", () => {
  caja.classList.toggle("destacada");
});


btnOcultar.addEventListener("click", () => {
  caja.classList.toggle("oculto");

  if (caja.classList.contains("oculto")) {
    btnOcultar.textContent = "Mostrar reproductor";
  } else {
    btnOcultar.textContent = "Ocultar reproductor";
  }
});

btnColor.addEventListener("click", () => {
  caja.style.backgroundColor = listaColores[posicionColor];
  posicionColor++;

  if (posicionColor >= listaColores.length) {
    posicionColor = 0;
  }
});

btnAgregar.addEventListener("click", agregarProyecto);
btnQuitar.addEventListener("click", quitarUltimoProyecto);
btnVaciar.addEventListener("click", vaciarLista);


filasTabla.forEach((fila) => {
  fila.addEventListener("click", () => {
  
    filasTabla.forEach((f) => f.classList.remove("fila-marcada"));
  
    fila.classList.add("fila-marcada");
  });
});


campoMensaje.addEventListener("input", () => {
  const cantidad = campoMensaje.value.length;
  contadorLetras.textContent = `${cantidad} caracteres`;
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); 

  const nombre = campoNombre.value.trim();
  const mensaje = campoMensaje.value.trim();

  
  avisoForm.classList.remove("error", "ok");


  if (nombre === "") {
    avisoForm.textContent = "Por favor, ingresa tu nombre de usuario o artista.";
    avisoForm.classList.add("error");
    campoNombre.focus();
    return;
  }

  if (mensaje.length < 10) {
    avisoForm.textContent = "La reseña o recomendación debe tener al menos 10 caracteres.";
    avisoForm.classList.add("error");
    campoMensaje.focus();
    return;
  }

  avisoForm.textContent = `¡Gracias por tu recomendación, ${nombre}! Ha sido enviada a la comunidad Synthetix.`;
  avisoForm.classList.add("ok");


  campoNombre.value = "";
  campoMensaje.value = "";
  contadorLetras.textContent = "0 caracteres";
})
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("noche");

  const esNoche = document.body.classList.contains("noche");
  btnTema.textContent = esNoche ? "Modo claro" : "Modo oscuro";
});


/* ---------- 5. ARRANQUE ---------- */
/* Lo que pasa apenas carga la página.                     */

const anioActual = new Date().getFullYear();
spanAnio.textContent = anioActual;

titulo.textContent = "Synthetix";
subtitulo.textContent = `Disfruta de tus canciones favoritas y diviértete creando tus playlists -- ${anioActual}`;


enlaceM.setAttribute("href", "https://github.com/stivenconrado12-prog/Synthetix.git");
enlaceM.setAttribute("target", "_blank");
enlaceM.setAttribute("rel", "noopener");
enlaceM.setAttribute("title", " Ver GitHub Synthetix");
enlaceM.textContent = "Explorar en GitHub";


actualizarContador();


pintarFilasTabla();