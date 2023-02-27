const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

let db= require('./models.js')
console.log("DB->",db)

mongoose.connect("mongodb://127.0.0.1/cusisine", {})

var app= express()
app.use(express.urlencoded({extended:true}))

app.use(express.json())

// declare le repertoire possédant des fichier statiques
app.use(express.static("public"));

// Routes


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get('/crearecette', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/crearecette.html"));
  });

// créé un produit 

app.post("/crearecette",function(req,res){
    db.Recette.create(req.body)
            .then((Recette) => { res.json(Recette)})
})


// affichage des produits 
app.get("/Recettes", function(req,res) {
    db.Recette.find({})
    .then(function(Recette) {
        console.log(Recette)
      res.json(Recette);
    })
    .catch(function(err) {
      res.json(err);
    })
  });



// le produit existe deja. Tester aved Postman en récupérant l'id dun produit existant 
app.post("/recetteAddIngredient/:recette_id", function(req, res) {
    db.Ingredient.create(req.body)
      .then(function(Ingredient) {
        console.log(req.body);
    
        return db.Recette.findOneAndUpdate({ _id: req.params.recette_id }, { $push: { ingredients: Ingredient._id} });
      })
      .then(function(Recette) {
        res.json(Recette);
      })
      .catch(function(err) {
        res.json(err);
      });
});

// fonction qui permet de retrouver un produit ET ses commentaires (reviews) par son :id   
app.get("/recetteI/:id", function(req, res) {
    db.Recette.findOne({ _id: req.params.id })
      .populate("ingredients")
      .then(function(Recette) {
        res.json(Recette);
      })
      .catch(function(err) {
        res.json(err);
      });
});

app.get("/allRecette", function(req, res) {
    db.Recette.find({})
      .populate("ingredients")
      .then(function(Recette) {
        res.json(Recette);
      })
      .catch(function(err) {
        res.json(err);
      });
});

app.listen(8082, function() {
  console.log("Listening on porc 8082");
});
