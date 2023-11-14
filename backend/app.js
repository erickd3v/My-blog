import express from 'express';
import { homeRoute } from './routes/home.js';
import { blog1Route } from './routes/blog1.js';
import { blog2Route } from './routes/blog2.js';

const app = express();
const port = process.env.PORT || 1234; // Puerto del servidor

// Configura una ruta estática para servir los archivos frontend
app.use(express.static('frontend'));

// Ruta para la página principal (index.html)
app.use(homeRoute);

//     Blogs

// blog2

app.use(blog2Route);

// blog1

app.use(blog1Route);

// Puedes agregar rutas adicionales aquí, por ejemplo, para API REST

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto http://localhost:${port}`);
});
