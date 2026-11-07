# Verificación — Web del estudio completa

## Resultado

- `npm.cmd run lint`: correcto.
- `npm.cmd run check`: 0 errores, 0 avisos y 0 sugerencias.
- `npm.cmd run build`: correcto; 6 rutas públicas, la ruta 404 y el endpoint robots.
- `npm.cmd test`: **13 pruebas Playwright superadas** en Edge headless sobre Windows.
- `npm.cmd run test:seo`: canonical, Open Graph, robots, sitemap y enlaces configurables comprobados con una URL reservada `.invalid` en `artifacts/seo-fixture/`. La prueba verifica que el `dist/` original queda intacto; no se ha inventado un dominio de producción.

## Alcance de las pruebas de navegador

Se verifican HTML en español, un único h1 por página, títulos, descripciones, datos estructurados, ausencia de errores JavaScript, enlaces internos y sus anclas, ruta 404 y vuelta al inicio. Axe no detectó incidencias en las reglas WCAG 2 A/AA y 2.1 AA analizadas en las rutas públicas.

La navegación móvil se prueba con teclado, enlace para saltar al contenido, foco y cierre mediante Escape. Se prueba la lectura y navegación sin JavaScript, así como `prefers-reduced-motion`.

Todas las rutas se recorren a 375, 768 y 1440 px, comprobando que no hay desbordamiento horizontal. Se han inspeccionado visualmente las capturas del inicio en los tres tamaños y la composición general de la página. Son tamaños emulados en navegador, no dispositivos físicos.

Los servicios se abren con teclado y al seguir un enlace a su sección. No existe formulario de envío.

La ruta `/equipo/daniel/` se verifica con el resto de la web, incluidos sus enlaces y accesibilidad. Se han revisado visualmente sus capturas de móvil y escritorio. El enlace al portfolio completo se verifica en la fixture SEO y se mantiene ausente en la entrega sin URL aprobada. La base común se validó en su rama antes de añadir el perfil.

## Capturas locales

En `artifacts/screenshots/`:

- `inicio-375.png`, `inicio-768.png`, `inicio-1440.png`.
- `inicio-completa-375.png`, `inicio-completa-768.png`, `inicio-completa-1440.png`.
- `caso-deja-vu-375.png`, `caso-deja-vu-1440.png`.
- `perfil-daniel-375.png`, `perfil-daniel-768.png`, `perfil-daniel-1440.png`.

El informe navegable de Playwright queda en `playwright-report/index.html`. Capturas, informes y fixtures están excluidos de Git.

## Referencias y límites

Las peticiones HEAD a https://pablelas.es/, https://pablelas.es/proyectos/deja-vu y https://bar-dejavu-kebab.es/ respondieron HTTP 200. No se enviaron formularios, mensajes ni correos.

Se ha verificado que [MirkovicV2/estudio-daniel-pablo](https://github.com/MirkovicV2/estudio-daniel-pablo) es privado y que `main`, `develop`, `feature/web-estudio` y `feature/portfolio-daniel` están publicadas con seguimiento de `origin`. La integración se realiza mediante las [PR #1 — Base común](https://github.com/MirkovicV2/estudio-daniel-pablo/pull/1) y [PR #2 — Perfil de Daniel](https://github.com/MirkovicV2/estudio-daniel-pablo/pull/2), en ese orden y hacia `develop`. El bloqueo de la cuenta anterior quedó resuelto con la cuenta nueva. Ver `docs/GIT_WORKFLOW.md`. No hay despliegue en producción.
