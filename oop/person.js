//prototype inheritence


const Person = function(firstName,lastName,age,likes=[]){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function()
{
    let bio =  `${this.firstName} is ${this.lastName}`

    this.likes.forEach((like)=>{
        bio+= ` ${this.firstName} likes ${like}`
    })//this would not work if function(){} is used ad this would break this binding //arrow does not bind itsa own this hence it does not break this binding of parent
    return bio
}


Person.prototype.setName = function(name){

    name = name.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];

}



const me = new Person('shivam','garg',19,['reading','studing','developing']);

me.setName('shivanshi aggerwal')

console.group(me.getBio());

const person2 = new Person('shivani','goyal','20')
console.log(person2.getBio())