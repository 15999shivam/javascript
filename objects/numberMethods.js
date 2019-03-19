let num = 103.941;

//to fixed:trim number to given decimal places
console.log(num.toFixed(2));

console.log(num.toFixed(1));

//MATH

console.log(Math.round(num));

console.log(Math.floor(num));

console.log(Math.ceil(num));


console.log(num);

let min  = 0;
let max =  1;

let random = Math.floor(Math.random()*(max-min+1))+min;
console.log(random);

makeGuess = function(num)
{
    let min  = 1;
let max =  5;

let random = Math.floor(Math.random()*(max-min+1))+min;

return random == num;
}

console.log(makeGuess(3));