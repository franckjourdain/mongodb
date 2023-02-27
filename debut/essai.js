const {MongoClient} = require("mongodb")

MongoClient.connect('mongodb://localhost:27017/',{family: 4},function(err,db){
    var mydb = db.db("unicorns")
    mydb.createCollection("users",function(err) {

           mydb.collection("users").insertMany([
                    {firstname: "jeanx" , lastname: "valjeanx", email: "jvx@gmail.com"},
                    {firstname: "pol"   , lastname: "jones"   , email: "jp@gmail.com" },
                    {firstname: "jak"   , lastname: "ko"      , email: "jk@gmail.com" }
               ],function(err,rep) {
               if (err) throw err ;
                   db.close();
           })
    })
})

// le code fonctionne avec la version 17.9.1 de node et version 3.0.1 de mongo db
