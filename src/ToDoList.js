import React, { useState } from 'react';
import ToDoDisplay from './ToDoDisplay';

const ToDoList = () => {

    const [task, setTask] = useState('');

    const [todos,setTodos] = useState([]);

    const changeHandler = (e) => {
            setTask(e.target.value)
    }

    const submitHandler = (e) =>
    {
        e.preventDefault();
        const newTodos = [...todos,task];
        setTodos(newTodos);
        setTask("");
    }

    const deleteHandler = (indexValue) => {
        const deleteTodos = todos.filter((item,index) => 
            index !== indexValue);
        setTodos(deleteTodos)
    }

  return (
    <div>
        <center>
            <h1>ToDoList</h1>
            <form onSubmit={submitHandler}>
                <input size={30} type='text' name='task' value={task} onChange={changeHandler}/>  &nbsp; &nbsp;
                <input type='submit' value="Add" />
            </form>
            <br/>
            <br/>

            <ToDoDisplay todos={todos} deleteHandler = {deleteHandler}/>

        </center>
    </div>
  )
}

export default ToDoList;