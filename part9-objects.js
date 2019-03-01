/* OBJECTS ****************************************************************************************************** */

/* Create an object literal called personAccount.
It contains firstName, lastName, income, expenses properties
and it has totalIncome, totalExpenses, accountInfo, addIncome, addExpense and accountBalance methods.
Income is a set of incomes and their description; the same goes for expenses. */
const personAccount = {
    firstName: 'Xurxe',
    middleName: 'Toivo',
    lastName: 'Garcia',
    totalIncome: 0,
    totalExpenses: 0,

    incomes: [
        {description: 'salary Jan', amount: 1000}, 
        {description: 'salary Feb', amount: 1100},
        {description: 'salary Mar', amount: 1200},
        {description: 'spring bonus', amount: 500},
    ],

    expenses: [
        {description: 'rent Jan', amount: 500}, 
        {description: 'rent Feb', amount: 500},
        {description: 'rent Mar', amount: 500},
        {description: 'heating bill', amount: 200},
    ],

    accountInfo: function() {
        return `Name: ${this.firstName} ${this.middleName} ${this.lastName}`;
    },

    addIncome: function(description, amount) {
        this.incomes.push({description: description, amount: amount});
    },

    addExpense: function(description, amount) {
        this.expenses.push({description: description, amount: amount});
    },

    calcTotalIncome: function() {
        for (let i = 0; i < this.incomes.length; i++) {
            this.totalIncome += this.incomes[i].amount;
        }
        return this.totalIncome;
    },

    calcTotalExpenses: function() {
        for (let i = 0; i < this.expenses.length; i++) {
            this.totalExpenses += this.expenses[i].amount;
        }
        return this.totalExpenses;
    },

    calcAccountBalance: function() {
        accountBalance = this.totalIncome - this.totalExpenses;
        return accountBalance;
    },
}

personAccount.addIncome('salary Apr', 2000);
console.log(personAccount.incomes);

personAccount.addExpense('rent Apr', 600);
console.log(personAccount.expenses);

console.log(personAccount.accountInfo());
console.log(personAccount.calcTotalIncome());
console.log(personAccount.calcTotalExpenses());
console.log(personAccount.calcAccountBalance());
