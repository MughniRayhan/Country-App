import React from 'react'
import {v4 as uuidv4} from "uuid";
import Country from './Country';

function Countries(props) {
    
  return (
    <section>
        {/* mapping data */}
        {props.countries.map((country)=> {
            const countryNew = {country, id:uuidv4()}
            return <Country {...countryNew} key={countryNew.id}/>
        })}
    </section>
  )
}

export default Countries