# Jorge Galdámez · Goatja

Portafolio one-page construido con Vite, React, Tailwind-free CSS y design tokens.

**Firma:** Jorge Galdámez · Goatja  
**Headline:** Full Stack Developer • Data Enthusiast • Digital Entrepreneur  
**Ubicación:** Santa Ana, El Salvador

## Ejecutar

```bash
npm install
npm run dev
```

Para probar el formulario localmente, usa `vercel dev` en vez de `npm run dev`
para que `/api/contacto` exista.

## Verificar

```bash
npm run lint
npm run build
npm run preview
```

## Estructura

- `src/App.jsx`: orden obligatorio de las 8 secciones.
- `src/data/content.js`: copy y datos pendientes de confirmar.
- `src/index.css`: tokens claros/oscuros, layout, componentes y estados accesibles.
- `src/components/animations.css`: movimiento condicionado a `prefers-reduced-motion`.
- `src/utils/pendiente.js`: oculta los campos que aún tienen marcadores pendientes.
- `api/contacto.js`: función serverless que envía el formulario por SMTP.
- `public/`: favicon, OG image, mockups de proyectos y páginas estáticas.

## Formulario de contacto

El formulario envía un `POST` a `/api/contacto`. En Vercel, esa ruta se resuelve
con `api/contacto.js` mediante Nodemailer y SMTP de Gmail.

1. Copia `.env.example` a `.env.local` para desarrollo local, o carga las mismas
   variables en **Vercel → Project → Settings → Environment Variables**.
2. Usa una **contraseña de aplicación** de Google, no la contraseña normal.
   Se genera en https://myaccount.google.com/apppasswords con la verificación
   en dos pasos activada.
3. Variables requeridas:

   - `SMTP_USER`: correo Gmail que envía.
   - `SMTP_PASS`: contraseña de aplicación.
   - `CONTACTO_DESTINO`: correo que recibe los mensajes.
   - `SMTP_FROM`: opcional; por defecto usa `SMTP_USER`.
   - `SMTP_HOST` y `SMTP_PORT`: opcionales; por defecto `smtp.gmail.com:587`.

4. Redeploya en Vercel después de guardar las variables.

El endpoint valida los campos, ignora el honeypot, responde JSON para el
enhancement con JavaScript y redirige a `/gracias` cuando el formulario se envía
sin JavaScript.

## Pendiente antes de publicar

- Reemplazar `https://goatja.example` por el dominio real en `index.html`.
- Completar todos los `[dato por confirmar]`.
- Configurar las variables SMTP en Vercel con el correo real.
- Sustituir los mockups SVG por capturas reales.

## Stack

Vite 7 · React 19 · CSS nativo con tokens · Geist Variable · JetBrains Mono · react-icons.
