//student score ,total possible score

//15/20 ->you got a C (75 %)!

// A 90-100, B 80-89, C 70-79,D 60-69, F 0-59

gradeCalc = function(score,totalScore=100)
{
    let grade;
    let percent = score/totalScore*100;
    if(percent>=0 && percent<=59)
    {
        grade = "F"
    }
    else
    if(percent>=60 && percent<=69)
    {
        grade = "D"
    }
    else
    if(percent>=70 && percent<=79)
    {
        grade = "C"
    }
    else
    if(percent>=80 && percent<=89)
    {
        grade = "B"
    }
    else
    if(percent>=90 && percent<=100)
    {
        grade = "A"
    }
    return `You got a ${grade} (${percent}%)!`
}

let grade = gradeCalc(75);
console.log(grade);