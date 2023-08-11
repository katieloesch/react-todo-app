import React, { useRef } from 'react'
import styles from './Todo.module.css'
import { MdDone } from'react-icons/md'
import { BiSolidEditAlt } from'react-icons/bi'
import { RiDeleteBin6Line } from'react-icons/ri'

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
    <li key={todo.id} className={styles.card}>
        <textarea className={styles.textarea} ref={inputRef} disabled={inputRef} defaultValue={todo.item} onKeyPress={(e) => saveChanges(todo.id, inputRef.current.value, e) }/>
        <div className={styles.btns}>

            { !todo.completed && <button className={styles.btn} onClick={() => completeTodo(todo.id)}><MdDone /></button>}
            <button className={styles.btn} onClick={focusTextarea}><BiSolidEditAlt /></button>
            <button className={styles.btn} onClick={() => removeTodo(todo.id)}><RiDeleteBin6Line /></button>
        </div>
      
        {todo.completed && <span className={styles.done}>done</span>}
            
    </li>
  )
}

export default Todo
