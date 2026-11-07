# Verificación — Web del estudio — base común

## Resultado

- `npm.cmd run lint`: correcto.
- `npm.cmd run check`: 0 errores, 0 avisos y 0 sugerencias.
- `npm.cmd run build`: correcto; 5 rutas públicas, la ruta 404 y el endpoint robots.
- `npm.cmd test`: **12 pruebas Playwright superadas** en Edge headless sobre Windows.
- `npm.cmd run test:seo`: canonical, Open Graph, robots, sitemap y enlaces configurables comprobados con una URL reservada `.invalid` en `artifacts/seo-fixture/`. La prueba verifica que el `dist/` original queda intacto; no se ha inventado un dominio de producción.

## Alcance de las pruebas de navegador

Se verifican HTML en español, un único h1 por página, títulos, descripciones, datos estructurados, ausencia de errores JavaScript, enlaces internos y sus anclas, ruta 404 y vuelta al inicio. Axe no detectó incidencias en las reglas WCAG 2 A/AA y 2.1 AA analizadas en las rutas públicas.

La navegación móvil se prueba con teclado, enlace para saltar al contenido, foco y cierre mediante Escape. Se prueba la lectura y navegación sin JavaScript, así como `prefers-reduced-motion`.

Todas las rutas se recorren a 375, 768 y 1440 px, comprobando que no hay desbordamiento horizontal. Se han inspeccionado visualmente las capturas del inicio en los tres tamaños y la composición general de la página. Son tamaños emulados en navegador, no dispositivos físicos.

Los servicios se abren con teclado y al seguir un enlace a su sección. No existe formulario de envío.

## Capturas locales

En `artifacts/screenshots/`:

- `inicio-375.png`, `inicio-768.png`, `inicio-1440.png`.
- `inicio-completa-375.png`, `inicio-completa-768.png`, `inicio-completa-1440.png`.
- `caso-deja-vu-375.png`, `caso-deja-vu-1440.png`.

El informe navegable de Playwright queda en `playwright-report/index.html`. Capturas, informes y fixtures están excluidos de Git.

## Referencias y límites

Las peticiones HEAD a https://pablelas.es/, https://pablelas.es/proyectos/deja-vu y https://bar-dejavu-kebab.es/ respondieron HTTP 200. No se enviaron formularios, mensajes ni correos.

El acceso a GitHub está bloqueado por HTTP 403: `Sorry. Your account was suspended`. No se ha podido verificar publicación remota, upstreams ni pull requests. Ver `docs/GIT_WORKFLOW.md`. No hay despliegue en producción.
