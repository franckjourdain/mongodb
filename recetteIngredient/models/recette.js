var mongoose= require("mongoose");

var Schema = mongoose.Schema;

var RecetteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pays: {
        type: String,
        required: true
    },
    duree: {
        type: String,
        required: true
        
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }]
});

var Recette = mongoose.model("Recette", RecetteSchema);

module.exports = Recette; 