import React, { useEffect, useState } from 'react'

import Countries from './Componenets/Countries';
import './App.css'
import Search from './Componenets/Search';

const url = "https://restcountries.com/v3.1/all"

function App() {

  //useState Variables
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries,setFilteredCountries] =useState(countries);

  //fetch data
  const fetchData = async (url) => {
    setLoading(true);
   try{
    const response = await fetch(url);
    const data = await response.json();
    
    setCountries(data);
    setFilteredCountries(data);
    setLoading(false);
    setError(null);
    
   }catch(error){
    setLoading(false);
    setError(error);
   }

  } ;

  //using useEffect for data fetch
  useEffect(()=>{
    fetchData(url)
  }, [])

//remove data
const  handleRemoveCountry = (name) =>{
  const filter = filteredCountries.filter((country) => country.name.common !== name);
  setFilteredCountries(filter)
}

//search countries
const handleSearch = (searchValue) =>{
 let value = searchValue.toLowerCase();
 const newCountry = countries.filter((country) => {
  const countryName = country.name.common.toLowerCase();
  return countryName.startsWith(value)
});
setFilteredCountries(newCountry);
}

  return (
    <div>
      <h1>Country App</h1>
      <Search  onSearch={handleSearch}/>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry}/>}
    </div>
  )
}

export default App