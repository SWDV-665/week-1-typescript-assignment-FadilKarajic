var Grocery = /** @class */ (function () {
    function Grocery(dairyFoods, dairyQuantities) {
        this.dairy = dairyFoods + dairyQuantities;
    }
    return Grocery;
}());
function getFood(dairyFoods, dairyQuantities) {
    return dairyFoods + dairyQuantities;
}
var dairyProducts = ["milk", "cheese", "yogurt", "butter"];
var dairyProductQuantites = [1, 2, 3, 4];
document.body.innerHTML = getFood(dairyProducts, dairyProductQuantites);
