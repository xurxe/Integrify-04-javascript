/* Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name */
let paragraph = document.querySelector('p');
paragraph.style.color = 'grey';



/* Get each paragraph using document.querySelector('#id') and by their id */
let paragraph1 = document.querySelector('#paragraph1');
console.log(paragraph1);

let paragraph2 = document.querySelector('#paragraph2');
console.log(paragraph2);

let paragraph3 = document.querySelector('#paragraph3');
console.log(paragraph3);

let paragraph4 = document.querySelector('#paragraph4');
console.log(paragraph4);



/* Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name */
let paragraphs = document.querySelectorAll('p');
console.log(paragraphs);


/* Loop through the nodeList and get the text content of each paragraph */
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent);
};




/* Set a text content to the fourth paragraph, Fourth Paragraph */
paragraph4.textContent = 'Fourth paragraph'




/* Set id and class attribute for all the paragraphs using different attribute setting methods */
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].id = 'para' + (i + 1);
};

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].class = 'paragraph';
};




/* Change stye of each paragraph using JavaScript (eg. color, background, border, font-size, font-family) */
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = '1.5rem';
};




/* Select all paragraphs and loop through each elements and give the first and third paragraph a green color, and the second and the fourth paragraph a red color */
for (let i = 0; i < paragraphs.length; i++) {
    if (i % 2 === 0) {
        paragraphs[i].style.color = 'green';
    }

    else if (i % 2 === 1) {
        paragraphs[i].style.color = 'red';
    }
};




/* Remove all the paragraphs and create them again using JavaScript */
let body = document.querySelector('body')

for (let i = 0; i < paragraphs.length; i++) {
    body.removeChild(paragraphs[i]);
};

for (let i = 0; i < 4; i++) {
    let para = document.createElement('p');
    document.body.appendChild(para);
};

let paras = document.querySelectorAll('p');
console.log(paras);



/* Set text content, id and class to each paragraph */
for (let i = 0; i < paras.length; i++) {
    paras[i].textContent = 'Para ' + (i + 1);
    paras[i].id = 'para' + (i + 1);
    paras[i].class = 'para';
};




/* Create a div container on HTML document and create 100 numbers dynamically and append to the container div. Put each number in 150px by 150px box. If the number is even the background will be lightgreen else lightblue. */
let numbersDiv = document.createElement('div');
document.body.appendChild(numbersDiv);

for (let i = 0; i < 100; i++) {
    let number = document.createElement('p');
    numbersDiv.appendChild(number);
    number.textContent = (i + 1);
    number.style.width = '150px';
    number.style.height = '150px';

    
    if (i % 2 === 0) {
        number.style.background = 'lightblue';
    }

    else if (i % 2 === 1) {
        number.style.background = 'lightgreen';
    };    
};



/* Use the rgb color generator function or hexaColor generator to create 10 divs with random background colors */
function randomHexNumberGenerator() {
    randomHex = '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
    return randomHex;
}

for (let i = 0; i < 10; i++) {
    let colorDiv = document.createElement('div');
    body.appendChild(colorDiv);
    colorDiv.style.height = '50px';
    colorDiv.style.background = randomHexNumberGenerator();
};



/* Use the countries.js to visualize all the countries on the HTML document. You need one wrapper div and box for each countries. In the box display, the letter the country starts with, the name of the country and the number of characters for the country name. */

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

let countriesDiv = document.createElement('div');
document.body.appendChild(countriesDiv);

for (let i = 0; i < countries.length; i++) {
    let countryDiv = document.createElement('div');
    countryName = countries[i];
    countryInitial = countryName.slice(0, 1);
    countryLength = countryName.length;
    countryDiv.textContent = `${countryInitial}: ${countryName} (${countryLength} characters)`;
    countriesDiv.appendChild(countryDiv);
};