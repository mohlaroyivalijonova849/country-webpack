const cardsEl = document.querySelector(".cards");

export const createCountries = (countries) => {
  cardsEl.innerHTML = "";
  // console.log(countries);
  countries.forEach((country) => {
    console.log(country);
    const commonName = country.name.common;
    const poplution = country.population;
    const region = country.region;
    const capital = country.capital ? country.capital[0] : "No capital";
    const flag = country.flags.svg;

    // li
    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `
    <a href="./about.html?country=/name/${commonName}">
      <img
        src=${flag}
        alt="usa-flag"
        width="267"
        height="160"
      />
      <div class="cards__item-inner">
        <h3 class="cards__title">${commonName}</h3>
        <p class="population">Population: <span>${poplution}</span></p>
        <p class="region">Region: <span>${region}</span></p>
        <p class="capital">Capital: <span>${capital}</span></p>
      </div>
      </a> `;
    cardsEl.appendChild(li);
  });
};

// about Ui
const countryInfoEl = document.querySelector(".country-info");
export const createCountryInfo = (country) => {
  const {
    poplution,
    borders,
    capital,
    flags,
    name,
    region,
    tld,
    currencies,
    languages,
    subregion,
  } = country;

  const nativeName = Object.values(name.nativeName)[0].official;
  const currency = Object.values(currencies)[0].name;
  const language = Object.values(languages);
  countryInfoEl.innerHTML = `
   <img
  class="country-info__img"
  src=${flags.svg}
  alt="germany-flag"
  width="560"
  height="400"
/>
<div class="country-info__content">
  <h2>${name.common}</h2>
  <ul class="country-info__list">
    <li class="country-info__item">
      <p class="name">
        Native Name
        <span>${nativeName}</span>
      </p>
      <p class="population">
        Population:
        <span>${poplution}</span>
      </p>
      <p class="region">
        Region:
        <span>${region}</span>
      </p>
      <p class="sub-region">
        Sub Region:
        <span>${subregion}</span>
      </p>
      <p class="capital">
        Capital:
        <span>${capital}</span>
      </p>
    </li>
    <li class="country-info__item">
      <p class="name">
        Top Level Domain:
        <span>${tld}</span>
      </p>
      <p class="population">
        Currencies:
        <span>${currency}</span>
      </p>
      <p class="region">
        Languages:
        <span>${language}</span>
      </p>
    </li>
  </ul>

  <div class="country-info__borders">
    <h3>Border Countries:</h3>
   ${
     borders
       ? borders.map((border) => {
           return `<a href="./about.html?country=/alpha/${border}">${border}</a>`;
         })
       : "No borders"
   }
  
  </div>
</div>
</div>`;
};
