//db.js - creating the database 
const fs = require('fs');
const mongoose = require("mongoose");

require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL; 

mongoose.connect(MONGO_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database!");
});

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
  const content = fs.readFileSync("drinks.json");
  let drinksObj = JSON.parse(content);
  let tequilaDrinks = drinksObj.drinks; 
//drinks is the object within my drinks.json file 

//Recomment in to create new database 
Drink.insertMany(tequilaDrinks, (err, docs) =>{
   // console.log(docs); 
   // console.log(err);
}); 
