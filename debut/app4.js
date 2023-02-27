const {MongoClient} = require("mongodb")
const express = require('express');
const app = express();
const cors = require('cors')

const mydb = null
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/clients', (req, res) => {
    
    MongoClient.connect('mongodb://127.0.0.1:27017/', function(err,db){
    const mydb = db.db("db1")
    mydb.collection('client').find({ } )
                             .toArray(function(err,docs){console.log(docs); res.json(docs)});       // function recherche par quantité
    })


})

app.post('/clients', (req, res) => {
    MongoClient.connect('mongodb://127.0.0.1:27017/', function(err,db){
        const mydb = db.db("db1")
        mydb.collection('client')


    })
})









    .listen(8082)

    