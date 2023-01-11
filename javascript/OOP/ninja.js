class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3
    }
    sayName(){
        console.log(`Hi, my name is ${this.name}`)
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} just got +10 health! ${this.name} is now at ${this.health} health`);
    }
}


const ninja1 = new Ninja("Jerry", 100)
module.exports = Ninja