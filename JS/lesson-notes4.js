/* GLOBAL VARIABLES *************************************************** */

const countriesWrapper = document.querySelector('.countries-wrapper');

const subtitle = document.querySelector('.subtitle');

const searchInput = document.querySelector('.search-input');

const showCountries = (array) => {
    array.forEach((country, i) => {
        const {name, capital, population, flag, languages, currency} = country;
    
        const countryDiv = document.createElement('div');
        countriesWrapper.appendChild(countryDiv);
    
        const nameP = document.createElement('p');
        const capitalP = document.createElement('p');
        const populationP = document.createElement('p');
        const flagImg = document.createElement('img');
        const languagesP = document.createElement('p');
        const currencyP = document.createElement('p');
    
        nameP.innerHTML = name;
        capitalP.innerHTML = capital;
        populationP.innerHTML = population;
        flagImg.src = flag;
        flagImg.style.width = '20vw';
        languagesP.innerHTML = languages;
        currencyP.innerHTML = currency;
    
        countryDiv.appendChild(flagImg);
        countryDiv.appendChild(nameP);
        countryDiv.appendChild(capitalP);
        countryDiv.appendChild(populationP);
        countryDiv.appendChild(languagesP);
        countryDiv.appendChild(currencyP);
    });
}

/* FUNCTIONS *************************************************************** */

searchInput.addEventListener('input', e => {
    countriesWrapper.innerHTML = '';
    let searchTerm = e.target.value.toLowerCase();
    showCountries(filterCountries(countries, searchTerm));
});

const filterCountries = (array, search) => {
    const filteredCountries = array.filter(country => {
        let {name, capital, languages} = country;
        return name.toLowerCase().includes(search);
    });

    return filteredCountries;
};

/* EXECUTION *************************************************************** */

subtitle.textContent = `Showing ${countries.length} countries.`;
showCountries(countries);
