# Git y publicación pendiente en GitHub

## Ramas y orden

- `main`: punto de partida; reservada para versiones estables.
- `develop`: base de integración, sin merges locales que sustituyan las pull requests solicitadas.
- `feature/web-estudio`: configuración, servicios, marca, diseño común, equipo, caso, contacto y pruebas.
- `feature/portfolio-daniel`: creada desde `develop`, actualizada con los elementos comunes y destinada al perfil de Daniel.
- No existe una rama de portfolio de Pablo. Su portfolio permanece en https://pablelas.es/.

La rama de Daniel incorpora la base común para poder ejecutar la web completa. El orden remoto previsto es integrar primero `feature/web-estudio` mediante PR hacia `develop`, actualizar la rama de Daniel con `develop` y después integrar su PR. No se ha fusionado ninguna rama en `main`.

## Bloqueo comprobado

GitHub devuelve HTTP 403 al consultar la cuenta conectada:

> Sorry. Your account was suspended

No se han podido crear el repositorio privado, los remotos, upstreams ni pull requests. Todo queda conservado en ramas locales. No hay URLs de repositorio inventadas ni intentos de sortear la restricción.

## Publicación de las ramas cuando se restablezca el acceso

Con GitHub CLI autenticado y desde este proyecto:

```powershell
gh repo create estudio-daniel-pablo --private --source . --remote origin
git push -u origin main
git push -u origin develop feature/web-estudio feature/portfolio-daniel
gh pr create --base develop --head feature/web-estudio --title "Crea la web comercial de Daniel y Pablo" --body-file docs/PR_WEB_ESTUDIO.md
```

Revisar y fusionar la PR común en GitHub, conservando la rama. Después:

```powershell
git switch develop
git pull --ff-only origin develop
git switch feature/portfolio-daniel
git merge develop
git push
gh pr create --base develop --head feature/portfolio-daniel --title "Añade el perfil de Daniel al estudio" --body-file docs/PR_PERFIL_DANIEL.md
```

Resolver cualquier conflicto conservando las aportaciones. No usar force push. `main` solo debe recibir una versión estable según el flujo que acordéis.

Git se ha preparado como MinGit oficial en este equipo, sin cambiar PATH global. Para usarlo en el terminal actual:

```powershell
$env:Path = 'C:\Users\brank\AppData\Local\CodexTools\mingit\cmd;' + $env:Path
```
