/* OBJECTS ***************************************************************** */

/* Use the new Date() object to get month, date, year, hour and minute. */
currentDate = new Date;
day = currentDate.getDate();
month = currentDate.getMonth() + 1;
year = currentDate.getFullYear();
hour = currentDate.getHours();
minute = currentDate.getMinutes();



/* Write a function name displayDateTime which display time in this format: 10/03/2019 04:08 */

function displayCurrentDateTime() {
    var currentDate = new Date();
    day = "00" + currentDate.getDate();
    day = day.substr(-2);
    month = "00" + (currentDate.getMonth() + 1);
    month = month.substr(-2);
    year = "0000" + currentDate.getFullYear();
    year = year.substr(-4);
    hour = "00" + currentDate.getHours();
    hour = hour.substr(-2);
    minute = "00" + currentDate.getMinutes();
    minute = minute.substr(-2);
    return `${day}/${month}/${year} ${hour}:${minute}`
}

console.log(displayCurrentDateTime());



/* Create an empty object called dog */
let dog = { };



/* Print the the dog object on the console */
console.log(dog);



/* Add name, legs, color, age and bark properties for the dog object. The bark property is a method that returns woof woof */
dog = {
    name: 'Mila',
    legs: 4,
    color: 'cream',
    age: 5,
    bark: function() {
        return 'woof woof';
    }
}
console.log(dog);



/* Get name, legs, color, age and bark value from the dog object */
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark);



/* Set new properties the dog object: breed, getDogInfo */
dog.breed = 'mutt';
dog.getDogInfo = function() {
    return `${this.name} has ${this.legs} legs. She is a ${this.color}-colored ${this.breed}. She is ${this.age} years old.` 
}

console.log(dog.getDogInfo());



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



/* Count logged-in users and users having 50 or more points from the following object. */
const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30
    },

    Asab: {
        email: "asab@asab.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 25,
        isLoggedIn: false,
        points: 50
    },

    Brook: {
        email: "brook@brook.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    
    Daniel: {
        email: "niklas@niklas.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40
    },

    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};



function countLoggedIn(object) {
    let count = 0;
    let array = Object.entries(object);
    for (let i = 0; i < array.length; i++) {
        if (array[i][1].isLoggedIn == true) {
            count += 1;
        };
    };
    return count;
};

console.log(countLoggedIn(users));



function countHighScore(object) {
    let count = 0;
    let array = Object.entries(object);
    for (let i = 0; i < array.length; i++) {
        if (array[i][1].points >= 50) {
            count += 1;
        };
    };
    return count;
};

console.log(countHighScore(users));