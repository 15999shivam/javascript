myAccount = {
    name: 'shivam',
    income: 1000,
    expense:100,
    balance:900
}

addIncome = function(account,income)
{
    account.income  += income;
    account.balance+=income;
}

addExpence = function(account,expense)
{
    account.expense  += expense;
    account.balance -=expense;
}

getAccountSummary = function(account)
{
    return `Account for ${account.name} has $${account.balance}. $${account.income} in income. $${account.expense} in expences.`
}

resetAccount = function(account)
{
    account.income=0;
    account.expense=0;
    account.balance=0;
}

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));

addExpence(myAccount,100);
console.log(getAccountSummary(myAccount));


addIncome(myAccount,5000);
console.log(getAccountSummary(myAccount));