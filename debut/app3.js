const {MongoClient} = require("mongodb")

MongoClient.connect('mongodb://127.0.0.1:27017/', function(err,db){
    const mydb = db.db("db1")
    mydb.collection("client",function(err) {
    })
        var client1 = {
            nom : "Dupont",
            prenom : "Valentin",
            adresse : {
            rue : "17 rue Villeneuve",
            cp : "69000",
            ville : "Lyon"
            }}
        
        
            var client2 = {
                nom : "Deedee",
                prenom : "Ramones",
                adresse : {
                rue : "Madison",
                cp : "69000",
                ville : "New-York"
                }
            }
        
        
            var client3 = {
                nom : "Lemy",
                prenom : "Motorhead",
                adresse : {
                rue : "Portobello",
                cp : "69000",
                ville : "London"
                }
            }
        mydb.collection('client').insertOne(client1)
        mydb.collection('client').insertOne(client2)
        mydb.collection('client').insertOne(client3).then(function(){db.close();});
   

})