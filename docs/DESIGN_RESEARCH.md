# Investigación y dirección de diseño

Fecha de consulta: 7 de noviembre de 2026. Alcance: rediseño del portfolio de Daniel Doral y de la web de Daniel & Pablo. Se han consultado las versiones actuales de las fuentes oficiales, sus contenidos y, cuando estaba disponible, su HTML/CSS. Las decisiones de esta entrega son una interpretación aplicada, no una reproducción de esos sitios.

## Diagnóstico de la primera versión

- Las dos portadas compartían demasiado la misma composición y daban un peso similar a todos los bloques.
- El portfolio tenía casos con buen contenido, pero los cuatro casos profesionales eran filas de texto poco diferenciadas. La trayectoria ocupaba demasiado espacio antes de explicar las capacidades.
- La web del estudio presentaba cada servicio con un enlace y una frase, obligando a navegar para entender la oferta. La ilustración abstracta no hacía tangible la unión de identidad y web.
- En móvil, algunos metadatos y cuerpos de texto resultaban demasiado pequeños. El rediseño aumenta la lectura y evita comprimir una composición de escritorio.

## Referencias de portfolios

| Fuente primaria                                                                                            | Observación                                                                                                                                                             | Decisión aplicada                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| [Brittany Chiang](https://brittanychiang.com/)                                                             | Identidad y especialidad claras; experiencia contextualizada y proyectos con tecnologías. Su CSS adapta la estructura fija al escritorio y contempla reduced motion.    | Presentación breve y trabajo antes que cronología; etiquetas técnicas como apoyo. La composición y la identidad gráfica son propias.       |
| [Lee Robinson](https://leerob.com/)                                                                        | La versión actual prioriza Bio, Notes y Blogs. Usa una columna editorial de lectura y filas con divisores; el enriquecimiento visual es opcional en pantallas pequeñas. | Párrafos de ancho controlado y filas legibles; en móvil se retiran miniaturas secundarias sin ocultar información del proyecto.            |
| [Rauno Freiberg / Craft](https://rauno.me/craft) y [Projects](https://rauno.me/projects)                   | Distingue proyectos publicados, experimentos y ensayos. Su navegación espacial es específica de su propia práctica.                                                     | Una interacción pequeña que explica interfaz, servicios y datos. No se añade una sección de experimentos sin trabajo aprobado que mostrar. |
| [Bruno Simon](https://bruno-simon.com/) y [código del portfolio](https://github.com/brunosimon/folio-2025) | Su mundo 3D demuestra directamente su especialidad, con controles y opciones de calidad.                                                                                | La demostración debe tener relación con el trabajo: aquí, un esquema ligero de capas de software. La navegación sigue siendo convencional. |

## Referencias de estudios

| Fuente primaria                                                                      | Observación                                                                                                                                     | Decisión aplicada                                                                                                                                                    |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Locomotive](https://locomotive.ca/en) y [Agency](https://locomotive.ca/en/agency)   | Trabajo destacado y capacidades que unen disciplinas digitales y de marca.                                                                      | Déjà Vu aparece pronto y tiene una superficie visual amplia. Los roles de desarrollo y diseño son explícitos.                                                        |
| [Locomotive / Lightship](https://locomotive.ca/en/work/lightship-1)                  | El caso describe el paso desde una experiencia demasiado dependiente del scroll a una estructura clara, con exploración al ritmo del visitante. | Despliegue progresivo de servicios, scroll nativo y enlaces visibles. La animación no controla el recorrido.                                                         |
| [Obys / About](https://obys.agency/about)                                            | Presenta a los dos fundadores con sus funciones y una dirección cercana del equipo.                                                             | Los dos socios tienen voz, especialidad y enlace propios. No se simulan departamentos, una gran cartera ni premios.                                                  |
| [BASIC/DEPT / Wilson](https://www.basicagency.com/case-studies/wilson)               | Narra reto, enfoque y entregables por capítulos.                                                                                                | Los casos conservan contexto, contribución y entregables, con un índice de lectura. No se inventan resultados cuantitativos.                                         |
| [Erretres](https://erretres.com/es) y [caso BBVA](https://erretres.com/es/work/bbva) | Propuesta comercial comprensible y movimiento tratado como parte de un lenguaje coherente.                                                      | Servicios expresados por necesidad del negocio y una pauta común de movimiento. Se conservan las cinco líneas del briefing, incluida viabilidad para automatización. |

La escala de estas agencias es distinta. Se adopta su claridad de jerarquía, no su volumen de proyectos, clientes, equipo o reconocimientos.

## Sistema visual resultante

**Portfolio:** grafito, marfil y verde azulado; título editorial grande; esquema de aplicación exploratorio; encargo comercial destacado y archivo de experiencias con miniaturas conceptuales; capacidades antes de una trayectoria con título lateral fijo únicamente en escritorio. Las páginas de caso mantienen una columna de lectura y un índice que pasa a la cabecera en móvil.

**Estudio:** papel cálido, carbón y cobalto; contraste entre tipografía sans y cursiva editorial; composición original de identidad y ventana web; un único caso central con créditos precisos; cinco servicios desplegables; bloque oscuro para presentar a los socios; método secuencial y contacto azul. Se evita duplicar el manifiesto entre secciones.

Los gráficos son composiciones propias hechas con HTML/CSS/SVG. No son capturas de aplicaciones corporativas ni piezas entregadas al cliente. No se han extraído fotografías ni materiales del portfolio de Pablo. La falta de imágenes autorizadas sigue recogida en CONTENT_REVIEW.md.

## Movimiento e interacción

| Situación                           | Pauta                                                                                                                                    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Entrada del hero                    | 500–600 ms, desplazamiento de 16 px, ligera coordinación de elementos.                                                                   |
| Revelado al entrar en pantalla      | 500 ms y 22 px, una sola vez con IntersectionObserver.                                                                                   |
| Enlaces, capas, papeles y controles | 180 ms; respuesta a hover únicamente en dispositivos compatibles, con foco y acciones táctiles equivalentes.                             |
| Apertura de contenido               | Details/summary nativos; entrada del contenido de 180 ms. Sin depender de JavaScript para abrirlo.                                       |
| Navegación entre páginas            | View Transitions como mejora progresiva; el navegador conserva su navegación normal cuando no lo soporta.                                |
| Movimiento reducido                 | Sin animaciones ni transiciones, scroll inmediato y contenido visible. También se atienden cambios de preferencia con la página abierta. |

Fuentes técnicas: [criterios de interacción de Rauno](https://interfaces.rauno.me/), [su ensayo sobre interacción](https://rauno.me/craft/interaction-design), [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion), [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver), [details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) y [View Transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API). La recomendación de 200 ms de Rauno se aplica a las microinteracciones, no como límite universal para toda entrada editorial.

## Límites y validación

La investigación textual y de código no permite asegurar la fluidez, los gestos ni el comportamiento de accesibilidad de los sitios de referencia. No se presenta como una auditoría de ellos. La revisión visual y funcional se realiza sobre nuestras dos implementaciones: capturas a 375, 768 y 1440 px, navegación, teclado, accesibilidad automática, reduced motion, apertura de servicios y contenido sin JavaScript. Los resultados concretos se registran en VERIFICATION.md.
