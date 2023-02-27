var mongoose= require("mongoose");

var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
ingr_name: {
    type : String,
    required: true
}

});
var Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;