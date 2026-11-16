# Aesthetic Fitness Mendoza – sitio web

Sitio estático (HTML, CSS y JavaScript, sin dependencias ni compilación).

## Estructura
- `index.html`, `servicios.html`, `nosotros.html`: las tres páginas.
- `styles.css`: estilos y colores de marca.
- `app.js`: configuración y contenido (servicios, preguntas frecuentes, turnos, Instagram).
- `media/`: fotos y videos.

## Publicar en GitHub Pages
1. Subir todo el contenido de esta carpeta a la raíz de un repositorio nuevo.
2. En el repositorio: Settings → Pages → Source: "Deploy from a branch" → rama `main`, carpeta `/ (root)`.
3. Esperar un minuto; el sitio queda en `https://USUARIO.github.io/REPOSITORIO/`.

Para usar un dominio propio: Settings → Pages → Custom domain.

## Configuración (arriba de `app.js`)
- `wa`: número de WhatsApp con código de país.
- `direccion`, `mapa`, `horarios`, `email`: datos de contacto.
- `heroVideo` / `heroPoster`: video del inicio.

## Feed de Instagram en vivo
Instagram no permite leer el feed sin autorización de la cuenta. Opción recomendada:
1. Conectar la cuenta @aestheticfitnessmendoza en un servicio de feed (por ejemplo Behold) y copiar la URL JSON que entrega.
2. Pegarla en `feedUrl` dentro de `app.js`.

El sitio muestra entonces las publicaciones más recientes y las actualiza cada 10 minutos. Mientras `feedUrl` esté vacío (o si falla), se muestran las publicaciones de respaldo de `igTiles`.

Alternativa: poner `igEmbed: true` para usar el embed oficial del perfil.
