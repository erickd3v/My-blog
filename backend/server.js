import express from 'express';
import { homeRoute } from './routes/home.js';

const app = express();
const port = process.env.PORT || 1234; // Puerto del servidor

// Configura una ruta estática para servir los archivos frontend
app.use(express.static('frontend'));

// Ruta para la página principal (index.html)
app.use(homeRoute)

//     Blogs

// blog2

app.get('/mi-primer-blog', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Erick Moya - erickdev</title>
        <link rel="icon" href="./pictures/images/logo.jpg">
        <link rel="stylesheet" href="./css/header.css">
        <link rel="stylesheet" href="./css/main.css">
        <link rel="stylesheet" href="./css/footer.css">
    </head>
    <body>
    <script type="module" src="./main.js"></script>
    </body>
    </html>
  `);
});

// blog1

app.get('/vanilla-js-beneficios-y-pasar-a-framework', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Erick Moya - erickdev</title>
        <link rel="icon" href="./pictures/images/logo.jpg">
        <link rel="stylesheet" href="./css/header.css">
        <link rel="stylesheet" href="./css/main.css">
        <link rel="stylesheet" href="./css/footer.css">
    </head>
    <body>
    <script type="module" src="./main.js"></script>
    </body>
    </html>
  `);
});

// Puedes agregar rutas adicionales aquí, por ejemplo, para API REST

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto http://localhost:${port}`);
});
