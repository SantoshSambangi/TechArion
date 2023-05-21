import React, { useState } from 'react'
import Test from './Test';

const ControlledComponent = () => {

    const [name,setname] = useState('');
    const changeHandler = (e)=>{
        setname(e.target.value)
    }

    console.log(name)

    let nums = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,1,5,7,8,9,11]

    const results = {even:[1,2,3,], odd:[1,2,3]};

    for(var num of nums){
        if(num % 2===0){
            results.even.push(num)
        }
        else{
            results.odd.push(num)
        }
    }

    var x = results.even.join('#')
    var y = results.odd.join('#')

  return (
    <div>
        <center>
        <h1>ControlledComponent</h1>
        Name:{name}<br/>
        <input type='text' onChange={changeHandler}/>
        
        <br/>
        <br/>
        <Test changeHandler={changeHandler}/>
        <br/>
        <br/>
        
        <h1>{x}</h1>
        <h1>{y}</h1>
        </center>
    </div>
  )
}

export default ControlledComponent