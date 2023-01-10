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
        let stats = `Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`
        return stats;
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} just got +10 health! ${this.name} is now at ${this.health} health`);
    }
}

class Sensei extends Ninja {
    constructor (name, health, wisdom){
        super(name, health, wisdom)
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

}

const superSensei = new Sensei("John", 500)
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();


