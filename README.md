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
| 07 | Velazquez Jinez Omar | Moreno Medrano Paul | feat(mision-07): validacion de entradas completa — PR #4|
| 08 | Moreno Medrano Paul | Velazquez Jinez Omar | feature/mision-06: mostrar estado de craga — PR #5|
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

1. Construir la URL de la API con las monedas seleccionadas y convertir sus códigos a minúsculas para formar el endpoint usado por el proyecto.
2. Si la moneda de origen y destino son iguales, mostrar el mismo importe con tasa 1.00 y evitar una consulta innecesaria a la API.

## Revisión cruzada
- Aspecto bien resuelto:
- Error o comportamiento mejorable:
- Propuesta de mejora:
- Cambio incorporado después de la revisión:

## Reflexión final (150–200 palabras)
Explica el principal aprendizaje técnico, una dificultad relevante y una decisión que haya surgido del trabajo Driver/Navigator.
