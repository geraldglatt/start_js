let fruits = ["apple","banana","cherry","strawberry","pear",];
console.log(fruits[0]);
//longueur d'un tableau
console.log(fruits.length);
//ajouter un nouvel élément au tableau,celui-ci sera ajouter à la fin du tableau 
fruits.push("pineapple");
console.log(fruits);
//ajouter un nouvel élément au tableau,celui-ci sera ajouter au début du tableau 
fruits.unshift('mango');
console.log(fruits);
//Pour supprimer le dernier élément d’un tableau, utilise la méthode pop
fruits.pop();
console.log(fruits);
//Pour supprimer le premier élément d’un tableau, utilise la méthode shift
fruits.shift();
console.log(fruits);
//includes retournera vrai ou faux si le tableau comprend l’élément donné.
console.log(fruits.includes("banana"));
//indexOf retournera la première position obtenue lorsque l’élément a été vu
// ou -1 si aucun element dans le tableau ne correspond.
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("apple"));
//concat fusionnera deux tableaux en un seul 
let vegetables = ["carrot","leeks","tomato","zucchini","potato"];
console.log(fruits.concat("-",vegetables));
//pour rien
console.log(fruits);
//join transformera ton tableau en une chaîne de caractères; tu peux
// également spécifier le caractère que tu souhaites utiliser comme séparateur.
console.log(fruits.join(","));
//C’est un peu l’opération inverse de join. splice part d’une chaine de caractères
let texte = ["ceci est une phrase"];
console.log(fruits.splice(texte,1));
//******************************** */
let marque = ["Renault","Peugeot","Nissan","Honda"];
let voiture = ["Espace","Megan","clio","Scenic"];
console.log([...marque,...voiture]);
/********************************** */
const animals = ["je", "tu","il", "nous", "vous", "ils"];
for(let i = 0; i < animals.length;i++){
    console.log(animals[i]);
}
let i = 10; 

while (i > 0) {
    console.log(`animal ${i}`);
    i--;
}
//********************** */
let sum = 0;

for (let i = 0; i < 10; i++) {
  const name = "Pierre";
  console.log(name + " saw " + sum + " StarWars movies.");
  sum++;
  // fonctionne correctement dans le contexte de la boucle
}
//***************************** */
let j = 0; 

do {
    console.log(`turn number ${j}`);
    j++;
}while (j < 5);
//******************************* */

// console.log(sum);
// tu verras la valeur de sum
   
// console.log(name);=>produit une erreur
// tu verras une erreur 'reference error: name is not defined'
//********************************** */
//on retourne ici les elements du tableau s>= à 10
// const numbers = [1,2,3,7,3,10,100];
// const filterNumbers = numbers.filter((element) => {
//     return element >= 10;
// })
// console.log(filterNumbers);
//********************************** */
//Maintenant , on va retourner tous les elements du tableau en  * 2 les elements(numbers) avec la fonction map()
// const numbers = [1,2,3,7,3,10,100];
// const numbers2 = numbers.map((element) => {
//     return element *2;
// })
// console.log(numbers2);
//*********************************** */
//Ici, on va recuperer l'element qui est le plus grand avec reduce
// const numbers = [1,2,3,7,3,10,100];
// const reduceFunction = (max, current) => {
//     return Math.max(max,current )};
// const filterFunction = (element) => {
//     return element < 7;
// }
// const reduce = numbers.filter(filterFunction).reduce(reduceFunction);

// console.log(reduce);
//************************************ */

// let numbers = [0,1];
// let numbers2 = [...numbers];
// numbers[0] = 2;
// console.log(numbers);
// console.log(numbers2);

//tableau de tableau
const arrayofarray = [
    [1,2,3],
    ["one","two","three"],
    [true,false]
];
// for(let i = 0; i < arrayofarray.length;i++){
//     console.log(arrayofarray[i]);
// }
    for(let i = 0; i < arrayofarray.length;i++){
        for(let j = 0; j < arrayofarray[i].length;j++){
            console.log(arrayofarray[i][j]);
        }
    }

    const arrayofarray2 = [...arrayofarray];
    arrayofarray[0][1] = 3;

    console.log(arrayofarray);
    console.log(arrayofarray2);




