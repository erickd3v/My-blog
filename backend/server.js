import express, { static as static_ } from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 1234; // Puerto del servidor

const currentModuleFile = fileURLToPath(import.meta.url);
const currentModuleDir = dirname(currentModuleFile);

// Configura una ruta estática para servir los archivos frontend
app.use(static_(join(currentModuleDir, '../frontend')));

// Ruta para la página principal (index.html)
app.get('/', (req, res) => {
  res.sendFile(join(currentModuleDir, '../frontend/index.html'));
});

// Puedes agregar rutas adicionales aquí, por ejemplo, para API REST

app.listen(port, () => {
  console.log(`Servidor Express corriendo en el puerto http://localhost:${port}`);
});
