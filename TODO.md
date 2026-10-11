# TODO — Subtrack

Plan de trabajo acordado con el tech lead. **Regla de trabajo:** no se genera código hasta que el usuario lo indique explícitamente.

## Decisiones tomadas


| Tema                    | Decisión                                                                   |
| ----------------------- | -------------------------------------------------------------------------- |
| Orden de trabajo        | Slice 1+2 primero (estado + submit + card), luego logos, luego animaciones |
| Logos (feature 3)       | thesvg directo, sin dependencias nuevas (wrapper propio)                   |
| Animaciones (feature 4) | `motion` (sucesor de framer-motion)                                        |




## Estado actual del código (punto de partida)

- `src/components/AddSubscriptionForm.tsx` es puramente presentacional: los inputs tienen `name`, pero el `<form>` no tiene `onSubmit`.
- `src/types/index.ts` solo tiene `Ciclo` y `ExpenseStats`; no existe el tipo `Subscription`.
- `src/components/SuscriptionCards.tsx` es una card hardcodeada de Netflix — no recibe props, no hay lista.
- `src/App.tsx`: `stats` está hardcodeado en ceros; el único estado es `isModalOpen`.
- `thesvg` ya está instalado, pero **no exporta componentes React**: cada icono es data (`{ svg, title, hex, variants }`). Servicios verificados que existen: netflix, spotify, disneyplus, hbo-max, prime-video, apple-tv, crunchyroll, tubi, youtube-*, paramount.

---



## Slice 1+2 — Estado + onSubmit + render de suscripciones



### Paso 1 — Modelo de datos (`src/types/index.ts`)

- [x] Crear tipo `Subscription`: `id` (string), `nombre` (string), `precio` (number), `ciclo` (reutiliza `Ciclo` existente), `fechaCobro` (string en formato `yyyy-mm-dd`, lo que entrega el input `type="date"` — se guarda tal cual y se parsea solo al mostrar).
- [x] Nombres de campos en español, consistente con `Ciclo` y los `name` del formulario.



### Paso 2 — Estado en App (`src/App.tsx`)

- [x] `const [subscriptions, setSubscriptions] = useState<Subscription[]>([])`.
- [x] `handleAddSubscription`: agregar con **update funcional** (`setSubscriptions(prev => [...prev, nueva])`), nunca mutando el array. `id` con `crypto.randomUUID()`.
- [x] `handleDeleteSubscription(id)`: filtrar por id.
- [x] El cierre del modal lo hace App dentro de `handleAddSubscription`, no el formulario. El form solo conoce `onAdd`; App es dueña de ambos estados y de la orquestación.



### Paso 3 — Utilidad de fechas (`src/utils/fechas.ts`)

- [ ] `proximoCobro(fechaCobro, ciclo)`: si la fecha ya pasó este mes, saltar al siguiente (mensual) o al próximo año (anual). Caso borde: día 31 en mes de 30 días.
- [ ] `diasHasta(fecha)`: diferencia en días vs. hoy.
- [ ] Formateo del label "Dom 12 Oct" con `Intl.DateTimeFormat('es-MX')`.



### Paso 4 — onSubmit en el form (`src/components/AddSubscriptionForm.tsx`)

- [ ] Recibe prop `onAdd: (s: Subscription) => void`.
- [ ] Handler: `e.preventDefault()` → `new FormData(e.currentTarget)` → leer `nombre`, `precio`, `ciclo`, `fechacobro`.
- [ ] Validación: nombre no vacío (el `required` HTML ya lo da); `precio` parseado a number y `> 0` (cuidar `NaN` — `type="number"` entrega string).
- [ ] Armar la suscripción → `onAdd(...)` → `e.currentTarget.reset()`.



### Paso 5 — Paso a través del Modal (`src/components/Modal.tsx`)

- [ ] `Modal` recibe `onAdd` y se lo pasa a `AddSubscriptionForm`.
- [ ] Un nivel de prop drilling aceptable a esta escala. Alternativa `children` en recámara si el modal crece.



### Paso 6 — Lista de cards (`src/App.tsx` + `src/components/SuscriptionCards.tsx`)

- [ ] App hace `subscriptions.map(...)` y pasa a cada card la suscripción + `onDelete`.
- [ ] `SuscriptionCards` deja de estar hardcodeada: logo provisional con `House` de lucide (feature 3 lo reemplaza), precio con `formatCurrency`, datos dinámicos.
- [ ] Empty state: mensaje tipo "Aún no tienes suscripciones" en lugar de grilla vacía.



### Paso 7 — Stats derivadas (`src/App.tsx`)

- [ ] `stats` deja de ser constante: `useMemo` calcula los totales desde `subscriptions`.
- [ ] Concepto clave: **estado derivado** — si algo se puede calcular de otro estado, no va en `useState`.
- [ ] Mapeo de vocabularios: Mensual/Anual → Monthly/Yearly; Monthly = Σ mensuales + Σ anuales/12; Daily = mensual/30; Yearly = mensual×12 + Σ anuales.



### Verificación del slice

- [ ] Agregar Netflix $199 mensual → aparece card y las stats suben.
- [ ] Agregar Disney+ anual → stats recalculan.
- [ ] Eliminar → la card desaparece.
- [ ] Validación rechaza precio 0 o vacío.
- [ ] ⚠️ Al recargar la página se pierde todo — persistencia en `localStorage` queda como feature futura, fuera de este ticket.

---



## Feature 3 — Logos por servicio

- [ ] Mapa curado explícito en `src/data/` (nombre normalizado → icono thesvg).
- [ ] Componente `ServiceLogo` que renderiza el SVG de la data estática (wrapper propio, sin dependencias nuevas).
- [ ] Fallback a icono genérico de lucide cuando el nombre no matchea (ej. "Disney+" → `disneyplus`).
- [ ] Estrategia: matcheo automático por nombre + fallback. **Pendiente decidir:** selector de servicios conocidos en el form (alternativa más robusta).



## Feature 4 — Animaciones (con `motion`)

- [ ] `AnimatePresence` para enter/exit declarativo del modal (resuelve el problema del cierre del `<dialog>`).
- [ ] `layout` para animar la grilla al agregar/eliminar cards.
- [ ] Staggering de entrada de las cards.

---



## Conceptos que se tocan en el slice 1+2

- Lifting state up
- Inmutabilidad en `setState`
- Estado derivado vs. `useState`
- Formularios no controlados (`FormData`)



## Pendientes de decisión

- [ ] Modo de ejecución: (a) el asistente escribe cada paso y el usuario aprueba, o (b) el usuario escribe y el asistente guía/revisa.
- [ ] Ajustes al plan si los hay: nombres de campos, empty state, mapeo de stats.
- [ ] Feature 3: matcheo automático por nombre vs. selector de servicios en el form.
- [ ] Feature futura: persistencia en `localStorage`.