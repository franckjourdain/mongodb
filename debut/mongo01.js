const {MongoClient} = require("mongodb")

MongoClient.connect('mongodb://127.0.0.1:27017/',{ useUnifiedTopology: true }, function(err,db){
    var mydb = db.db("bdd13")
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