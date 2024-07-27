const express = require('express');
const path = require('path');

const app = express();
const port = 80; // Você pode escolher outra porta se preferir

// Definir o diretório público
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
