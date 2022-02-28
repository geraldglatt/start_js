// const myData = {
//     firstName: 'Michel',
//     lastName: 'Vidailhet',
//     job: 'Développeur',
//     birthyear: 1986,
//     subjects: ['Javascript', 'Angular', 'CSS', 'HTML'],
//    };

//    console.log(myData['firstName']);
//    console.log(myData['lastName']);
//    console.log(myData['job']);
//    console.log("Michel connait 4 sujets , et son sujet préféré est le "+myData['subjects'][0]);
//    myData.location = 'Paris';
//    myData['country'] = 'France';
//    console.log(myData);
//********************************* */
// Object.keys retourne toutes les clés de l’objet sous forme de tableau.
// Avec ce tableau de clés, on peut parcourir toutes les propriétés de l’objet.
// const myData = {
//     firstName: 'Michel',
//     name: 'Vidailhet',
//    };
   
//    const keys = Object.keys(myData);
//    console.log(keys);
   
//    keys.forEach(key => {
//     console.log(myData[key]);
//    });
//********************************* */
// Object.values retourne toutes les valeurs de l’objet sous forme de tableau.
// const myData = {
// firstName: 'Michel',
// name: 'Vidailhet',
// };

// const values = Object.values(myData);
// console.log(values);
//********************************** */
//Object.entries retourne un tableau de tableaux contenant chacun 2 éléments, la clé et la valeur.
//Pour parcourir le tableau, le mieux est de destructurer les tableaux contenant la clé et la valeur.
// const entries = Object.entries(myData);

// console.log(entries);

// for (const [key, value] of entries) {
// console.log(`${key}: ${value}`);
// }

// entries.forEach(([key, value]) => {
// console.log(`${key}: ${value}`);
// });
//************************************* */
// 1 - boucler sur le tableau game.scored en affichant pour chaque but “But 1 : Lewandowski”.
// 2 - boucler les “odds” pour calculer la moyenne des probabilités.
// 3 - Afficher les probabilités sur la console. “Probabilité de victoire de Bayern Munich: 1.33”, Probabilité d’égalité : 3.25.
// 4 - Créer un objet représentant les buteurs avec le nombre de buts qu’ils ont marqué.

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer','Pavard','Martinez','Alaba','Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//       [
//         'Burki','Schulz','Hummels','Akanji','Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//    };
//******************************* */
// 5 - Le mot clé this
// const myData = {
//     firstName: 'Michel',
//     lastName: 'Vidailhet',
//     job: 'Développeur',
//     birthyear: 1986,
//     calcAge: function (birthyear) {
//       return 2021 - birthyear;
//     },
//    };
   
//    console.log(myData.calcAge(1986));
//******************************** */
//this permet de pointer vers l’objet contenant la méthode. myData dans ce cas.
//On pourrait y accéder par “myData.birthYear”, mais cela transgresserait la règle du DRY.
// const myData = {
//     firstName: 'Michel',
//     lastName: 'Vidailhet',
//     job: 'Développeur',
//     birthYear: 1986,
//     calcAge: function () {
//       console.log(this);
//       return 2021 - this.birthYear;
//     },
//    };
   
//    console.log(myData.calcAge());
//*************************** */
//Si dans notre code, nous devons utiliser l’âge plusieurs fois, ce n’est pas 
//très optimisé de recalculer l’âge à chaque appel de fonction.
//Exo : optimiser la fonction afin qu’elle ne calcule l’âge qu’une seule fois.
//    const myData = {
//     firstName: 'Michel',
//     lastName: 'Vidailhet',
//     job: 'Développeur',
//     birthYear: 1986,
//     calcAge: function () {
//       console.log(this);
//       return 2021 - this.birthYear;
//     },
//    };
   
//    console.log(myData.calcAge());
//A - Les tableaux sont en fait des objets
//En javascript. Les tableaux sont en fait des objets qui contiennent
// par défaut les méthodes que nous avions étudié dans le cours sur les tableaux.
// const myArray = [
//     'Michel',
//     'Vidailhet',
//    ];
//    console.log(myArray.push('toto'));
//    console.log(myArray);
//B - Les fichiers JSON
//Un fichier de configuration JSON n’est qu’en fait qu’un gros objet Javascript stocké dans un fichier. A quelques différences prêt.
//Les clés sont obligatoirement entre double guillemets.
//Les commentaires ne sont pas autorisés (et c’est chiant).
//Pas de virgule après la dernière propriété.
// {
//     "firstName": "Michel",
//     "lastName": "Vidailhet",
//     "job": "Développeur",
//     "birthyear": 1986,
//     "hasDriverLicense": false
// }
//******************************** */
//Challenge : Mitch et Cyp calculent leurs IMC
//Calcul de l’IMC : poids / (taille * taille). Avec le poids en kilos et la taille en mètres.
//Pour chaque personne, créer un objet avec des propriétés contenant leur nom, poids et hauteur.
//Créer une méthode ‘calcIMC’ dans chaque objet et qui stocke la valeur dans une nouvelle propriété pour les futurs appels et qui retourne l’IMC calculé. Et j’aimerais n’écrire la fonction qu’une seule fois pour les 2 objets.
//Faire un log dans la console “L’IMC de Cyprien (24) est plus grande que celui de Michel (21).
//Données test : Michel Vidailhet, 63Kg, 1,74m et Cyprien Autexier, 85kg et 1,85m.
//********************************** */
//8 - Déstructuration et spread operator
//A - spread operator
//Comme pour les tableaux, ES6 permet l’utilisation du spread operator pour objets.
//Et cela simplifie énormément le code pour manipuler des objets !
// const myData = {
//     firstName: 'Michel',
//     name: 'Vidailhet',
//    };
//    const myData2 = {
//     firstName: 'Cyprien',
//     job: 'Developper'
//    };
//    const myData3 = {
//     ...myData,
//     ...myData2,
//    }
//    console.log(myData3);
//************************** */
//Comme pour les tableaux, ES6 permet l’utilisation du spread operator pour objets.
//Et cela simplifie énormément le code pour manipuler des objets !
// const myData = {
//     firstName: "Michel",
//     name: "Vidailhet",
//     job: "Developer",
//    };
   
//    const { lastName, firstName} = myData;
//    console.log(lastName, firstName);
//******************************* */
// C - La déstructuration (le retour)
// const myData = {
//     firstName: "Michel",
//     lastName: "Vidailhet",
//     job: "Developer",
//    };
   
//    const { sex = "man", lastName: newName} = myData;
//    console.log(sex, newName);
//D - La déstructuration (le reretour)
//Mutation de variables
// let a = 1;
// let b = 2;

// const obj = { a: 5, b: 7, c: 8};

// ({a, b} = obj);

// console.log(a, b);


 



  
   


   