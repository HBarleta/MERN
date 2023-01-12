 arr = Object.freeze([1,2,3,4])
const obj = {"Harry": 12}
obj["Jerry"] = 44;
console.log(obj)
// using Object.freeze() will not allow any modification to this array since const variable arrays can still be manipulated
// const objects can also be mainpulated




const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);

const needThyme1 = [ ...groceryList, {"item": "Thyme", "haveIngredient": false}];
// one way of creating a new array with all items in groceryList array and adding a new item Thyme to the end
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false}]);
// another way of creating a new array with all items in grocerList is by using the .concat method which will mash the grocery list array into the passed in argment

const gotTheThyme = [...needThyme.slice(0,5), {...needThyme[5], "haveIngredient": true}]

//the (...) spread operator will take all values in needThyme and when used with the slice method slice(0,5) it will only take all elements from 0
// and up to but not including index 5. Now that all elements are in the first part of gotTheThyme array the comma sperates a new entry into the array
// and and using the data from needThyme[5] it will overwrite the "haveIngredient" key as true.
// gotTheThyme[...all elements from needThyme starting at index 0 and up to but not including 5, {a new object to be added to the array with all data from needThyme[5], "haveIngredient" key is already in needThyme[5] so using a comma separator it will overwrite the value to true}]

const notNeceCelery = [...gotTheThyme.slice(0,2),...gotTheThyme.slice(3)];

// console.log(needThyme)
// console.log(gotTheThyme);
// console.log(notNeceCelery)

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort();
// .sort cannot change a freeze object however, creating a new array with the spread operator and sort function will sort all elements in a manner.
// console.log(sortedItems)

const numbers = [10,5,3,12,22,8];
const newNums = numbers.sort();
//this will not sort numbers into numerical value since .sort will convert all elements into strings first
console.log(newNums)


const pokémon = Object.freeze([
      { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
      { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
      { "id": 9,   "name": "Blastoise",  "types": ["water"] },
      { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
      { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
      { "id": 23,  "name": "Ekans",      "types": ["poison"] },
      { "id": 24,  "name": "Arbok",      "types": ["poison"] },
      { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
      { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
      { "id": 52,  "name": "Meowth",     "types": ["normal"] },
      { "id": 63,  "name": "Abra",       "types": ["psychic"] },
      { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
      { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
      { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
      { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
      { "id": 98,  "name": "Krabby",     "types": ["water"] },
      { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
      { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
      { "id": 133, "name": "Eevee",      "types": ["normal"] },
      { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
      { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
      { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
      { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
  ]);
  

// an array of pokémon objects where the id is evenly divisible by 3
const divBy3 = pokémon.filter(x=>{
    if(x.id % 3 === 0){
      return x
    }
})
console.log(divBy3);


// an array of pokémon objects that are "fire" type
const fireType = pokémon.filter(x=> x.types.includes("fire"))
console.log(fireType)

// an array of pokémon objects that have more than one type
const multiType = pokémon.filter(x=> x.types.length > 1)
console.log(multiType)

// an array with just the names of the pokémon
const namesOnly = pokémon.map(x=> x.name)
console.log(namesOnly)

// an array with just the names of pokémon with an id greater than 99
const namesAndGreaterThan99 = pokémon.filter(x=> x.id > 99).map(poke => poke.name)
console.log(namesAndGreaterThan99)

// an array with just the names of the pokémon whose only type is poison
const namesOfPoisonOnly = pokémon.filter(x=> x.types.includes("poison") && x.types.length === 1).map(poke=> poke.name);
console.log(namesOfPoisonOnly)

// an array containing just the first type of all the pokémon whose second type is "flying"
const flyingIsSecond = pokémon.filter(x=> x.types[1] === "flying").map(poke=> poke.name)
console.log(flyingIsSecond);

// a count of the number of pokémon that are "normal" type
const countNormalOnly = pokémon.filter(p => p.types.includes("normal")).length;
console.log(countNormalOnly)

