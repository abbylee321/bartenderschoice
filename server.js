const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express(); 
//read in mongoose library
const mongoose = require("mongoose");

require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL; 

mongoose.connect(MONGO_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
//   console.log("Connected to database!");
});

//helpful for user names, addresses 
//schema = blueprint, what are the attributes of drink (name, type)
const DrinkSchema = mongoose.Schema({
  strDrink: {type: String},
  strDrinkThumb: {type: String},
  idDrink: {type: String},
  strIngredient: {type: String},
  strCategory: {type: String}
}); 

//variable that holds access to database
//Drink is name of DrinkSchema
 const Drink = mongoose.model("Drink", DrinkSchema);


// static file server
app.use(express.static('public'));
// if there is a request body, parse it as JSON
app.use(express.json());

//getalcohol is the route
//:alcohol is the parameter 


app.get('/gettotal/:alcohol/:type/:fruit', (req, res) => {
    // console.log(req.params.alcohol,req.params.type,req.params.fruit)
    Drink.find({$and: [{strIngredient: new RegExp(req.params.alcohol)}, {strCategory: new RegExp(req.params.type)}, {strIngredient: new RegExp(req.params.fruit)}]}, (err,drinks) => {
        res.json(drinks);
        // console.log(drinks);
    });
});



//data and URL don't communicate with one another 
//1. how to pass multiple parameters in URL 
//2. How to write on the backend to query the database


//listening on port 3000
// app.listen(3000, () => {
//     console.log("Server listening on http:localhost:3000")
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});

