# Guía de contribución

## Regla principal

La rama `main` de GitHub es la fuente oficial del sitio. Ningún cambio debe considerarse definitivo si no está registrado y validado en este repositorio.

## Flujo de cambios

1. Actualiza tu copia local de `main`.
2. Crea una rama descriptiva:
   - `feature/nueva-seccion`
   - `content/actualiza-programa`
   - `fix/corrige-formulario`
3. Realiza cambios pequeños y coherentes.
4. Ejecuta:
   ```bash
   npm ci
   npm test
   ```
5. Abre un pull request hacia `main`.
6. Describe:
   - objetivo del cambio;
   - secciones afectadas;
   - validaciones realizadas;
   - contenido institucional que requiere aprobación;
   - comportamiento en móvil y accesibilidad.
7. Fusiona únicamente cuando la validación automática sea satisfactoria.
8. Sincroniza después `main` con ChatGPT Sites y publica una nueva versión.

## Reglas de contenido

No publicar sin aprobación institucional:

- cifras de beneficiarios;
- resultados o porcentajes de impacto;
- nombres de aliados;
- testimonios;
- fotografías identificables;
- datos legales pendientes;
- información financiera;
- servicios que todavía no estén disponibles.

Las metas e indicadores aún no medidos deben identificarse como “propuestos”, “en formulación” o “pendientes de validación”.

## Accesibilidad

Cada cambio debe conservar:

- navegación por teclado;
- etiquetas accesibles;
- contraste suficiente;
- diseño responsive;
- áreas táctiles adecuadas;
- compatibilidad con `prefers-reduced-motion`.

## Publicación

La integración en `main` no actualiza automáticamente la página pública.

Después de cada fusión aprobada:

1. identificar el commit exacto de `main`;
2. sincronizar ese estado con ChatGPT Sites;
3. compilar y publicar;
4. verificar el enlace público;
5. registrar en el pull request o commit cuál versión fue desplegada.

## Conflictos

No editar simultáneamente la misma sección en GitHub y en la copia de Sites. Si existe una diferencia, prevalece el contenido aprobado en `main`.
