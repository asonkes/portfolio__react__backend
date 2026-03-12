/***********************************************/
/** Ici on se trouve sur la route des messages */
/***********************************************/

const express = require("express");
const messageRouter = express.Router();

const transporter = require("../nodemailer");

messageRouter.post("/", async (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message portfolio de ${lastname} ${firstname}`,
      text: message,
    });

    res.status(200).json({ message: "Email envoyé" });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de l'envoi",
    });
  }
});

messageRouter.get("/test", (req, res) => {
  res.status(200).json({ message: "Le router /messages fonctionne !" });
});

module.exports = messageRouter;
