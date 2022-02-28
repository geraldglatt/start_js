// const apple = {
//     color: "#00FF00",
//     diameter: 10,
//     isEaten: false,
//     vitamins: ["A","B1","B2","B6","C"],
//     variety: {code: 576, name: "Granny Smith"},
//     gather: function(){
//         return "Here's one apple";
//     }
// }
// console.log(apple.color);
// console.log(apple['color']);
// const selectedProperty = prompt('Tape la propriété que tu veux afficher') ;
// console.log(apple[selectedProperty]) ;

// let user = {};
//set
// user['like birds'] = true;
// console.log(user);
//get
// alert(user['like birds']);

//delete
// console.log(delete user["like birds"]);
//*********************** */
//Proprietes calculees
// let fruit = "apple";
// let bag = {
//     [fruit]: 5,
// };
// console.log(bag);
const donneesBernard1 = {
    prenom: "Bernard",
    poids: 78,
    taille: 1.69,
   

    calcBMI: function(poids,taille){
        return (Math.round(poids /(taille*taille)));
    }
}
const donneesMarcel1 = {
    prenom: "Marcel",
    poids: 92,
    taille: 1.95,
   

    calcBMI: function(poids,taille){
        return (Math.round(poids /(taille*taille)));
    }
}
const donneesBernard2 = {
    prenom: "Bernard",
    poids: 95,
    taille: 1.88,
   

    calcBMI: function(poids,taille){
        return (Math.round(poids /(taille*taille)));
    }
}
const donneesMarcel2 = {
    prenom: "Marcel",
    poids: 85,
    taille: 1.76,
   

    calcBMI: function(poids,taille){
        return (Math.round(poids /(taille*taille)));
    }
}
console.log(donneesBernard1.calcBMI(donneesBernard1.poids,donneesBernard1.taille));
console.log(donneesMarcel1.calcBMI(donneesMarcel1.poids,donneesMarcel1.taille));
console.log(donneesBernard2.calcBMI(donneesBernard2.poids,donneesBernard2.taille));
console.log(donneesMarcel2.calcBMI(donneesMarcel2.poids,donneesMarcel2.taille));
/************************************ */
console.log(`L'imc de Bernard (${donneesBernard1.calcBMI(donneesBernard1.poids,donneesBernard1.taille)}) est plus grand que l'IMC de marcel (${donneesMarcel1.calcBMI(donneesMarcel1.poids,donneesMarcel1.taille)})`);
console.log(`L'imc de Bernard (${donneesBernard2.calcBMI(donneesBernard2.poids,donneesBernard2.taille)}) est égal à l'IMC de marcel (${donneesMarcel2.calcBMI(donneesMarcel2.poids,donneesMarcel2.taille)})`);





