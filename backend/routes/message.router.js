/***********************************************/
/** Ici on se trouve sur la route des messages */
/***********************************************/

const express = require("express");
const messageRouter = express.Router();

// stockage temporaire
const messages = [];

// POST → ajouter un message
messageRouter.post("/", (req, res) => {
  const message = { _id: Date.now(), ...req.body }; // récupère les données envoyées
  messages.push(message);
  res.status(201).json(message); // renvoie le message ajouté
});

// GET → récupérer tous les messages
messageRouter.get("/", (req, res) => {
  res.status(200).json(messages);
});

module.exports = messageRouter;
