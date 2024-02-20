function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.setName = function(name){
        this.name = name;
    }

    this.getName = function(){
        return this.name;
    }
    
}

let person1 = new Person();
console.log(person1);
console.log(person1.getName());
