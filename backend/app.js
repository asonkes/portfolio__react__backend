//import d'express
const express = require("express");
const PORT = 3000;

//création du serveur express
const server = express();

server.use("/post", require("./routes/post.routes"));

// Écouter le serveur sur un port spécifique
server.listen(PORT, () => {
  console.log(`🚀 Express Server started on port ` + PORT);
});
