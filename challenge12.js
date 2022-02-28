const viewTemp = [17,21,23];
cpt = 0;
for(let i = 0;i <viewTemp.length;i++){
    cpt++;
    if(cpt <= 1){
        console.log(viewTemp[i]+" degré dans "+cpt+" jour");
    }else{
        console.log(viewTemp[i]+" degré dans "+cpt+" jours");
    }
    
}
tmp = 0;
const viewTemp2 = [12, 5, -5, 0, 4];
for(let j = 0;j <viewTemp2.length;j++){
    tmp++;
    if(tmp <=1){
        console.log(viewTemp2[j]+" degré dans "+tmp+" jour");
    }else{
        console.log(viewTemp2[j]+" degré dans "+tmp+" jours");
    }

}