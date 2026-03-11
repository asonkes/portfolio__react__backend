/******************************/
/** Ici on est dans le router */
/******************************/

const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.send("Bienvenue sur le router de l'API de cet exercice !", 200);
// });

router.get("/", (req, res) => {
  res.status(200).send("Bienvenue sur le router de l'API de cet exercice !");
});

// import du router message
const messageRouter = require("./message.router");

router.use("/messages", messageRouter);

module.exports = router;
