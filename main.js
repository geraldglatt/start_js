
// 'strict mode';
// console.log("Hello,World !!!");
// console.log(2+6);
// console.log("Hello world");
// 1 !== "1";
// console.log(1 === "1");
// console.log("1" === "1");
// console.log("test" === "test");
// console.log('a' < 'b');
// console.log('ab' < 'ba');
// console.log('*a' < 'aa');
// console.log('&#3');
// let x = 12.2;
// console.log(Math.ceil(x)); // 13 (arrondit à l'entier au dessus)
// console.log(Math.round(x)); // 12 (arrondit à l'entier le plus proche)
// console.log(Math.floor(x)); // 12 (arrondit à l'entier en dessous)
// console.log(1 === '1');
// var myName = "Bob";
// console.log(myName);

// const myJob = "Good";
// console.log('myJob');
// let bad = "bad";
// console.log(bad);;
// let myBudget = 0;
// ++myBudget;
// console.log(myBudget);
// console.log(--myBudget);
// console.log(myBudget);
// // myBudget+=2;
// // console.log(myBudget);
// // myBudget = myBudget +1;
// // console.log(myBudget);
// // myBudget--;
// // console.log(myBudget);
// let hello = "Hello";
// hello += " world";
// console.log(hello);
// let message;

// message = 'Hello!';

// message = 'World!'; // valeur changée

// alert(message);

// let recette;

// recette = "carbo";

// recette = "tajine";

// console.log(recette);

// let recette1 = "couscous";
// recette1 = "boulette";
// console.log(recette1);

//exercice donkey js

// let name = "john";
// let admin = name;
// console.log(admin);

// let a = 1, b = 1;
// let c = ++a; // ?
// console.log(a);
// let d = b++; // ?
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);



// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof 125);
// console.log(typeof 12.8);
// console.log(typeof "cool");
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof console.log);
// console.log(typeof array);
// const pass = prompt("What is the magic password?");
// We compare the value assigned to pass to the string "secret"
// if (pass === "secret") {
//     // If the pass matches the string we print Welcome
//     console.log("Welcome! 👋 ");
// } else {
//     // If the pass doesn't match the string we print Welcome
//     console.log("Wrong password! ❌");    
// }

// const age = prompt("How old are you?");
// console.log(typeof(age));
// String

// const ageNumber = parseInt(age);
// console.log(typeof(ageNumber));
// Number
// const user = prompt("What's your name?");

// if(user === "Paul"){
//   console.log("Hello, Paul!");
// }else if(user === "John"){
//   console.log("Hello, John!");
// }else if(user === "Ringo"){ 
//   console.log("Hello, Ringo!");
// }else{
//   console.log("Sorry, not today...");
// }
// const age = prompt("Veuillez rentrez votre age svp ???");
// if(age <= 3)
// {
//     console.log("Hello, baby !");
// }else if(age >=4  && age <18)
// {
//     console.log("Hi !!!");
// }else if(age >= 18 && age <100){
//     console.log("Greetings !!!");
// }else
// {
//     console.log("whow !!!");
// }
// const userName = prompt("What's your name ?");
// if(userName === "Paul")
//     {
//        const userPass = prompt("What's the secret code ?");
//        if(userPass === "secret")
//        {
//            console.log("welcomePaul !!!!");
//        }else{
//            console.log("sorry !!!! the secret wordpass is wrong...");
//        }
//     }else
//     {
//         console.log("Wrong credential,sorry ...!!!");
//     }
// const userName = prompt("What's your name");
//     if(userName === "Bob")
//     {
//         const age = prompt("Whats your age ?");
//             if(parseInt(age) === 30){
//                 console.log("Welcome, bob !!!");
//             }else{
//                 console.log("Sorry ! you can't enter in this show...");
//             }
//     }else{
//         console.log("Go away! see you letter...");
//     }
// let userCountry = prompt("Rentrez votre pays");
// switch(userCountry){
//     case "France" : console.log("Bonjour !");
//     break;
//     case "England" : console.log("Welcome !!!");
//     break;
//     case "Portugal" : console.log("Bondia !!!");
//     break;
//     default : console.log("Go Away !!!");
//     break;
// const userName = prompt("Quel est votre nom ?");
// (userName === "bob") ? console.log("Welcome") : console.log("Go away !!!");


