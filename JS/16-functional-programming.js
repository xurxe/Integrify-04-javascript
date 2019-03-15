/* Explain the difference between forEach, map, filter, and reduce. */

/* forEach(): calls a provided function once for each element in an array (unless the element doesn't have a value); it can modify the original array */

/* map(): calls a provided function once for each element in an array (unless the element doesn't have a value), and returns the results in a new array */

/* filter(): performs a test (provided as a function) once for each element in an array, and returns a new array with the elements that pass the test */

/* reduce(): calls a provided function once for each element in an array (unless the element doesn't have a value), and stores the result in an accumulator */




/* Define a callback function and use it in foreach(). Do the same for map(), filter() and reduce(). */
let odds = [1, 3, 5, 7];
console.log(odds);

function next(number) {
    return number + 1;
}

evens1 = [];
odds.forEach(odd => evens1.push(next(odd)));
console.log(evens1);

evens2 = odds.map(odd => next(odd));
console.log(evens2);



function largerThanFour(number) {
    if (number > 4) {
        return number;
    }
};

oddsFiltered = odds.filter(odd => largerThanFour(odd));
console.log(oddsFiltered);



function calcSum(sum, number) {
    return sum + number;
}

sum = odds.reduce((sum, number) => calcSum(sum, number));
console.log(sum);



/* Use foreach() to console.log each country in the countries array. */
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
];

countries.forEach(country => {
    console.log(country);
});



/* Use foreach() to console.log each name in the names array. */
const names = ["Asabeneh", "Matias", "Elias", "Brook"];

names.forEach(name => {
    console.log(name);
});



/* Use foreach() to console.log each number in the numbers array. */
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));



/* Use map() to create a new array by changing each country to uppercase in the countries array; */
const countriesUppeCase = countries.map(country => country.toUpperCase());
console.log(countriesUppeCase);



/* Use map() to create a new array by changing each number to square in the numbers array */
const numbersSquared = numbers.map(number => number ** 2);
console.log(numbersSquared);



/* Use map() to change to each name to uppercase in the names array */
const namesUpperCase = names.map(name => name.toUpperCase());
console.log(namesUpperCase);




/* Use filter() to filter out countries containing land. */
const countriesContainingLand = countries.filter(country => country.includes('land'));
console.log(countriesContainingLand);



/* Use filter() to filter out countries having six character. */
const countriesSixCharacters = countries.filter (country => country.length === 6);
console.log(countriesSixCharacters);



/* Use filter() to filter out countries containing six letters and more in the country array. */
const countriesOverSixCharacters = countries.filter (country => country.length >= 6);
console.log(countriesOverSixCharacters);



/* Use filter() to filter out country start with 'E'; */
const countriesStartingWithE = countries.filter(country => country.match(/^E/g));
console.log(countriesStartingWithE);



/* Chain two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback)) */
const countries2 = countries.filter(country => country.match(/^E/g)).map(country => country.toUpperCase());
console.log(countries2);



/* Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items. */
function getStringLists(array) {
    stringItems = array.filter(item => typeof item === 'string');
    return stringItems;
};
console.log(getStringLists(['Xurxe', 29]));



/* Use reduce() to sum all the numbers in the numbers array. */
console.log(numbers.reduce((sum, number) => sum + number));



/* Use reduce() to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries */
countriesConcatenated = countries.reduce((allCountries, country) => allCountries + ', ' + country);
console.log(countriesConcatenated);



northernCountries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];

northernSentence = northernCountries.reduce((sentence, country, index) => {
    if (index < northernCountries.length - 1) {
        return sentence + ', ' + country;
    }

    else if (index === northernCountries.length - 1){
        return sentence + ', and ' + country + ' are northern European countries.';
    }
});

console.log(northernSentence);



/* Explain the difference between some and every */

/* some(): performs a test (provided as a function) on all elements of an array; returns true if at least one element passes the test. Otherwise, returns false. */

/* every(): performs a test (provided as a function) on all elements of an array; returns true if all elements pass the test. Otherwise, returns false. */



/* Use some to check if any name in the names array is longer than 7 characters */

anyLongerThanSeven = names.some(name => name.length > 7);
console.log(anyLongerThanSeven);



/* Use every to check if all the countries contain the word land */
allContainLand = countries.every(country => country.includes('land'));
console.log(allContainLand);



/* Explain the difference between find and findIndex. */

/* find(): performs a test (provided as a function), and returns the value of the first element that passes the test */

/* findIndex(): performs a test (provided as a function), and returns the index of the first element that passes the test */



/* Use find to find the first country containing only six letters in the countries array */
firstCountryWithSixLetters = countries.find(country => country.length === 6);
console.log(firstCountryWithSixLetters);



/* Use findIndex to find the position of the first country containing only six letters in the countries array */
firstCountryWithSixLettersIndex = countries.findIndex(country => country.length === 6);
console.log(firstCountryWithSixLettersIndex);



/* Use findIndex to find the position of Norway; if it doesn't exist in the array you will get -1. */
NorwayIndex = countries.findIndex(country => country === 'Norway');
console.log(NorwayIndex);



/* Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1. */
RussiaIndex = countries.findIndex(country => country === 'Russia');
console.log(RussiaIndex);

RussiaIndex2 = northernCountries.findIndex(country => country === 'Russia');
console.log(RussiaIndex2);



/* Declare a function called categorizeCountries, which returns an array of countries that have some common pattern (eg 'land', 'ia', 'island','stan')). */
function categorizeCountries(array) {
    filteredArray = array.filter(country => country.includes(' '));
    return filteredArray;
}

console.log(categorizeCountries(countries));



/* Create a function that return an array of objects, each object containing a letter and the number of countries starting with that letter */
function tallyInitials1(array) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let tally = [];
    
    letters.forEach(letter => {
        let regex = RegExp(`^${letter}`, 'g')
        let beginsWithLetter = countries.filter(country => country.match(regex));
        let object = {initial: letter, count: beginsWithLetter.length}
        tally.push(object);
    })

    return tally;
}

console.log(tallyInitials1(countries));

function tallyInitials2(array) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let tally = [];
    
    letters.forEach(letter => {
        let regex = RegExp(`^${letter}`, 'g')
        let beginsWithLetter = countries.filter(country => country.match(regex));
        let object = {[letter]: beginsWithLetter.length}
        tally.push(object);
    })

    return tally;
}

console.log(tallyInitials2(countries));




/* Declare a getFirstTenCountries function that returns the first ten countries in the countries array. */
function getFirstTenCountries(array) {
    let firstTen = countries.filter((country, index) => index < 10);
    return firstTen;
};

console.log(getFirstTenCountries(countries));



/* Declare a getLastTenCountries function that returns the last ten countries in the countries array. */
function getLastTenCountries(array) {
    let lastTen = countries.filter((country, index) => index > array.length - 11);
    return lastTen;
};

console.log(getLastTenCountries(countries));



/* Find out which initial is most common in the countries array. */

function findMostCommonInitial(array) {
    tally = tallyInitials1(array);
    counts = [];
    tally.forEach(element => counts.push(element.count));  

    maxCount = Math.max.apply(null, counts);

    let mostCommonInitial;

    for (let i = 0; i < tally.length; i++) {
        if (tally[i].count === maxCount) {
            mostCommonInitial = tally[i].initial;
        };
    };

    return mostCommonInitial;
};

console.log(findMostCommonInitial(countries));