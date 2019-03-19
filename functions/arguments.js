
//multiple arguments
let add = function(a, b)
{
    return a + b
}

let result = add(10, 1);
console.log(result);

//defalut argumets

let getScoreText = function(name = 'shivam', score = 0){

    return "Name: "+name+" - Score: "+score;

}
getScoreText("garg",15);
getScoreText("garg");

let scoreText = getScoreText(undefined,99)//it provides acces to second variable in function.



console.log(scoreText);
tip = function(amt,per=20)
{
    return amt*per/100
}
console.log(tip(100))

