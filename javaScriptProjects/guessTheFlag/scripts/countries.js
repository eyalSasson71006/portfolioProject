const getCountries = async () => {
  try{
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  }catch(error){
    alert("Error, please check your internet connection and try again.")
  }
};

const countriesFull = await getCountries();
let countries = [...countriesFull];

const search = (text) => {
  countries = countries.filter((country) => {
    let name = country.name.common.toLowerCase();
    return name.includes(text.toLowerCase());
  });
};

const reset = () => {
  countries = [...countriesFull];
};

export { getCountries, countries, search, reset };
