// import d'express
const express = require("express");
const cors = require("cors"); // ← il faut cette ligne

// création du serveur express
const server = express();

// configuration CORS
server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

// très important pour le preflight
server.options("*", cors());

// JSON body parser
server.use(express.json());

// import du router
const router = require("./routes");

// route API
server.use("/api", router);

module.exports = server;
