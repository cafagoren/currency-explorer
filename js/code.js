// ============================================================
// CURRENCY EXPLORER · STARTER PROJECT
// Archivo principal de trabajo para las misiones de JavaScript
// ============================================================

// 1. REFERENCIAS AL DOM
const cantidad = document.querySelector("#cantidad");
const origen = document.querySelector("#origen");
const destino = document.querySelector("#destino");
const btnConvertir = document.querySelector("#convertir");
const btnIntercambiar = document.querySelector("#intercambiar");
const resultado = document.querySelector("#resultado");
const resultadoTexto = document.querySelector("#resultadoTexto");
const detalleTasa = document.querySelector("#detalleTasa");

// 2. EVENTOS
btnConvertir.addEventListener("click", convertirMoneda);
btnIntercambiar.addEventListener("click", intercambiarMonedas);

// 3. FUNCIÓN PRINCIPAL
async function convertirMoneda() {
  // Misiones guiadas 1-3: ya existe un flujo mínimo funcional EUR -> USD.
  // A partir de la Misión 4 debes convertirlo en una solución dinámica.

const valorTexto = cantidad.value.trim();

  // 1) Comprobar si el campo está vacío o con espacios
  if (valorTexto === "") {
    mostrarError("Ingresa una cantidad para convertir.");
    cantidad.focus();
    return;
  }

  const valor = Number(valorTexto);

  // 2) Comprobar que sea un número real y finito
  if (!Number.isFinite(valor) || isNaN(valor)) {
    mostrarError("El valor ingresado debe ser un número válido.");
    cantidad.focus();
    return;
  }

  // 3) Comprobar que sea estrictamente mayor que cero
  if (valor <= 0) {
    mostrarError("La cantidad debe ser mayor que cero.");
    cantidad.focus();
    return;
  }

// Misión 04: obtener las monedas seleccionadas por el usuario.
const monedaOrigen = origen.value;
const monedaDestino = destino.value;

// MISIÓN 05 (Caso borde): Optimización si ambas monedas son iguales
  if (monedaOrigen === monedaDestino) {
    resultado.classList.remove("error");
    resultadoTexto.textContent = `${valor.toFixed(2)} ${monedaOrigen} = ${valor.toFixed(2)} ${monedaDestino}`;
    detalleTasa.textContent = `1 ${monedaOrigen} = 1.00 ${monedaDestino} · Monedas idénticas`;
    return;
  }

const url = `https://api.frankfurter.dev/v2/rate/${monedaOrigen.toLowerCase()}/${monedaDestino.toLowerCase()}`;

  try {
    // TODO · MISIÓN 08: activar un estado visual de carga antes de consultar.
    const respuesta = await fetch(url);

    // TODO · MISIÓN 09: comprobar response.ok y lanzar un error si corresponde.
    const datos = await respuesta.json();

    const conversion = valor * datos.rate;



    resultado.classList.remove("error");
    resultadoTexto.textContent = `${valor.toFixed(2)} ${monedaOrigen} = ${conversion.toFixed(2)} ${monedaDestino}`;
    detalleTasa.textContent = `1 ${monedaOrigen} = ${datos.rate} ${monedaDestino} · ${datos.date}`;

  } catch (error) {
    // TODO · MISIÓN 09: mejora el mensaje y analiza qué errores pueden llegar aquí.
    mostrarError("No fue posible completar la consulta.");
    console.error(error);
  }
}

function intercambiarMonedas() {
  // TODO · MISIÓN 06:
  // 1) guardar temporalmente el valor de origen
  // 2) intercambiar origen.value y destino.value
  // 3) volver a calcular
  mostrarError("Misión 06 pendiente: implementa el intercambio de monedas.");
}

// 4. UTILIDADES DE INTERFAZ
function mostrarError(mensaje) {
  resultado.classList.add("error");
  resultadoTexto.textContent = mensaje;
  detalleTasa.textContent = "Revisa los datos e inténtalo nuevamente.";
}

// PISTA PARA EL RETO:
// origen.value        -> moneda seleccionada como origen
// destino.value       -> moneda seleccionada como destino
// cantidad.value      -> texto escrito en el input
// Number(...)         -> convierte texto a número
// response.ok         -> indica si la respuesta HTTP fue satisfactoria
// resultado.textContent -> permite modificar texto del DOM
