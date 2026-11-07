# Git y GitHub

## Ramas y orden

- `main`: punto de partida; reservada para versiones estables.
- `develop`: rama de integración mediante pull requests.
- `feature/web-estudio`: configuración, servicios, marca, diseño común, equipo, caso, contacto y pruebas.
- `feature/portfolio-daniel`: creada desde `develop`, actualizada con los elementos comunes y destinada al perfil de Daniel.
- No existe una rama de portfolio de Pablo. Su portfolio permanece en https://pablelas.es/.

La rama de Daniel incorpora la base común para ejecutar la web completa. El orden de integración es primero `feature/web-estudio` mediante PR hacia `develop`, después actualizar la rama de Daniel con `develop` y finalmente integrar su PR. No se ha fusionado ninguna rama en `main`.

## Repositorio y revisiones

Repositorio privado de la cuenta **MirkovicV2**: https://github.com/MirkovicV2/estudio-daniel-pablo.

- [PR #1 — Web y elementos comunes](https://github.com/MirkovicV2/estudio-daniel-pablo/pull/1).
- [PR #2 — Perfil de Daniel](https://github.com/MirkovicV2/estudio-daniel-pablo/pull/2).
- [PR #3 — Rediseño con caso destacado y servicios desplegables](https://github.com/MirkovicV2/estudio-daniel-pablo/pull/3). Las referencias y decisiones se documentan en [DESIGN_RESEARCH.md](DESIGN_RESEARCH.md).

`origin` apunta a https://github.com/MirkovicV2/estudio-daniel-pablo.git. Las cuatro ramas están publicadas y tienen seguimiento local. El bloqueo de la cuenta anterior se resolvió al autorizar GitHub CLI con la cuenta nueva. La autenticación queda en el almacén de credenciales del sistema; este repositorio usa el ayudante de GitHub CLI mediante configuración Git local, sin credenciales en el código.

## Flujo habitual

Antes de nuevos cambios, actualizar la base común desde `develop`:

```powershell
git fetch origin
git switch develop
git pull --ff-only
git switch feature/web-estudio
git merge develop
```

Tras integrar una PR de elementos comunes en GitHub, conservar la rama y actualizar la de Daniel:

```powershell
git switch develop
git pull --ff-only
git switch feature/portfolio-daniel
git merge develop
git push
```

Abrir las siguientes pull requests hacia `develop` con los cambios de cada ámbito. Resolver cualquier conflicto conservando las aportaciones. No usar force push ni borrar las ramas requeridas. `main` solo debe recibir una versión estable.

La configuración de Astro admite `SITE_URL` y `PAGES_BASE` para desplegar bajo una ruta de GitHub Pages. Pages no está activado: GitHub rechazó configurarlo porque el plan actual no permite Pages para estos repositorios privados. Se mantienen privados; publicar requiere un plan compatible o un repositorio público separado para el artefacto estático.

Git se ha preparado como MinGit oficial en este equipo, sin cambiar PATH global. Para usarlo en el terminal actual:

```powershell
$env:Path = 'C:\Users\brank\AppData\Local\CodexTools\mingit\cmd;' + $env:Path
```
