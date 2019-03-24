const square = (num) => num*num;


const squareLong = (num) => {
    return num*num;
    }

console.log(square(5))

const people = [{
    name: 'shivam',
    age: 19
},{
    name:'shivani',
    age:20
},{
    name:'shivanshi',
    age:19
}]

// const under30 = people.filter(function(person){
//     return person.age<20;
// })



const under30 = people.filter((person)=> person.age<20)
console.log(under30);

const person = people.find((p) => p.age===20);
console.log(person.name);