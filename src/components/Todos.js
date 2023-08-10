import React, { useState } from 'react'

const Todos = () => {

    const [todo, setTodo] = useState('')
    const handleInputChange = (e) => {
        setTodo(e.target.value)
    }
  return (
    <div className='todos'>
        <h1>todos</h1>
        <input type='text' className='new-todo-input' onChange={handleInputChange}></input>
        <button className='btn-add-todo'>+</button>
    </div>
  )
}

export default Todos
