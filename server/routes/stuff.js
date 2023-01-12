// La logique de routing qui va pointer vers le controllers qui est la logique globale de l'application
// Il contient la logique de mes routes
const express = require("express"),
    router = express.Router(),
    memberCtrl = require("../controllers/stuff");

router.post("/", memberCtrl.createThings),
router.get("/", memberCtrl.getAllThings),

module.exports = router;