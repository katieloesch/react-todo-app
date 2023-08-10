import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, removeTodo, updateTodo } from '../redux/reducer'
import TodoList from './TodoList'

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (obj) => dispatch(updateTodo(obj)),
    completeTodo: (id) => dispatch(completeTodo(id))
  }
}

const Todos = (props) => {

    const [todo, setTodo] = useState('')

    const handleInputChange = (e) => {
        setTodo(e.target.value)
    }
    // console.log(props)
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
            <TodoList />
        </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
