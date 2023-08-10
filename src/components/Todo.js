import React, { useRef } from 'react'

const Todo = (props) => {
    const {todo, updateTodo, removeTodo, completeTodo} = props

    const inputRef = useRef(true)

    const focusTextarea = () => {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }

    const saveChanges = (id, value, e) => {
      if (e.which === 13) { // Enter key pressed
        updateTodo({id, item:value});
        inputRef.current.disabled = true;
      }
    }

  return (
    <li key={todo.id} className='todo-card'>
        <textarea ref={inputRef} disabled={inputRef} defaultValue={todo.item} onKeyPress={(e) => saveChanges(todo.id, inputRef.current.value, e) }/>
        <div className='btns-todo-card'>
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
            <button onClick={focusTextarea}>Edit</button>
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </div>
        <div>
            {todo.completed && <span className='todo-status'>done</span>}
        </div>
     
    </li>
  )
}

export default Todo
