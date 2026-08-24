# Arquitectura CSS

## Orden de la cascada

`globals.css` declara las capas `reset`, `tokens`, `base`, `legacy`, `components`, `utilities` y `accessibility`. El orden es contractual: una regla nueva debe ubicarse en el archivo de responsabilidad correspondiente y no al final del CSS heredado.

## Archivos

- `tokens.css`: colores, espaciado, radios, sombras, movimiento, contenedores y niveles.
- `legacy.css`: compatibilidad temporal con rutas y secciones existentes.
- `system.css`: primitivas visuales compartidas.
- `forms.css`: campos, foco, error y estado de formularios.
- `responsive.css`: reglas responsive compartidas y container queries selectivas.
- `accessibility.css`: foco, enlace de salto y reducción de movimiento.

## Reglas de contribución

1. Reutilizar tokens antes de introducir un valor nuevo.
2. No usar `!important`, salvo accesibilidad o técnicas de ocultamiento documentadas.
3. No cargar fuentes o hojas externas mediante `@import url()`.
4. Los estilos dinámicos desde React deben exponer variables CSS, no propiedades arbitrarias.
5. Los componentes nuevos deben tener nombres semánticos o CSS Modules.
6. Todo cambio debe superar `npm run css:audit`, `npm run lint` y `npm test`.

## Migración del legado

La retirada de reglas de `legacy.css` se realiza por componente y con pruebas de rutas. No se elimina una clase únicamente porque no aparezca en la página de inicio; debe verificarse su uso en páginas dinámicas y estados interactivos.
