const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

let db= require('./models.js')
console.log("DB->",db)

mongoose.connect("mongodb://127.0.0.1/magasin", {})

var app= express()
app.use(express.urlencoded({extended:true}))

app.use(express.json())

// declare le repertoire possédant des fichier statiques
app.use(express.static("public"));

// Routes

// __dirname : chemain absolu de notre application web 
// jointure de _direname avec "public/index.html" en renvo sur le navigateur le contenu de index.html 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get('/creaprod', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/creaprod.html"));
  });

// créé un produit 

app.post("/creaprod",function(req,res){
    db.Product.create(req.body)
            .then((Product) => { res.json(Product)})
})


// affichage des produits 
app.get("/products", function(req,res) {
    db.Product.find({})
    .then(function(Product) {
        console.log(Product)
      res.json(Product);
    })
    .catch(function(err) {
      res.json(err);
    })
  });



// le produit existe deja. Tester aved Postman en récupérant l'id dun produit existant 
app.post("/productaddreview/:product_id", function(req, res) {
    db.Review.create(req.body)
      .then(function(Review) {
        console.log(req.body);

       // si la review est créée avec succes il faut retrouver le produit et executer cette fonction mongoose
       // new true indique qu'on veut récupèrer le nouveau produit créé
       // on peut chainer sur then qui renvoi le produit modifié 
       // return db.Product.findOneAndUpdate({ _id: req.body.id }, { $push: { reviews: Review._id} }, { new: true });
       
    
        return db.Product.findOneAndUpdate({ _id: req.params.product_id }, { $push: { reviews: Review._id} });
      })
      .then(function(Product) {
        res.json(Product);
      })
      .catch(function(err) {
        res.json(err);
      });
});

// fonction qui permet de retrouver un produit ET ses commentaires (reviews) par son :id   
app.get("/productR/:id", function(req, res) {
    db.Product.findOne({ _id: req.params.id })
      .populate("reviews")
      .then(function(Product) {
        res.json(Product);
      })
      .catch(function(err) {
        res.json(err);
      });
});

app.get("/allProducts", function(req, res) {
    db.Product.find({})
      .populate("reviews")
      .then(function(Product) {
        res.json(Product);
      })
      .catch(function(err) {
        res.json(err);
      });
});

app.listen(8082, function() {
  console.log("Listening on port 3030 ou 8082 , on sais pas trop ");
});
