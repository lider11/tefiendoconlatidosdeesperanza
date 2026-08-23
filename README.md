# Fundación Tejiendo con Latidos de Esperanza

Sitio web institucional de la **Fundación Tejiendo con Latidos de Esperanza**, creada para conectar personas, comunidades y aliados alrededor de soluciones sociales dignas, inclusivas, transparentes y sostenibles en Colombia.

> **Uniendo corazones, transformando realidades.**

## Propósito

La plataforma comunica la identidad institucional, los pilares de intervención, los programas sociales y las rutas mediante las cuales comunidades, voluntarios, donantes, empresas y organizaciones pueden participar.

## Experiencias principales

- **Nuestro ADN — El tejido que nos une:** cuatro hilos interactivos traducen los valores institucionales en compromisos comprensibles.
- **Ocho caminos, un mismo propósito:** los pilares explican la realidad que moviliza a la Fundación, su respuesta propuesta y la transformación que busca.
- **Programas y líneas de acción:** catálogo con páginas individuales y rutas de participación.
- **Orientación y apoyo:** formulario para registrar inicialmente una necesidad, sin constituir aceptación ni garantía de atención.
- **Aportes responsables:** manifestaciones de interés para aportes económicos, en especie, conocimiento o cooperación.
- **Transparencia:** espacios preparados para indicadores, fichas técnicas y evidencia institucional validada.

## Principios de comunicación

El sitio diferencia entre valores, pilares, programas y resultados. No presenta aspiraciones como impactos demostrados ni publica cifras o testimonios sin validación institucional.

## Tecnologías

- React 19
- Next.js 16
- TypeScript
- Vinext y Vite
- Despliegue compatible con Cloudflare Workers
- CSS responsive y accesible

## Accesibilidad

- Navegación mediante teclado.
- Enlace para saltar al contenido principal.
- Estados y formularios con etiquetas accesibles.
- Diseño adaptable desde dispositivos móviles.
- Respeto por la preferencia `prefers-reduced-motion`.
- Contraste y áreas táctiles pensadas para WCAG 2.2 AA.

## Desarrollo local

Requisitos: Node.js `>=22.13.0` y npm.

```bash
npm install
npm run dev
```

Compilación de producción:

```bash
npm run build
```

## Estructura principal

```text
app/
├── layout.tsx
├── page.tsx
├── globals.css
└── programas/
    ├── page.tsx
    ├── data.ts
    ├── components.tsx
    └── [slug]/
public/
scripts/
tests/
```

## Estado del contenido institucional

Los indicadores incluidos en los pilares son propuestas de medición. Las cifras, testimonios, aliados, evidencias y resultados deberán publicarse únicamente después de su aprobación y verificación por la Fundación.

## Sitio publicado

[fundacion-tejiendo-latidos.devergel1980.chatgpt.site](https://fundacion-tejiendo-latidos.devergel1980.chatgpt.site)

## Licencia

El contenido institucional, la identidad visual y los activos de marca pertenecen a la Fundación Tejiendo con Latidos de Esperanza. El uso o reproducción deberá contar con autorización de su titular.
