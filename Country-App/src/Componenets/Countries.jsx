import React from 'react'

import {v4 as uuidv4} from "uuid";
import Country from './Country';
import style from './countries.module.css'

function Countries(props) {
    
  return (
    <section className={style.countries}>
        {/* mapping data */}
        {props.countries.map((country)=> {
            const countryNew = {country, id:uuidv4()}
            return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry}/>
        })}
    </section>
  )
}

export default Countries