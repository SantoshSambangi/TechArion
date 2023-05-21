import React, { useState } from 'react'

const Practice = () => {

    
    var data = "please like and subscribe android mobile";
    var searchText = "e";

    var output = data.split(searchText);
    console.log(output);
    console.log(output.length-1);



    let nums = [1,2,3,4,5,6,7,8,9,10];

    let result = {even:[], odd:[]};

    for(var num of nums)
    {
        if(num % 2 === 0 ){
            result.even.push(num)
        }
        else{
            result.odd.push(num)
        }
    }

    console.log(result);

        let arr1 = ['santosh', ' sambangi'];
        let arr2 = ['subha', ' ganta'];

        [arr1, arr2] = [arr2, arr1];

        console.log(arr1)
        console.log(arr2)
        
        let obj = {title:'google', body:'red', eyes:'blue', age:29};

        let keys  = Object.keys(obj);
        
        let x =  keys.join('#')

        const [mystate, setMystate] = useState('');
        const [gender, setgender] = useState('')

  return (

    
    <div className='colorBlock'>
        <center>
            <h1>Youtube Practice</h1>
            <h2>{data}</h2>
            <h1>{result.even}</h1>
            <h1>{result.odd}</h1>
            <h4>{arr1}</h4>
            <h4>{arr2}</h4>
            <br/>
            <p>{x}</p>

            <form>
                <select className='select-control' onChange={ e => setMystate(e.target.value)}>
                    <option value=''>--selectstate--</option>
                    <option value="andhra">Andhra</option>
                    <option value="telengana">Telengana</option>
                    <option value="karnataka">Karnataka</option>
                </select>
                <h1>{mystate}</h1>
                <br></br>
                <label>Gender: </label>
                <label>Male </label> 
               <input  name='gender' type='radio' value={gender} onChange={e => setgender(e.target.value)}/>
               <label> FeMale </label> <input  name='gender' type='radio' value={gender} onChange={e => setgender(e.target.value)}/>
                <h3>{gender}</h3>

            </form>

            
            
        </center>
    </div>
  )
}

export default Practice;