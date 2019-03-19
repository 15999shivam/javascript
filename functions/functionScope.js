
//global scope(ftc )
    //local scope(farenhite,celcius)
        //localScope(isFreezing)


ftc = function(farenhite)
{
    let celcius = (farenhite-32)*(5/9);

    if(celcius<=0){
        let isFreezing = true;
    }
    return celcius;
}

console.log(ftc(32));
console.log(ftc(68));


//template string backtic
let name = "shivam";
let age = 12
console.log(`hey my name is ${name}\n my age is ${age}`)