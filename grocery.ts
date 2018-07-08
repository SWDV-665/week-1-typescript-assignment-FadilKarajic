class Grocery {
    groceries: string[];
    constructor(public dairyFood: string[]) {
        this.groceries=dairyFood;
        
        
    }
}

interface Food {
    dairyFood: string[];  
}

function getFood(food : Food) {
    return food.dairyFood;
}

let dairyProducts=["milk","cheese","yogurt","butter"];
let products = new Grocery(dairyProducts);
document.body.innerHTML = getFood(products);

