import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../redux/reducer'

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
    removeTodo: (id) => dispatch(removeTodo(id))
  }
}

const Todos = (props) => {

    const [todo, setTodo] = useState('')
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
                            {todo.item}{' '}
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
