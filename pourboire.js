//main
facture = 275;
const tvaMini = (facture *1.15)-facture;
const tvaMaxi = (facture *1.20)-facture;
(facture > 50 && facture < 300 ? console.log("La note était de "+facture+",le pourboire de "+tvaMini+" et la valeur totale est de "+(facture+tvaMini)) :  console.log("La note était de "+facture+",le pourboire de "+(facture+tvaMaxi)));

const bills = [
    [calcTip(125)],
    [calcTip(555)],
    [calcTip(44)]
];
const totals = [
    [125,calcTip(125)],
    [555,calcTip(555)],
    [44,calcTip(44)]
];

console.log(bills);
console.log(totals);



// console.log(calcTip(100));
//function
function calcTip(tarif){
    let resultat = 0;
    if(tarif <300){
        resultat = Math.round(tarif * 1.15)-tarif;
    }else if(tarif >300){
        resultat = Math.round(tarif * 1.20)-tarif;
    }else{
        return "Vous vous êtes trompé !!!";
    }
    return resultat;
}