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
  const valorTexto = cantidad.value.trim();

  // Misión 07: validar la cantidad ingresada
  if (valorTexto === "") {
    mostrarError("Ingresa una cantidad para convertir.");
    cantidad.focus();
    return;
  }

  const valor = Number(valorTexto);

  if (!Number.isFinite(valor)) {
    mostrarError("El valor ingresado debe ser un número válido.");
    cantidad.focus();
    return;
  }

  if (valor <= 0) {
    mostrarError("La cantidad debe ser mayor que cero.");
    cantidad.focus();
    return;
  }

  // Misión 04: obtener las monedas seleccionadas
  const monedaOrigen = origen.value;
  const monedaDestino = destino.value;

  // Misión 05: evitar consultar la API si las monedas son iguales
  if (monedaOrigen === monedaDestino) {
    resultado.classList.remove("error");
    resultadoTexto.textContent =
      `${valor.toFixed(2)} ${monedaOrigen} = ${valor.toFixed(2)} ${monedaDestino}`;
    detalleTasa.textContent =
      `1 ${monedaOrigen} = 1.00 ${monedaDestino} · Monedas idénticas`;
    return;
  }

  const url = `https://api.frankfurter.dev/v2/rate/${monedaOrigen.toLowerCase()}/${monedaDestino.toLowerCase()}`;

  // Misión 08: mostrar que la consulta está en proceso
  btnConvertir.disabled = true;
  btnIntercambiar.disabled = true;
  resultado.classList.remove("error");
  resultadoTexto.textContent = "Consultando...";
  detalleTasa.textContent = "Esperando respuesta de Frankfurter API.";

  try {
    const respuesta = await fetch(url);

    // MISIÓN 09: Comprobar response.ok y lanzar error HTTP si la respuesta no es exitosa
    if (!respuesta.ok) {
      throw new Error(`Error en el servidor o divisa no disponible (Código HTTP: ${respuesta.status})`);
    }

    const datos = await respuesta.json();

    // MISIÓN 05: Cálculo dinámico de conversión y formato en el DOM
    const conversion = valor * datos.rate;

    resultado.classList.remove("error");
    resultadoTexto.textContent = `${valor.toFixed(2)} ${monedaOrigen} = ${conversion.toFixed(2)} ${monedaDestino}`;
    detalleTasa.textContent = `1 ${monedaOrigen} = ${datos.rate} ${monedaDestino} · ${datos.date}`;

  } catch (error) {
    // MISIÓN 09: Gestión de errores diferenciada (red vs HTTP)
    console.error("Detalle del error:", error);

    const mensajeDetallado = error.message.includes("Código HTTP")
      ? error.message
      : "Error de conexión o fallo al consultar el servicio.";

    mostrarError(mensajeDetallado);
  } finally {
    // Restaurar los botones tanto si hubo éxito como si hubo error
    btnConvertir.disabled = false;
    btnIntercambiar.disabled = false;
  }
}

function intercambiarMonedas() {
  const monedaTemporal = origen.value;
  origen.value = destino.value;
  destino.value = monedaTemporal;

  convertirMoneda();
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
