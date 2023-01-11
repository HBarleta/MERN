class Effects {
    constructor(name, cost, text, stat, magnitude){
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    cast(target){
        // this will check if the target card is a Unit class object
        if(target instanceof Unit){
            // target resilience is decremented/incremented here
            target.resilience += this.magnitude;
            console.log();
            console.log("*********************************************");
            console.log("{CAST}{CAST}{CAST}{CAST}{CAST}{CAST{CAST{CAST}");
            console.log();
            console.log(`${this.name} card was played!`);
            console.log('"' + this.text + '"');
            console.log();
            console.log(`${this.name} was cast on ${target.name}!!`)
            console.log(`${target.name} now has ${target.resilience} resilience points`)
            console.log();
            console.log("{CAST}{CAST}{CAST}{CAST}{CAST}{CAST{CAST{CAST}");
            console.log("*********************************************");
            console.log();
        } else{
            // casting on non Unit class cards will throw this error
            throw new Error("Can only target Unit type cards");

        }
        return this;
    }
}

class Unit {
    constructor(name, cost, power, resilience){
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
            console.log();
            console.log("{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}");
            console.log("           *********{{HIYAAAAAAAAAAAA}}************");
            console.log("               *********{{Ka-chow!}} ***********");
            console.log();
            console.log(`${target.name} was attacked by ${this.name} dealing ${this.power} damage`);
            console.log(`${target.name} now has ${target.resilience} resilience points!`)
            console.log();
            console.log("{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}{ATTACK!}");
            console.log();
            
        } else {
           throw new Error("Can only attack a Unit type card");
        }
        return this;
    }
}



// Playing out the scenario
const redBeltUnit = new Unit("Red Belt Ninja", 3, 3, 4)
const algoCard = new Effects("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3)
algoCard.cast(redBeltUnit);
const blackBeltUnit = new Unit("Black Belt Ninja", 4, 5 ,4)
const promiseCard = new Effects("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "reslience", -2)
promiseCard.cast(blackBeltUnit);
const pairCard = new Effects("Pair Programming", 3, "Increase target's power by 2", "Power", 2)
pairCard.cast(redBeltUnit);
redBeltUnit.attack(blackBeltUnit)
