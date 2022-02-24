facture = 275;
const tvaMini = (facture *1.15)-facture;
const tvaMaxi = (facture *1.20)-facture;
(facture > 50 && facture < 300 ? console.log("La note était de "+facture+",le pourboire de "+tvaMini+" et la valeur totale est de "+(facture+tvaMini)) :  console.log("La note était de "+facture+",le pourboire de "+(facture+tvaMaxi)));