// const animal = {
//     name: "Lucky", 
//     species: "Cat", 
//     age: "3",
//   }
// console.log(animal.name === "Lucky" ? console.log("Welcome Lucky") : console.log("go away !!!"));

// let name = "Pierre";

// if (name === "Pierre") {
//     const city = "New York";
//     if (city === "New York") {
//         console.log("Welcome " + name + " in " + city);
//     } else {
//         console.log("Welcome " + name); 
//     }
//     /// fonctionne correctement à l'intérieur du contexte de la condition
// } else {
//    console.log(name)
//    /// tu verras s'afficher Pierre

//    console.log(city)
//    /// tu verras une error 'reference error: city is not defined'
// } 
// let message = "bonjour";
// let secondCharacter = message[1];
// console.log(message[secondCharacter]);   
// let message = 'bonjour';
// let jourIndex = message.indexOf('jour');
// console.log(jourIndex);
// let message = 'bonjour';
// let found = message.includes('jour');
// console.log(found); // true
// let message = 'bonjour';
// let message2 = message.slice(3, 5);
// console.log(message2); // "jo"

// let message = 'bonjour';
// console.log(message.toUpperCase(message));
// console.log(message.toLowerCase(message));

// 

let tailleMarcel1 = 1.95;
let poidsMarcel1 = 92;
let tailleMarcel2 = 1.76;
let poidsMarcel2 = 85;

let tailleBernard1 = 1.69;
let poidsBernard1 = 78;
let tailleBernard2 = 1.88;
let poidsBernanrd2 = 95;



let imcMarcel1 = 92 / (1.95* 1.95);
console.log(imcMarcel1);
console.log("***************");
let imcMarcel2 = 85 / (1.76*1.76);
console.log(imcMarcel2);
console.log("***************");
let imcBernard1 = 78 / (1.69*1.69);
console.log(imcBernard1);
console.log("***************");
let imcBernard2 = 95 / (1.88*1.88);
console.log(imcBernard2);
console.log("***************");
console.log("Le poids du premier imc de Marcel est de : "+imcMarcel1);
console.log("Le poids du deuxième imc de Marcel est de : "+imcMarcel2);
console.log("Le poids du premier imc de Bernard est de : "+imcBernard1);
console.log("Le poids du deuxième imc de Bernard est de : "+imcBernard2);

function imcBernard(marcel,bernard)
{
    if(marcel > bernard)
    {
        return true;
        
    }else
    {
        return false;
        
    }
}
console.log("*****************************");
console.log(imcBernard(imcMarcel1,imcBernard1));
imcBernard(imcMarcel1,imcBernard1) ? console.log("Marcel à un imc plus grand que celui de Bernard !!!") : console.log("Bernard à un imc plus grand que celui de Marcel");
console.log("******************************");
console.log(imcBernard(imcMarcel2,imcBernard2));
imcBernard(imcMarcel2,imcBernard2) ? console.log("Marcel à un imc plus grand que celui de Bernard !!!") : console.log("Bernard à un imc plus grand que celui de Marcel");
console.log("********************************");
if(imcBernard1 < 18)
{
    console.log("Bernard est en insufficance pondéral !!!");
}else if (imcBernard1 > 18 && imcBernard1 < 25)
{
    console.log("Bernard à son imc de normal !!!");
}else{
    console.log("Bernard est en excès,arrete les burgers et les pizzas !!!");
}
console.log("********************************");
if(imcBernard1 < 18)
{
    console.log("Bernard est en insufficance pondéral !!!");
}else if (imcBernard2 > 18 && imcBernard2 < 25)
{
    console.log("Bernard à son imc de normal !!!");
}else{
    console.log("Bernard est en excès,arrete les burgers et les pizzas !!!");
}
console.log("********************************");
if(imcMarcel1 < 18)
{
    console.log("Marcel est en insufficance pondéral !!!");
}else if (imcMarcel1 > 18 && imcMarcel1 < 25)
{
    console.log("Marcel à son imc de normal !!!");
}else{
    console.log("Marcel est en excès,arrete les burgers et les pizzas !!!");
}
console.log("********************************");
if(imcMarcel2 < 18)
{
    console.log("Marcel est en insufficance pondéral !!!");
}else if (imcMarcel2 > 18 && imcMarcel2 < 25)
{
    console.log("Marcel à son imc de normal !!!");
}else{
    console.log("Marcel est en excès,arrete les burgers et les pizzas !!!");
}


    

