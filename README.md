# Currency Explorer · Starter Project

**Repositorio del proyecto:** [https://github.com/cafagoren/currency-explorer](https://github.com/cafagoren/currency-explorer)

## Integrantes
- Estudiante A: Moreno Medrano Paul 
- Estudiante B: Velazquez Jinez Omar

## Pair Programming
| Misión | Driver | Navigator | Commit / evidencia |
|---|---|---|---|
| 04 | Moreno Medrano Paul | Velazquez Jinez Omar | feature/mision-04-monedas-dinamicas|
| 05 | | | |
| 06 | | | |
| 07 | | | |
| 08 | | | |
| 09 | | | |
| 10 | | | |

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

1. 
2. 

### Revisión cruzada · Misión 04
- **Aspecto bien resuelto:** La lectura directa de `origen.value` y `destino.value` 
- **Aspecto mejorable detectado:** Los códigos de divisa de los `<select>` estaban en mayúsculas (`EUR`, `USD`), mientras que la ruta recomendada de la API suele requerir o estandarizar los parámetros en minúsculas para evitar inconsistencias 
- **Propuesta del revisor:** Normalizar los valores leídos aplicando `.toLowerCase()` a las variables de origen y destino antes de concatenarlas 
- **Cambio aplicado:** Se actualizó la constante de la URL a `` `https://api.frankfurter.dev/v2/rate/${monedaOrigen.toLowerCase()}/${monedaDestino.toLowerCase()}` `` para asegurar compatibilidad total con el endpoint

## Reflexión final (150–200 palabras)
Explica el principal aprendizaje técnico, una dificultad relevante y una decisión que haya surgido del trabajo Driver/Navigator.
