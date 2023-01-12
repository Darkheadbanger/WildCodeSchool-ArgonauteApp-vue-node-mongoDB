// La logique métier de l'API, simplification de la lecture et la gestion du ocde pour le rendre plus modulaire
const 
    Thing = require("../models/Thing");
(exports.createThings = async (req, res) => {
    let newMember = new Thing({
        ...req.body
    });
    try {
        let member = await newMember.save();// Sauvegarde dans la base de donées
        if (!member) throw Error("Une erreur pendant la cr\xe9ation d'un nouveau membre");
        res.status(200).json(member);
    } catch (error) {
        return console.error(`Post ${error.message}`),
        res.status(500).json({error: error});// 500 erreurs du serveur
    }
}),
(exports.getAllThings = async (req, res) => {
    try {
        let findAllMember = await Thing.find();
        if (!findAllMember) throw Error("Aucun membre n'a \xe9t\xe9 trouv\xe9");
        res.status(200).json(findAllMember);
    } catch (error) {
        return console.error(`Get, ${error.message}`), res.status(500).json({
            error: error
        });
    }
});