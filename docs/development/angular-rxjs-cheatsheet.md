ANGULAR 21 + RXJS — CHEAT SHEET

pipe()       → Encadenar operadores de un Observable.
map()        → Transformar cada emisión.
switchMap()  → Cambiar al Observable más reciente.
startWith()  → Emitir un valor inicial en cada suscripción.
catchError() → Capturar errores y reemplazar el flujo.
of()         → Crear un Observable con valores.
paramMap     → Observar parámetros de la ruta.

signal()     → Estado reactivo modificable.
computed()   → Valor derivado, lazy y memoizado.
toSignal()   → Convertir Observable en Signal.
effect()     → Ejecutar efectos secundarios reactivos.

PATRÓN CASE STUDY:
paramMap → map(slug) → switchMap(HTTP)
                        ├─ startWith(loading)
                        ├─ map(success)
                        └─ catchError(of(error))
                      → toSignal() → template

REGLAS:
- Usa computed para derivar datos, no para hacer HTTP.
- Usa switchMap cuando una petición nueva sustituye a la anterior.
- Usa catchError dentro de switchMap para mantener activo el flujo de la ruta.
- Usa initialValue en toSignal si necesitas un valor inicial definido.
- Usa uniones discriminadas para evitar estados inconsistentes.