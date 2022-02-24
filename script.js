
//score 1
let Dauphins1 = 96;
let Dauphins2 = 108;
let Dauphins3 = 89;

let Koalas1 = 88;
let Koalas2 = 91;
let Koalas3 = 110;
//score 2
let Dauphins4 = 97;
let Dauphins5 = 112;
let Dauphins6 = 101;

let Koalas4 = 109;
let Koalas5 = 95;
let Koalas6 = 123;
//score 3
let Dauphins7 = 97;
let Dauphins8 = 112;
let Dauphins9 = 101;

let Koalas7 = 109;
let Koalas8 = 95;
let Koalas9 = 106;

function moyenne(nb1,nb2,nb3)
{
    let resultat = nb1 + nb2 + nb3;
     resultat = resultat / 3;
    return resultat;
}
 function gagnant(brouette1,brouette2)
{
     
        if(brouette1 > brouette2)
        {
            return console.log(brouette1+ " et ils sont les gagnants !!!");
        }else
        {
            return console.log(brouette2+ " et ils sont les gagnants !!!");
        }

}


//  function moyenne(tab){
//     let res = 0;

//     for(i =0; i < tab.lenght;i ++){
//         res +=  tab[i];
//     }
//     let resultat = res / tab.lenght;
//     return resultat;
// }
 
 //main
 let setDauphin1 =moyenne(96,108,89);
 console.log("La moyenne du premier set des dauphin est :"+setDauphin1);
 console.log("**********************************");
 let setKoalas1 =moyenne(88,91,110);
 console.log("La moyenne du premier set des koalas est :"+setKoalas1);
 console.log("**********************************");
 if(setDauphin1 >= 100 || setKoalas1 >= 100){
    console.log(gagnant(setDauphin1,setKoalas1));
 }else{
    console.log("Match nul !!!");
 }
 console.log("**********************************");
 let setDauphin2 =moyenne(97,112,101);
 console.log("La moyenne du second set des dauphins est :"+setDauphin2);
 console.log("**********************************");
 let setKoalas2 =moyenne(109,95,123);
 console.log("La moyenne du second set des dauphins est :"+setKoalas2);
 console.log("**********************************");
 if(setDauphin2 >100 || setKoalas2 > 100){
    console.log(gagnant(setDauphin2,setKoalas2));
 }else{
     console.log("Match nul !!!");
 }
 console.log("**********************************");
 let setDauphin3 =moyenne(97,112,101);
 console.log("La moyenne du troisieme set des dauphins est :"+setDauphin3);
 console.log("**********************************");
 let setKoalas3 =moyenne(109,95,106);
 console.log("La moyenne du troisieme set des dauphins est :"+setKoalas3);
 console.log("**********************************");
 if(setDauphin3 === setKoalas3)
 {
    console.log("Les deux équipes sont ex-aequo")
 }
 else
 {
     console.log("Match nul !!!");
 }
 console.log("**********************************");

 
 