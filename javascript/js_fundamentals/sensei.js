const Ninja = require("./ninja");

class Sensei extends Ninja {
    constructor (name, health, wisdom){
        super(name, health, wisdom)
        this.wisdom = 10;
    }

    showChildStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`)
    }

    speakWisdom(){
        super.drinkSake();
        console.log(`${this.name} says : What one programmer can do in one month, two programmers can do in two months.`);
    }

}

const superSensei = new Sensei("Jamal", 300)
