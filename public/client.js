window.addEventListener('load', () => {
});

//Text Output
const text = document.getElementById('final-drink');
const text2 = document.getElementById('final-ingredients');

//Image Output
const imageholder= document.getElementById("display-image")

//Variable Names
let alcohol = ""
let type = ""
let fruit = ""

//Submit button
const submitbutton = document.getElementById("Submit-button");

//Radio buttons
//Alcohol
const tequilaRadio = document.getElementById("Tequila");
const vodkaRadio = document.getElementById("Vodka");
const ginRadio = document.getElementById("Gin");
const rumRadio = document.getElementById("Rum");

//Cocktail
const classicRadio = document.getElementById("Classic");
const surpriseRadio = document.getElementById("Surprise");

//Fruit
const lemonRadio = document.getElementById("Lemon");
const limeRadio = document.getElementById("Lime");
const orangeRadio = document.getElementById("Orange");

//Final Output
const name = document.getElementById("name-box");

//Radio Button Functions
tequilaRadio.onclick = async function showTequilaValue() {
    if(tequilaRadio.checked) {
        alcohol = "Tequila";
        console.log("hello");
    }
} 

vodkaRadio.onclick = async function showVodkaValue() {
    if(vodkaRadio.checked) {
        alcohol = "Vodka";
        console.log("hello");
    }
} 

ginRadio.onclick = async function showGinValue() {
    if(ginRadio.checked) {
        alcohol = "Gin";
        console.log("hello");
    }
} 

rumRadio.onclick = async function showRumValue() {
    if(rumRadio.checked) {
        alcohol = "Rum";
        console.log("hello");
    }
}

classicRadio.onclick = async function showClassicValue() {
    if(classicRadio.checked) {
        console.log("hello");
        type = "Ordinary Drink";
    }
} 

surpriseRadio.onclick = async function showSurpriseValue() {
    if(surpriseRadio.checked) {
        console.log("hello");
        type = "Cocktail";
    }
} 

lemonRadio.onclick = async function showLemonValue() {
    if(lemonRadio.checked) {
        console.log("hello");
        fruit = "Lemon";
    }
} 

limeRadio.onclick = async function showLimeValue() {
    if(limeRadio.checked) {
        console.log("hello");
        fruit = "Lime";
    }
} 

orangeRadio.onclick = async function showOrangeValue() {
    if(orangeRadio.checked) {
        console.log("hello");
        fruit = "Orange";
    }
} 

//Submit button on click function
submitbutton.onclick= async function displayRadioValue() {
    console.log(alcohol, type, fruit);
    //one fetch request at the end
    const response = await fetch("/gettotal/" + alcohol + "/" + type + "/" + fruit);
    const data = await response.json();
    console.log(data);

    //returning a random data item 
    const randomElement = data[Math.floor(Math.random() * data.length)];
    console.log(randomElement);

    name.innerHTML = `${randomElement.strDrink}`
    //previously did {data.strIngredient}, didn't work so console.log the randomElement (json format) and that is the new json data
    console.log("This is the list of ingredients: " + randomElement.strIngredient);
    const drinks = randomElement.strIngredient;
    console.log("This is:" + drinks);

    //splitting it into an array based on delimiter ","
    //finalIngredient is an array of strings (strings are the ingredients) 
    let finalIngredient = drinks.split(",");
    console.log(finalIngredient);

    const list = document.getElementById("ingredients-list");
    list.innerHTML = DrinksList(finalIngredient);
    imageholder.src = randomElement.strDrinkThumb; 
    nameText(); 
    ingredientText(); 
    myFunction();

}

function DrinksList(finalIngredient) {
    //ingredient is a value in the array 
    //ingredient is a string 
    return finalIngredient.map((ingredient) => {
        //in quotations, exactly what is in quotations
        // return `<li>${ingredient}<li>`;
        //different way of doing what above
        return `<li>` + ingredient;
        //String Concatanation
    }).join("");
}

function nameText() {
    let nametext = document.getElementById("name-box");
    if (nametext.style.display === "none") {
      nametext.style.display = "block";
    console.log(nametext.style.display);
  }
}

function myFunction() {
    let text1 = document.getElementById("display-image");
    if (text1.style.display === "none"){
        text1.style.display = "block";
    }
    console.log(text1.style.display);
  }


function ingredientText() {
    let text = document.getElementById("show-ingredient-title");
    if (text.style.display === "none") {
      text.style.display = "block";
    } 
  }

