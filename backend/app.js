// //import d'express
// const express = require("express");

// //création du serveur express
// const server = express();

// const { PORT } = process.env;

// // Sert à permettre à mon frontend à faire des requêtes ur le backend
// const cors = require("cors");
// server.use(cors({ origin: "http://localhost:5173" }));

// // Permet avec ce code d'envoyer du json(pour les requêtes 'post' par exemple)
// server.use(express.json());

// // On importe le router
// const router = require("./routes");

// // Déclarer qu'on utilise ce router sur le serveur
// server.use("/api", router);

// // Écouter le serveur sur un port spécifique
// server.listen(PORT, () => {
//   console.log(`🚀 Express Server started on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const router = require("./routes");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", router);

module.exports = server;
