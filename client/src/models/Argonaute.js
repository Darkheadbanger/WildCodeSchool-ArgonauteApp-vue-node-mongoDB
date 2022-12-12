export default class Argonaute {
  membre = "";
  sexe = "";
  age = 0;
  constructor(data = {}) {
    this.loadData(data);
  }
  loadData(Objet = {}) {
    // Nous bouclons l'objet pour verifier si la clé de l'objet est exact et que si elles existes réelement
    // et posséder par l'objet
    for (let cleObjet in Objet) {
      if (this.hasOwnProperty(cleObjet)) {
        this[cleObjet] = Object[cleObjet];
      }
    }
  }
}
