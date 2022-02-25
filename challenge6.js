
//Main
let dauphins1 = [43,21,71];
let dauphins2 = [85,54,41];
let koalas1 =  [65,54,49];
let koalas2 = [23,34,27];

team1 = ["dauphins",calcAverage(dauphins1)];
team2 = ["Koalas",calcAverage(koalas1)];
team3 = ["dauphins",calcAverage(dauphins2)];
team4 = ["dauphins",calcAverage(koalas2)];

console.log("La moyenne du premier set de l'équipe des dauphins est : "+calcAverage(dauphins1));
console.log("*********************");
console.log("La moyenne du deuxième set de l'équipe des dauphins est : "+calcAverage(dauphins2));
console.log("*********************");
console.log("La moyenne du premier set de l'équipe des koalas est : "+calcAverage(koalas1));
console.log("*********************");
console.log("La moyenne du deuxième set de l'équipe des koalas est : "+calcAverage(koalas2));
console.log("*********************");
// console.log(team1[1]);
console.log(winner(team1,team2));
console.log("*********************");
console.log(winner(team3,team4));





//function
function calcAverage(tab){
    let moy = 0;
    let resultat  = 0;
    for(let i =0; i < tab.length;i ++){
        moy = moy + tab[i];   
    }
    return resultat = moy / tab.length;
    
} 
function winner(team1,team2){
    
    if((team1[1] / 2) >= team2[1])
    {
        return "L'équipe des "+team1[0]+ " gagne ("+team1[1]+" VS "+team2[1]+")";
    }else if((team2[1] / 2) >= team1[1])
    {
        return "L'équipe des "+team2[0]+ " gagne ("+team2[1]+" VS "+team1[1]+")";
    }else{
        return "Aucune équipe ne gagne !!!";
    }
}


