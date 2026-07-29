# Fundación Ayuda Humanitaria Internacional — Una Corona por la Vida

Landing de la Gala Internacional **Una Corona por la Vida** (Madrid 2026).

Stack: **Astro 7** + **Tailwind CSS 4** · despliegue estático en **Vercel**.

## Desarrollo

Requiere Node.js 22+.

```sh
nvm use
npm install
npm run dev
```

| Comando           | Acción                             |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Local en `http://localhost:4321`   |
| `npm run build`   | Build en `./dist/`                 |
| `npm run preview` | Vista previa del build             |

## Datos editables

En `src/consts.ts` puedes actualizar:

- Número de **WhatsApp** (`whatsapp.number`, sin `+` ni espacios)
- Mensaje prellenado de WhatsApp
- **Datos de pago** (`payment.ready = true` + banco, IBAN, etc.)

## Vercel

1. Conecta el repo en [vercel.com](https://vercel.com)
2. Framework: Astro (detectado automáticamente)
3. Build: `npm run build` · Output: `dist`
