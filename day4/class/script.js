// class- blueprint of an object
class Parent{
    constructor(firstname, lastname, country, title){
        this.firstname=firstname;
        this.lastname=lastname;
        this.country=country;
    }

    getPersonInfo(){
        return ` I am ${this.firstname} ${this.lastname} a ${this.title} developer based in ${this.country}`
    }

    parentMethod(){}
}


const p1 = new Parent('Ash', 'Lynx', 'Germany', 'backend');

class Child extends Parent{
    constructor(firstname, lastname, title,country,skills){
        super(firstname, lastname, title, country);
        this.skills=skills;
    }

    getSkills(){
        let len = this.skills.length;
        return len > 0 ? this.skills.join(' '):'No skills found.'
    }

    childMethod(){}
}

const skills=['HTML', 'CSS', 'JS', 'React', 'Angular'];
const child = new Child('Eiji', 'Okimura',  'frontend','Japan', skills);

console.log(child.getPersonInfo());