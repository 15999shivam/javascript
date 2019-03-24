const account = {
    name: 'shivam',
    expences: [],
    incomes: [],
    getAccountSummary: function()
        {
            let totalexpence = 0;
            let totalIncome =0;
            this.expences.forEach(function(expence){
                totalexpence+=expence.amount;
            })
            this.incomes.forEach(function(income){
                totalIncome+=income.amount;
            })
            this.balance = totalIncome-totalexpence;
            return `${this.name} has a balance of $${this.balance}.$${totalIncome} in income. $${totalexpence} in expences`
        },
        addExpence :function(discription,amt)
        {
            const expence = {
                discription:discription,
                amount :amt
            }
            this.expences.push(expence);
        },
    addIncome: function(description,amt)
    {
        this.incomes.push({
            description:description,
            amount: amt
        })
    }

}

//expence -> description,amount


account.addExpence('rent',950);
account.addExpence('Coffee',2);
account.addIncome('job',1000);

console.log(account.getAccountSummary());