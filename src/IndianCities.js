import React, { useState } from 'react';
import Data from './city.json';

const IndianCities = () => {

    const [name,setName] = useState('');

    console.log(name)


    let arr = [1,2,3,4,5]
    let obj = {...arr}
    console.log(obj)

    // console.log(x)
    // var x = 10;

    // console.log(y)
    // let y = 10

    function welcome ()
    {
      var name = "santosh"
      {
        let name = "sambangi"
        console.log(name)
      }
        console.log(name)
    }
    welcome()
    
  return (
    <div>
        <center>
            <h1>Indian City</h1>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>

            {
                Data.filter(item => item.name.toLowerCase().includes(name.toLowerCase())).map((item,index) => <div  style={{"border":"1px solid red", "maxWidth": "70%","margin":"10px"}} key={index}>{item.name}</div>)
            }
        </center>
    </div>
  )
}

export default IndianCities