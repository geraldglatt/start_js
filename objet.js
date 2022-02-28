// const billyTheCat = {
//     name: "",
//     color: "",
//     favouriteFoods: ["","",""],
//     isHungry: true,
//     meoh: function(){
//         return "meow....!!!!";
//     }


// }
// billyTheCat.name = "Billy";
// billyTheCat.color = "grey";
// billyTheCat.favouriteFoods.push = "milk";
// billyTheCat.favouriteFoods.push = "fish";
// billyTheCat.favouriteFoods.push = "rat";
// delete billyTheCat.favouriteFoods[2];
//************************************ */
// const fruits = [
//     {name: "apple", color: "green"}, 
//     {name: "Pineapple", color:"yellow"}, 
//     {name: "Orange", color:"orange"}, 
//     {name: "Cherry", color:"red"}, 
// ]
// console.log(fruits);
//*************************************** */
const person1 = {
    name : "Bob", 
    age : 30, 
    sayHello : function(){
        console.log(`Hi, I'm ${this.name}`) ;
    }
}

person1.sayHello() ;
// Puisque "this" à la line 5 se réfère à ce qui précède le "." à la line 9 (person1),
// "this.name" vaudra "Bob", donc la méthode affichera "Hello, I'm Bob"
const velo = {
    marque: "rockrider",
    color: " white and blue",
    start : function(){
        console.log(`Hello, my ${this.marque} is already to start`);
    }
}
velo.start();
console.log("Mon vélo est un "+velo.marque+" et il est de couleur"+velo.color);
console.log(`Mon vélo est un ${velo.marque} et il est de couleur ${velo.color}`);

