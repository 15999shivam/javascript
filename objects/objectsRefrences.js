let myAccount = {
    name:'shivam',
    expenses:0,
    income:0
}
let otherAccount = myAccount//any change in my account will reflect in other account and vice versa
//for example
otherAccount.income=10000000;
//if we reasign otheracount t something else it will break the bond to myaccount completely
//it will reflect in my account too
let addExpence = function(account,amt){
  //  account.expenses  = account.expenses+amt;//changes myAccount too

  account = {} //if w assign new value to argument we break the binding completely;

    console.log(account);
}
addExpence(myAccount,500);
console.log(myAccount);