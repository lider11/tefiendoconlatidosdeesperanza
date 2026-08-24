# Activación de analítica y conversiones

## Datos requeridos

- ID de medición GA4 con formato `G-XXXXXXXXXX`:
- Responsable de la propiedad:
- Política de consentimiento aprobada:
- Fecha de activación:
- Acceso a Search Console confirmado para:
- Importación a Bing Webmaster Tools: pendiente / completada

## Eventos preparados

- `aporte_enviado`
- `orientacion_solicitada`
- `voluntariado_enviado`
- `alianza_enviada`
- `contacto_enviado`

## Validación

- [ ] No se envían nombres, correos, teléfonos, mensajes ni categorías sensibles.
- [ ] Los eventos aparecen en DebugView.
- [ ] Se registra fuente/medio y página de destino.
- [ ] Existe mecanismo de consentimiento aplicable.
- [ ] Se documenta la retención de datos.
- [ ] Se prueba cada formulario sin duplicar eventos.

El código del sitio permanece inactivo mientras no se configure `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
