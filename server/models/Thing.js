// Creation de schema de données mongoose strick pour la base de donées, app plus robuste
const { Schema: e, model: i } = require("mongoose"),
// Objet clée valeur indiquant leur caractère (obligatoire ou non, ici obligatoire)
    memberSchema = new e({
        membre: { type: String, required: !0, index: { unique: !1 } },
        sexe: { type: String, required: !0, index: { unique: !1 } },
        age: { type: Number, min: 18, max: 100, required: !0, index: { unique: !1 } },
        date: { type: Date, required: !0, index: { unique: !1 } },
    });
module.exports = i("Thing", memberSchema);
