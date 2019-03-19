let name = '  shivam  ';

//length property
console.log(name.length);

//cionvert to upper case
console.log(name.toUpperCase());
console.log(name);

//convert to lower case
console.log(name.toLowerCase());

//includes method
let password = '   abc123passord098 ';
console.log(password.includes('password'));

//trim
console.log(name.trim());

//challnage area

//isValidPassword
//true if(lrngth>8) && doesnt contain passsword

isValidPassword = function(pwd)
{
    /*if(pwd.length>8 && !pwd.includes('password'))
    {
        return true;
    }
    else{
        return false;
    }*/
    //another method
    return pwd.length>8 && !pwd.includes('password');

}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^'));
console.log(isValidPassword('sdhsadskdpassword'));