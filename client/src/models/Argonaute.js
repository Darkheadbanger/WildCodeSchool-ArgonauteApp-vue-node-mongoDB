export default class Argonaute {
  membre = "";
  sexe = "";
  age = 0;
  createdAt = 0;
  constructor(data = {}) {
    this.loadData(data);
  }
  loadData(Objet = {}) {
    for (let cleObjet in Objet) {
      if (this.hasOwnProperty(cleObjet)) {
        this[cleObjet] = Objet[cleObjet];
      }
    }
  }
}
