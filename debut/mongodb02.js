const mongoClient =require('mongodb').MongoClient;
const url="mongodb://127.0.0.1:27017/";

mongoClient.connect(url,function(err,client) {
    if(err) {console.log("erreur")}
    console.log("connection a mongodb")
    let datab = client.db("bdd13");
    let contact = {name:"openlab", adresse:"9 rue armand rousseau"}
    try {
        datab.collection("adresses").insertOne(contact, ()=>{
            client.close();
            process.exit()})
    } catch (e) {
        console.log(e)

    }
})





// const mongoclient = require('mongodb').MongoClient;
// const url = 'mongodb://127.0.0.1:27017';

// mongoclient.connect(url, function(err, client) {

//     if(err) {console.log('erreur')}
//     console.log('connecté');
//     let datab = client.db('bdd13')

//     let contact = { name: 'openlab', email: 'nnheo@example.com' }

//     try {
//         datab.collection('contact').insertOne(contact, function(err, res) { 
//                         client.close() 
//                         process.exit() 
                            
//                     })
    

//     }catch (e) {
//         console.log(e)
//     }



// })