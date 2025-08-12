const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/info', (req, res) => {
  res.json({
    nombre: "Josue Guevara",
    albumFavorito: "IGOR"
  });
});

app.listen(PORT, () => console.log(`API v1 escuchando en http://localhost:${PORT}`));
