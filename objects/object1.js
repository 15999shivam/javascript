let myBook = {
    title: 'let us c',
    author: 'yashwant sir',
    pagecount: 200
}
console.log(myBook.title);//dot notation

console.log(`${myBook.title} by ${myBook.author} consisting ${myBook.pagecount} pages.\n`)

myBook.title = "let us c++";

console.log(`${myBook.title} by ${myBook.author} consisting ${myBook.pagecount} pages.\n`)

//challnege

let person = {
    name:"shivam",
    age:19,
    location:"chitkara"
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age+=1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
