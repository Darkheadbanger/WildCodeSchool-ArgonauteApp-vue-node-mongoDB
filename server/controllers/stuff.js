const { json } = require("body-parser");
const Thing = require("../models/Thing");
exports.createThings = async (req, res) => {
  const newMember = new Thing({ ...req.body });
  try {
    const member = await newMember.save(); // To BDD
    if (!member)
      throw new Error("Une erreur pendant la création d'un nouveau membre");
    res.status(200).json(member);
  } catch (error) {
    console.error(`Post ${error.message}`);
    return res.status(500).json({ error });
  }
};

// exports.modifyThing = async (req, res) => {
//   const thing = new Thing({ ...req.body });
//   try {
//     const modifyMember = Thing.updateOne(
//       { _id: req.params.id },
//       { ...req.body, _id: req.params.id }
//     );
//     if (!modifyMember)
//       throw new Error(
//         "Quelque chose de mal s'est passé pendant la mdoficiation de membre!"
//       );
//     res.status(200).json({ message: "Objet modifié !" });
//   } catch (error) {
//     console.error(`Modification ${error.message}`);
//     return res.status(400).json({ error });
//   }
// };

// exports.deleteThing = async (req, res) => {
//   try {
//     const deleteMember = Thing.deleteOne({ _id: req.params.id });
//     if (!deleteMember)
//       throw new Error(
//         "Quelque chose s'est mal passé pendant la suppression de membre!"
//       );
//     res.status(200).json({ message: "Objet supprimé! !" });
//   } catch (error) {
//     console.error(`Supprimer ${error.message}`);
//     return res.status(400).json({ error });
//   }
// };

// exports.getOneThing = async (req, res) => {
//   try {
//     const findOneMember = await Thing.findOne({ _id: req.params.id });
//     if (!findOneMember) throw new Error("Ce membre n'as pas été trouvé");
//     res.status(200).json(findOneMember);
//   } catch (error) {
//     console.error(`Get, ${error.message}`);
//     return res.status(500).json({ error });
//   }
// };

exports.getAllThings = async (req, res) => {
  try {
    const findAllThings = await Thing.find();
    if (!findAllThings) throw new Error("Aucun membre n'a été trouvé");
    res.status(200).json(findAllThings);
  } catch (error) {
    console.error(`Get, ${error.message}`);
    return res.status(500).json({ error });
  }
};
