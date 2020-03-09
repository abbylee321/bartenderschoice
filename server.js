const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express(); 
const Datastore = require('nedb');

app.use(express.static('public'));
app.use(express.json());

//autoload - don't have to wait for callback function
const db = new Datastore({filename: "tequila.db", autoload: true});
db.loadDatabase();

//from the script.js 
//prints out all pizza toppings with unique ID(see in terminal) and it inserts into toppings.db file 
const content = fs.readFileSync("drinks.json");
let drinksObj = JSON.parse(content);

let tequilaDrinks = drinksObj.drinks;  
//drinksObj is equal to "drinks" in drinks.json file 
//tequilaDrinks is a JSON array from the drink.json drinks field

//recipe is each JSON entry in tequila drinks
// tequilaDrinks = tequilaDrinks.map((recipe) => {
//     return {
//         popularDrink: 
//     };
// }); 

//Run in beginning - Recomment in to create new database 
// db.insert(tequilaDrinks, (err, docs) =>{
//     console.log(docs); 
// }); 

//Get all drinks that have "Tequila" in the strDrink field 
app.get('/getdrinks', (req, res) => {
    db.find({strDrink: /Tequila/}, (err,data) => {
        if (err) {
            response.end();
            //get out of here
            return; 
        }
        res.json(data);
    }); 
});

//Get all drinks that have "Egg White" in the strDrink field 
app.get('/getegg', (req, res) => {
    db.find({strIngredient: /Egg white/}, (err,data) => {
        if (err) {
            response.end();
            //get out of here
            return; 
        }
        res.json(data);
    }); 
});

//Get all drinks that have "Powdered sugar" in the strDrink field 
app.get('/getsugar', (req, res) => {
    db.find({strIngredient: /Powdered sugar/}, (err,data) => {
        if (err) {
            response.end();
            //get out of here
            return; 
        }
        res.json(data);
    }); 
});

//listening on port 3000
app.listen(3000, () => {
    console.log("Server listening on http:localhost:3000")
});
