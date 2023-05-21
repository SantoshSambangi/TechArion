import React from 'react';

const DisplayTodos = ({newTodo, deleteHandler}) => {

  return (
    <div>
            {
                newTodo.map((item,index) => <div key={index}>
                    <h5>{item} &nbsp; <button onClick={()=> deleteHandler(index)}>Delete</button></h5>
                </div>)
            }
    </div>
  )
}

export default DisplayTodos