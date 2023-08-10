import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo, updateTodo } from '../redux/reducer'

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (obj) => dispatch(updateTodo(obj))
  }
}

const Todos = (props) => {

    const [todo, setTodo] = useState('')
    const inputRef = useRef(true)

    const focusTextarea = () => {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }

    const saveChanges = (id, value, e) => {
      if (e.which === 13) { // Enter key pressed
        props.updateTodo({id, item:value});
        inputRef.current.disabled = true;
      }
    }


    const handleInputChange = (e) => {
        setTodo(e.target.value)
    }
    console.log(props)
  return (
    <div className='todos'>
        <h1>todos</h1>
        <div>
          <input type='text' className='new-todo-input' onChange={handleInputChange}></input>
          <button 
            className='btn-add-todo'
            onClick={() => props.addTodo({
              id: Math.floor(Math.random() * 1000),
              item: todo,
              completed: false
            })}
          >
          +
          </button>
        </div>


        <div>
            <ul>
              {
                props.todos.map((todo) => {
                  return <li key={todo.id}>
                            <textarea ref={inputRef} disabled={inputRef} defaultValue={todo.item} onKeyPress={(e) => saveChanges(todo.id, inputRef.current.value, e) }/>
                            <button onClick={focusTextarea}>Edit</button>
                            <button onClick={() => props.removeTodo(todo.id)}>X</button>
                          </li>
                })
              }
            </ul>
        </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
