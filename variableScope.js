//edge cases in variable scope
//global
    //local
        //local
    //local

   // let name="shivam";

   yo = "lala";
   console.log(yo);
if(true)
{
    //let name="garg";
    if(true)
    {
        name="sanyam";//in this case variable name was not declared even once in the program so it is automatically gets declared in global scope
        console.log(name);
    }
}

if(true)
{
    var name = "shivam";
    console.log(name);
}