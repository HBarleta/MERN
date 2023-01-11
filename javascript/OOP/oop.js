class Developer {
    constructor(name,iq,  health = 50, languages){
        this.name = name;
        this.languages = ["Python", "Javascript", "Java", "C#"];
        this.health = health;
        this.iq = iq;
    }
    sleep(){
        console.log("ZzZzzZZzzzZ")
        this.iq += 5;
        this.health += 10;
        return this;
    }
    completeProject(title){
        if(title == undefined){
            console.log("Please provide a langauge your project was completed in")
        } else {
        console.log(`${this.name} completed a ${title} project and gained 5 iq`)
        this.languages.push(title)
        this.iq -= 2;
        this.health -=4;
        return this;
        }
    }
}

const dev1 = new Developer("Harold", 100, 300)
const dev2 = new Developer("Merlin", 100, 300)
console.log(dev1)
dev1.completeProject();

module.exports = Developer