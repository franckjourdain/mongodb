const {MongoClient} = require("mongodb")

MongoClient.connect('mongodb://localhost:27017/', {family:4}, function(err,db){
    const mydb = db.db("unicorns")
    mydb.createCollection("users",function(err) {

        //    mydb.collection("users").insertMany([
        //             {firstname: "jeanx" , lastname: "valjeanx", email: "jvx@gmail.com"},
        //             {firstname: "pol"   , lastname: "jones"   , email: "jp@gmail.com" },
        //             {firstname: "jak"   , lastname: "ko"      , email: "jk@gmail.com" }
        //        ],function(err,rep) {
        //        if (err) throw err ;
        //            db.close();
        //    })

       
        mydb.collection('users').find({},{projection:{_id:0, firstname:1}}).toArray(function(err,docs){console.log(docs)});
    })
})