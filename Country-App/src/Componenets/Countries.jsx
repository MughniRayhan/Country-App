import React from 'react'
import {v4 as uuidv4} from "uuid";

function Countries(props) {
  return (
    <section>
        {/* mapping data */}
        {props.countries.map((country)=> {
            const countryNew = {country, id:uuidv4()}
        })}
    </section>
  )
}

export default Countries