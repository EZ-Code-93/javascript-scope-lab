// Write your solution in this file!
//burger array for tracking burger changes
const burgers = ['Hamburger', 'Cheeseburger']
//Updatable global scoped featured drink variable
let featuredDrink = 'Strawberry Milkshake'

//function for adding a new burger to the burgers array. contains a function scoped variable newBurger.
function addBurger (){
    const newBurger = 'Flatburger'
    burgers.push(newBurger)
}

//if statement for adding a new burger to the burgers array. contains a block scoped variable anotherNewBurger.
if(true){
    const anotherNewBurger = 'Maple Bacon Burger'
    burgers.push(anotherNewBurger)
}

//function for updating the featuredDrink variable. function contains an existing variable that is being re-defined.
function changeFeaturedDrink(){
    featuredDrink = 'The JavaShake'
}