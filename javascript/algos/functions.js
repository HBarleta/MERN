 mbnv d arr = Object.freeze([1,2,3,4])
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
