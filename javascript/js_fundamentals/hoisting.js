// 1)
let example = "I'm the example!";    
console.log(example);
//this will result in a runtime error since console.log cannot access an uninitalized variable;
// 2)
test();
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//the function is hoisted to the top of the script then is invoked in line 2 which results in a console.log of "magnet"

// 3)
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// this will console.log "super cool" since the function was not invoked prior to the console.log(brendan)

// 4)
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
var food = 'chicken';
console.log(food);
eat();

// 'chicken' will get logged, then 'half-chicken' will be logged after

// 5)

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// this will create a runtime error since mean() is not a function

// 6)

console.log(genre);
var genre = "disco";
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

// undefined will be logged in console first since genre was not yet declared prior to console.log(genre), then "rock" and "r&b", finally "disco" will be logged

// 7)

dojo = "san jose";
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);

// "san jose" is logged since dojo is a global variable, "seattle" then "burbank" is logged and finally "san jose"

// 8)

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// this will return a type error since const dojo is immutable