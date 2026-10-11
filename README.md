# Currency Explorer · Starter Project

**Repositorio del proyecto:** [https://github.com/cafagoren/currency-explorer](https://github.com/cafagoren/currency-explorer)

## Integrantes
- Estudiante A: Moreno Medrano Paul 
- Estudiante B: Velazquez Jinez Omar

## Pair Programming
| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 04 | Moreno Medrano Paul | Velazquez Jinez Omar | feature/mision-04-monedas-dinamicas — PR #1|
| 05 | Velazquez Jinez Omar | Moreno Medrano Paul | feat(mision-05): calculo dinamico de conversion y formateo con toFixed — PR #2|
| 06 | Moreno Medrano Paul | Velazquez Jinez Omar | feature/mision-06: permitir el intercambio de monedas seleccionadas — PR #3|
| 07 | Velazquez Jinez Omar | Moreno Medrano Paul | feat(mision-07): validacion de datos de entrada — PR #4|
| 08 | Moreno Medrano Paul | Velazquez Jinez Omar | feature/mision-08: agregar un estado de carga — PR #6|
| 09 | Velazquez Jinez Omar | Moreno Medrano Paul | feat(mision-09): manejo de errores (try y catch) — PR #7|
| 10 | Moreno Medrano Paul | Velazquez Jinez Omar | feature/mision-10: integracion de diseño responsive — PR #8|

## Objetivo
Completar una aplicación frontend que consuma Frankfurter API para convertir divisas y demostrar comprensión de eventos, DOM, `fetch()`, JSON, asincronía, validación y manejo de errores.

## Ejecución
1. Descomprime el proyecto.
2. Abre la carpeta en VS Code.
3. Ejecuta `index.html` con Live Server o un servidor local equivalente.
4. Abre DevTools → Console y Network para observar el comportamiento.

## API
Endpoint de referencia:
`https://api.frankfurter.dev/v2/rate/{origen}/{destino}`

## Decisiones técnicas
Registra aquí al menos dos decisiones tomadas por la pareja y explica por qué.

1. Construir la URL de la API con las monedas seleccionadas y convertir sus códigos a minúsculas para formar el endpoint usado por el proyecto.
2. Si la moneda de origen y destino son iguales, mostrar el mismo importe con tasa 1.00 y evitar una consulta innecesaria a la API.

### Revisión cruzada · Misión 04
- **Aspecto bien resuelto:** La lectura directa de los valores mediante `origen.value` y `destino.value`, junto con la adecuada vinculación de eventos en el DOM.
- **Aspecto mejorable detectado:** Los códigos de divisa de los `<select>` se encontraban en mayúsculas (`EUR`, `USD`), mientras que la ruta recomendada de la API de Frankfurter estandariza los parámetros en minúsculas para prevenir inconsistencias en la consulta.
- **Propuesta del revisor:** Normalizar los valores leídos aplicando el método `.toLowerCase()` a las variables de origen y destino antes de interpolarlas en la URL.
- **Cambio aplicado:** Se actualizó la constante de la petición a `` `https://api.frankfurter.dev/v2/rate/${monedaOrigen.toLowerCase()}/${monedaDestino.toLowerCase()}` `` para asegurar total compatibilidad y consistencia con el endpoint.

## Reflexión final (150–200 palabras)
Durante el desarrollo del caso práctico, el principal aprendizaje técnico consistió en coordinar el ciclo asíncrono con `async/await` junto a la manipulación precisa del DOM, asegurando que la retroalimentación visual al usuario fuera inmediata y consistente con el ciclo de vida de la petición HTTP. La dificultad más relevante radicó en anticipar y gestionar los distintos estados de fallo: diferenciar un error de red nativo capturado por el bloque `catch` de una respuesta fallida del servidor (cuando `response.ok` es falso), manteniendo el botón y los mensajes en un estado coherente. La dinámica Driver/Navigator facilitó la resolución ágil de este desafío; mientras el Driver redactaba la lógica asíncrona, el Navigator identificó la necesidad de estructurar un bloque `finally` para garantizar la rehabilitación de los controles sin importar el resultado. Esta interacción continua mejoró la legibilidad del código, evitó bloqueos en la interfaz y reforzó la adopción de buenas prácticas en Git mediante ramas y revisiones sistemáticas.
