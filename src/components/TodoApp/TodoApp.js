import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, removeTodo, updateTodo } from '../../redux/reducer'
import TodoList from '../TodoList/TodoList'
import styles from './TodoApp.module.css'
import { GoPlus } from 'react-icons/go';
import {IoMdCheckboxOutline} from'react-icons/io';

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


const TodoApp = (props) => {

    const [todo, setTodo] = useState('')

    const handleInputChange = (e) => {
        setTodo(e.target.value)
    }

    const handleAddClicked = () => {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false
      })
      setTodo('')
    }


  return (
    <div className={styles.TodoApp}>
      <h1 className={styles.title}> Todo App <IoMdCheckboxOutline /></h1>
        <div className={styles.form}>
          <input value={todo} type='text' className={styles.input} onChange={handleInputChange} placeholder='new todo'></input>
          <button 
            className={styles.btn}
            onClick={handleAddClicked}
          >
          <GoPlus />
          </button>
        </div>
        
        <TodoList />
        
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
