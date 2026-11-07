# Revisión editorial — Daniel & Pablo

Fuente de trabajo: `C:\Users\brank\Desktop\Prompts_Codex_Daniel_Pablo.md`, con investigación y confirmaciones del 7 de noviembre de 2026.

## Aprobado para esta versión local

| Contenido                                           | Procedencia                                   | Tratamiento                                                |
| --------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------- |
| Nombre provisional Daniel & Pablo — Estudio digital | Instrucción directa                           | Centralizado en `src/content/site.ts`                      |
| Servicios y ejemplos de soluciones                  | Alcance del documento aportado                | Oferta por necesidad; ejemplos identificados como ejemplos |
| Automatización y asistentes de voz                  | Instrucción directa                           | Bajo estudio de viabilidad                                 |
| Daniel: puestos y periodos                          | LinkedIn según investigación aportada         | Experiencia individual, nunca clientes del estudio         |
| Daniel: funciones detalladas                        | Confirmación directa del 07/11/2026           | Aprobadas; no pendientes                                   |
| Pablo: especialidades y formación UDIT              | LinkedIn y portfolio según documento aportado | Biografía breve y enlace al portfolio existente            |
| Déjà Vu: encargo pagado y reparto de contribuciones | Daniel y caso profesional publicado por Pablo | Único caso comercial conjunto                              |
| Correos profesionales de Daniel y Pablo             | Publicados en las fuentes aportadas           | Contacto directo, claramente identificado                  |

La procedencia y los estados están modelados en `src/content/editorial.ts`. Los servicios y el caso se filtran por aprobación. No se han atribuido al estudio los empleadores, clientes individuales o trabajos académicos de sus integrantes.

LinkedIn de Pablo muestra Telefónica Tech y Minsait desde enero de 2024 en paralelo. No se suman esos periodos ni se infieren dos empleos independientes. PH4NTOM permanece fuera de los casos del estudio.

## Pendientes de marca y recursos

- Elegir el nombre y la identidad definitivos. Sustituir la configuración centralizada y regenerar Open Graph.
- Aportar dominio aprobado para `SITE_URL`.
- Añadir en `PUBLIC_DANIEL_PORTFOLIO_URL` la URL real del portfolio de Daniel cuando exista. Mientras tanto no se inventa ese enlace.
- Aportar fotografías del equipo y materiales de Déjà Vu con autorización de uso. La versión actual utiliza composiciones tipográficas y formas originales.
- Confirmar el alcance permitido de una futura publicación comercial de referencias y materiales de clientes.
- Definir datos comerciales, responsable y datos de contacto del estudio. No se han inventado razón social, CIF, sede, teléfono, WhatsApp ni correo de empresa.
- Definir mantenimiento y condiciones de soporte en cada presupuesto. No se publican precios, disponibilidad garantizada o atención permanente.

## Formulario: decisión aplicada

El documento no aprueba un destinatario comercial del estudio ni configura un proveedor. Por ello no existe formulario visible ni endpoint de envío. Solo se muestran los correos profesionales publicados de cada integrante. No se han enviado consultas reales durante las pruebas.

Si se decide activarlo en otra entrega, definir primero responsable, destinatario y proveedor. El modelo de contenido previsto comprende nombre, negocio, email, teléfono opcional, necesidad, mensaje y aceptación de privacidad cuando proceda. La implementación deberá incorporar validación de servidor, limitación de peticiones, antispam y minimización de registros.

## Borradores legales de estructura — fuera de la web

Estos apuntes identifican datos por decidir; no son documentos legales definitivos ni afirmaciones de cumplimiento.

### Aviso legal — borrador

- Titular o responsable: [pendiente de definir].
- Denominación comercial y relación con el titular: [pendiente].
- Datos fiscales y registrales que correspondan: [pendiente].
- Dirección y medios de contacto comerciales: [pendiente].
- Condiciones de uso del sitio y derechos sobre imágenes y trabajos: [pendiente de revisión].

### Privacidad — borrador

- Responsable de los tratamientos de consultas: [pendiente].
- Datos que se recibirían por el canal elegido: [pendiente].
- Finalidades, base aplicable y conservación: [pendiente de decisión y revisión].
- Proveedores, destinatarios y posibles transferencias: [pendiente].
- Vías para ejercer los derechos que procedan: [pendiente].
- Redacción y ubicación de la aceptación en un futuro formulario: [pendiente].

### Cookies y medición — revisión

Esta implementación no añade analítica, vídeos incrustados, cookies de terceros ni fuentes externas. Si se añaden herramientas de terceros, revisar su funcionamiento y los textos y mecanismos que correspondan antes de activarlas.

## Evidencias y enlaces

El portfolio de Pablo, su caso de Déjà Vu y la web de Déjà Vu respondieron HTTP 200 a peticiones HEAD desde este equipo. No se ha descargado ni reutilizado material de esas webs. No hay métricas de ventas, tráfico o ahorro; la satisfacción comunicada por Daniel no se ha convertido en cita del cliente.
