
const {MongoClient} = require("mongodb")

MongoClient.connect('mongodb://127.0.0.1:27017/', function(err,db){
    const mydb = db.db("unicorns")
    mydb.collection("users",function(err) {

        // mydb.collection('produit').find({ quantity: { $gt: 12} } ,
        //                                 {projection: {_id:0,reviews: 0},
        //                                 sort: {quantity:1}})
        //                             .toArray(function(err,docs){console.log(docs)});       // function recherche par quantité
    })
        // mydb.collection('food').insertMany([
        //     {name: "couscous", description: "semoule legumes poulet pois chiche"},   // ajout objet dans bdd mongodb
        //     {name: "choucroute", description: "choux, croute"},
        //     {name: "paela", description: "plat espagnol"},
        // ])

//     mydb.collection('food').updateOne({name: 'choucroute'}, 
//                                        { $set: {description: 'chou saucisses'}})
// })

// mydb.collection('produit').updateMany({  },{$set: {quantity: 10}})

// mydb.collection('produit').updateMany({  } , { $set: { quantity: 20 } })
//                               .then(function(){ db.close() })
//                               .catch(function(err){ console.error(err) })


mydb.collection('users').find({ firstname: {$in: ['jak','pol']}}).toArray(function(err,docs){console.log(docs)});

  
})