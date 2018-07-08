var Grocery = /** @class */ (function () {
    function Grocery(dairyFood) {
        this.dairyFood = dairyFood;
        this.groceries = dairyFood;
    }
    return Grocery;
}());
function getFood(food) {
    return food.dairyFood;
}
var dairyProducts = ["milk", "cheese", "yogurt", "butter"];
var products = new Grocery(dairyProducts);
document.body.innerHTML = getFood(products);
