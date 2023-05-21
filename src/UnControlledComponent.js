import React, { useRef, useState } from 'react'

const UnControlledComponent = () => {

    const inputRef = React.useRef('');
    const [name,setName] = useState('')

    const submitHandler =(e)=>{
        e.preventDefault();
        setName(inputRef.current.value)
        //alert(inputRef.current.value)
    }
    console.log(inputRef.current.value)
  return (
    <div>
        <center>
        <h1>UnControlledComponent</h1>

            <form onSubmit={submitHandler}>
                <input type='text' ref={inputRef} />
                <br/>
                <br/>
                <button onClick={submitHandler}>submit</button>
                <br/>
                <h1>Name:{inputRef.current.value}</h1>

            </form>
        </center>
    </div>
  )
}

export default UnControlledComponent