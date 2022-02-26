//main
// facture = 275;
// const tvaMini = (facture *1.15)-facture;
// const tvaMaxi = (facture *1.20)-facture;
// (facture > 50 && facture < 300 ? console.log("La note était de "+facture+",le pourboire de "+tvaMini+" et la valeur totale est de "+(facture+tvaMini)) :  console.log("La note était de "+facture+",le pourboire de "+(facture+tvaMaxi)));

// const bills = [
//     [calcTip(125)],
//     [calcTip(555)],
//     [calcTip(44)]
// ];
// const totals = [
//     [125,calcTip(125)],
//     [555,calcTip(555)],
//     [44,calcTip(44)]
// ];

// console.log(bills);
// console.log(totals);
const test =[22,195,176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
for(let i = 0; i < test.length;i++)
{
    console.log(tip.push = calcTip(test[i])) ;
}
console.log("***************************");
const total = [];
for(let i = 0; i < test.length;i++)
{
    console.log(total.push = test[i]);
}
console.log("***************************");

console.log("La moyenne du tableau test est :"+calcAverage(test));






// console.log(calcTip(100));
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

function calcAverage(tab){
    let moy = 0;
    let resultat  = 0;
    for(let i =0; i < tab.length;i ++){
        moy = moy + tab[i];   
    }
    return resultat = moy / tab.length;
    
} 



