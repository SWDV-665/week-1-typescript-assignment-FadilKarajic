class Grocery{   

    dairy:string;
    quantities:number;
    constructor(dairyFoods:string,dairyQuantities:number){
        this.dairy=dairyFoods + dairyQuantities;
    }


}
function getFood(dairyFoods,dairyQuantities){
    return dairyFoods+dairyQuantities;
}

let dairyProducts=["milk","cheese","yogurt","butter"]
let dairyProductQuantites=[1,2,3,4]
document.body.innerHTML=getFood(dairyProducts,dairyProductQuantites);

