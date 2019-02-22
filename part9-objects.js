/* OBJECTS ****************************************************************************************************** */

/* Create an object literal called personAccount.
It contains firstName, lastName, income, expenses properties
and it has totalIncome, totalExpenses, accountInfo, addIncome, addExpense and accountBalance methods.
Income is a set of incomes and their description; the same goes for expenses. */
const personAccount = {
    firstName: 'Xurxe',
    middleName: 'Toivo',
    lastName: 'Garcia',
    income: {
        fixedIncome: 1000,
        extraIncome: 500,
        totalFixedIncome: function() {
            return this.fixedIncome * 12;
        },
        totalIncome() {
            return this.totalFixedIncome() + this.extraIncome;
        }
    },

    expenses: {
        fixedExpenses: 800,
        extraExpenses: 1200,
        totalFixedExpenses: function() {
            return this.fixedExpenses * 12;
        },
        totalExpenses() {
            return this.totalFixedExpenses() + this.extraExpenses;
        }
    },

    accountInfo: function() {
        return `Name: ${this.firstName} ${this.middleName} ${this.lastName}`;
    },

    accountBalance: function() {
        return (this.income.totalIncome() - this.expenses.totalExpenses());
    }
}

console.log(personAccount.accountInfo());
console.log(personAccount.income.totalIncome());
console.log(personAccount.expenses.totalExpenses());
console.log(personAccount.accountBalance());



/* Develop a small JavaScript library. */