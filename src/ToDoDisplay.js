import React from 'react';

const ToDoDisplay = ({todos, deleteHandler}) => {
  return (
    <div>
        {
            todos.map((todo,index) => <div key={index}>
                <h5>{todo} &nbsp; <button className='todoBtn' onClick={() => deleteHandler(index)}>Delete</button></h5>
            </div>)
        }
    </div>
  )
}

export default ToDoDisplay