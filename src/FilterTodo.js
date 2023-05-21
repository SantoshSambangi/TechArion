import React, { useState } from 'react'
import DisplayTodos from './DisplayTodos';

const FilterTodo = () => {

    const [todo,setTodo] = useState('');

    const [newTodo,setNewTodo] = useState([]);

    // const changeHandler = (e)=>{
    //         setTodo(e.target.value)
    // }

    const submitHandler = (e)=>{
            e.preventDefault();
            const mytodo = [...newTodo,todo];
            setNewTodo(mytodo);
            setTodo("")
            console.log(newTodo)
    }

    const deleteHandler = (indexValue) => {
        const deleteTodos = newTodo.filter((item,index) => 
            index !== indexValue);
        setNewTodo(deleteTodos);
    }
  return (
    <div>
        <center>
        <h1>FilterTodo</h1>

        <form onSubmit={submitHandler}>
            <input type='text' value={todo} onChange={(e)=> setTodo(e.target.value)}/> &nbsp;
            <input type='submit' value="ADD"/>
        </form>
        <br/>

        {
            newTodo.map((item,index) => <div key={index}>
                <h5>{item} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h5>
            </div>)
        }
               {/* <DisplayTodos newTodo={newTodo} deleteHandler={deleteHandler}/> */}

        </center>
    </div>
  )
}

export default FilterTodo;