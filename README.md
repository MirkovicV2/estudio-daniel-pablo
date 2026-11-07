# Daniel & Pablo — Estudio digital

Web comercial local con marca provisional. Los elementos comunes se desarrollan en `feature/web-estudio`; el perfil de Daniel, en `feature/portfolio-daniel`, ambas desde `develop`. `main` conserva el punto de partida.

El portfolio de Pablo permanece en https://pablelas.es/. El contenido sigue `Prompts_Codex_Daniel_Pablo.md`, facilitado el 7 de noviembre de 2026. No hay despliegue en producción.

## Ejecutar en este equipo

Las dependencias ya están instaladas. Node 24 recomendado; mínimo 22.23.4. La rama con la web completa es `feature/portfolio-daniel`, actualizada con la base común de `feature/web-estudio`.

```powershell
cd C:\Users\brank\IdeaProjects\estudio-daniel-pablo
npm.cmd run dev
```

Abre **http://127.0.0.1:4322/**. También puedes hacer doble clic en `INICIAR.cmd`. En otra instalación ejecutar primero `npm.cmd ci`. `npm.cmd` evita modificar la política de scripts de PowerShell; en otros sistemas puede usarse `npm`.

## Comandos

| Comando                    | Función                                      |
| -------------------------- | -------------------------------------------- |
| `npm.cmd run dev`          | Desarrollo con recarga                       |
| `npm.cmd run check`        | Tipos y archivos Astro                       |
| `npm.cmd run lint`         | ESLint para TypeScript, React y scripts      |
| `npm.cmd run format:check` | Comprueba el formato                         |
| `npm.cmd run build`        | HTML estático en `dist/` e imagen Open Graph |
| `npm.cmd run preview`      | Sirve el resultado local del build           |
| `npm.cmd test`             | Pruebas de navegador y capturas              |

Hacer build antes de las pruebas. Usan Edge si está instalado en Windows. En otros entornos puede instalarse Chromium con `npx.cmd playwright install chromium`; `PLAYWRIGHT_CHANNEL` elige otro canal instalado. El servidor de pruebas se inicia y termina automáticamente.

## Rutas

| Ruta                  | Contenido                                           |
| --------------------- | --------------------------------------------------- |
| `/`                   | Propuesta, trabajo, servicios, equipo y método      |
| `/servicios/`         | Cinco líneas desarrolladas y ejemplos de soluciones |
| `/proyectos/deja-vu/` | Caso comercial conjunto confirmado                  |
| `/estudio/`           | Daniel, Pablo y forma de trabajar                   |
| `/equipo/daniel/`     | Perfil de Daniel y antecedentes individuales        |
| `/contacto/`          | Correos profesionales de Daniel y Pablo             |
| Ruta desconocida      | 404 útil                                            |

No hay ruta `/equipo/pablo` ni otro portfolio suyo. El enlace lleva a su web existente.

## Configuración y contenido

La implementación usa TypeScript y React con generación estática de Astro. El contenido está en el primer HTML, los servicios se abren con controles nativos y la navegación funciona sin JavaScript. El script añade movimiento breve, menú móvil y apertura del servicio enlazado, respetando reduced motion.

- `src/content/site.ts`: marca provisional, correos, enlaces y datos estructurados.
- `src/content/editorial.ts`: procedencia, estados y aprobación.
- `src/content/services.ts`: oferta por necesidad y ejemplos identificados como ejemplos.
- `src/content/work.ts`: Déjà Vu y reparto de contribuciones.
- `src/content/daniel.ts`: perfil y trayectoria individual, en su rama específica.
- `src/components/`: piezas React.
- `src/layouts/Layout.astro`: estructura y SEO por página.
- `src/styles/global.css` y `motion.css`: diseño y movimiento.

Cambiar el nombre del estudio en `site.ts` y regenerar el build para actualizar Open Graph. Los datos pendientes deben quedar fuera de la publicación y documentados en `CONTENT_REVIEW.md`.

No se construyen reservas, CRM, facturación propia o un agente telefónico. La web explica esos posibles proyectos; los asistentes se presentan bajo estudio de viabilidad. Los empleadores y proyectos individuales de los socios no se presentan como clientes del estudio.

## Contacto y recursos

Los enlaces `mailto:` identifican a cada profesional y su correo publicado. Como no hay destinatario comercial ni proveedor configurado, no existe formulario visible, endpoint de envío o éxito simulado. No se envían consultas durante las pruebas.

No hay números, precios, métricas, testimonios o disponibilidad inventados. Los borradores legales están fuera de la web en `CONTENT_REVIEW.md`.

Las formas y composiciones tipográficas son originales. No se extraen ni reutilizan fotografías o vídeos del portfolio de Pablo ni del cliente. Fontsource sirve las fuentes localmente. No hay analítica, cookies de terceros o vídeos incrustados.

## SEO y futuro despliegue

`npm.cmd run test:seo` comprueba la configuración SEO con una URL reservada `.invalid` en una salida de prueba aislada. No modifica `dist/`.

Cada ruta incluye título, descripción y Open Graph. Los datos estructurados describen el grupo y sus integrantes con datos reales, sin inventar sede, reseñas o razón social.

Copiar `.env.example` a `.env` cuando existan URLs aprobadas:

- `SITE_URL`: dominio real del estudio. Activa canonical, Open Graph absoluto, sitemap y robots indexable.
- `PUBLIC_DANIEL_PORTFOLIO_URL`: URL real del portfolio completo. Si está vacío, no se renderiza ese enlace.

Sin dominio, la versión local queda en noindex y no genera URLs de producción ficticias. El sitemap se genera cuando se configura `SITE_URL`, excluyendo la 404. `dist/` se puede alojar en un servidor estático con soporte de directorios y `404.html` para errores. No se configura alojamiento en esta entrega.

## Git, verificaciones y pendientes

Repositorio privado: [MirkovicV2/estudio-daniel-pablo](https://github.com/MirkovicV2/estudio-daniel-pablo). Las ramas `main`, `develop`, `feature/web-estudio` y `feature/portfolio-daniel` están publicadas con seguimiento de `origin`. La [PR #1](https://github.com/MirkovicV2/estudio-daniel-pablo/pull/1) integra la base común y la [PR #2](https://github.com/MirkovicV2/estudio-daniel-pablo/pull/2), el perfil de Daniel, en ese orden y hacia `develop`. `main` queda reservada para versiones estables.

- [Flujo y orden de ramas](docs/GIT_WORKFLOW.md).
- [PR de elementos comunes](docs/PR_WEB_ESTUDIO.md).
- [PR del perfil de Daniel](docs/PR_PERFIL_DANIEL.md).
- [Verificación y capturas](VERIFICATION.md).
- [Contenido, recursos y borradores pendientes](CONTENT_REVIEW.md).

Documentación oficial consultada: [Astro con React](https://docs.astro.build/en/guides/integrations-guide/react/), [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/), [transiciones](https://docs.astro.build/en/guides/view-transitions/) y [Fontsource](https://fontsource.org/docs/getting-started/variable).
