const isRaining = true;

//isRaining = false;//we cant reassign a constant.
console.log(isRaining); 

//we can't asssign a contant object a new value but still we can manipulate its members(datamembers)

//for example

const person = 
{
    age: 12
}
//person={};//gives error

person.age = 13;//this is valid
console.log(person.age);

