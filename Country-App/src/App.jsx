import React, { useEffect, useState } from 'react'

import Countries from './Componenets/Countries';
import './App.css'

const url = "https://restcountries.com/v3.1/all"

function App() {

  //useState Variables
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  //fetch data
  const fetchData = async (url) => {
    setLoading(true);
   try{
    const response = await fetch(url);
    const data = await response.json();
    
    setCountries(data);
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

  return (
    <div>
      <h1>Country App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={countries}/>}
    </div>
  )
}

export default App