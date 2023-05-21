import React, { useState } from 'react';
import Data from './city.json';


const CitySearchApp = () => {

    const [search,setSearch] = useState('');


    console.log(search)
    
  return (
    <div>
        <center>
        <h1>CitySearch: {search}</h1>
        <input type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/> <br/><br/>
        {
            Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
               return <div key={city.id} style={{'border': '1px solid red' , "padding": "10px", "margin":"10px", "maxWidth":"70%"}}>
                    {city.id}&nbsp;{city.name}
                </div>
            })
        }
        </center>
    </div>
  )
}

export default CitySearchApp