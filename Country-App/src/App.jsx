import React, { useState } from 'react'

const url = "https://restcountries.com/v3.1/all"
function App() {

  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([])

  return (
    <div>App</div>
  )
}

export default App