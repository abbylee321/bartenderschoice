//JUST FOR REFERENCE - EVERYTHING ON SERVER.JS
//did this first, can delete once have database 
const fs = require('fs');
const Datastore = require("nedb");

//autoload - don't have to wait for callback function
const db = new Datastore({filename: "tequila.db", autoload: true});
db.loadDatabase();

//from the script.js 
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

//Recomment in to create new database 
// db.insert(tequilaDrinks, (err, docs) =>{
//     console.log(docs); 
// }); 