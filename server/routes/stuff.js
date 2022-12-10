const express = require("express");
const router = express.Router();
// Le controllers stuff pour importer la logique métier qui se trouve dans le dossier controlelrs.stuff.js
const memberCtrl = require("../controllers/stuff");

router.post("/", memberCtrl.createThings);
router.get("/", memberCtrl.getAllThings);
/* modification la modification et la suppresion
  router.put("/:id", memberCtrl.modifyThing);
 La route pour la suppression de l'objet
 router.delete("/:id", memberCtrl.deleteThing);
 On va juste afficheer (get) un seul nom en récuperant son id
 router.get("/:id", memberCtrl.getOneThing);*/

module.exports = router;
