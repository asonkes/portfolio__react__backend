//import d'express
const express = require("express");

//création du serveur express
const server = express();

// Partie deve(pas production => vercel)
// const { PORT } = process.env;

// Sert à permettre à mon frontend à faire des requêtes ur le backend
const cors = require("cors");
// Partie developpement
// server.use(cors({ origin: "http://localhost:5173" }));

// Partie production(vercel)
server.use(cors());

// Permet avec ce code d'envoyer du json(pour les requêtes 'post' par exemple)
server.use(express.json());

// On importe le router
const router = require("./routes");

// Déclarer qu'on utilise ce router sur le serveur
server.use("/api", router);

// Écouter le serveur sur un port spécifique
// Partie (production => vercel)
// server.listen(PORT, () => {
//   console.log(`🚀 Express Server started on port ${PORT}`);
// });

if (process.env.NODE_ENV !== "production") {
  const { PORT } = process.env;
  server.listen(PORT, () => {
    console.log(`🚀 Express Server started on port ${PORT}`);
  });
}

// pour production(vercel)
module.exports = server;
