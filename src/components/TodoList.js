import { connect } from 'react-redux'
import React, { useState } from 'react'
import { addTodo, completeTodo, removeTodo, updateTodo } from '../redux/reducer'
import Todo from './Todo'

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

const TodoList = (props) => {
    const [filter, setFilter] = useState('in-progress')

  return (
    <div className='todo-list'>
        <div className='filters'>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('in-progress')}>In Progress</button>
        </div>

        <div>
            <h2>Tasks remaining: {props.todos.filter(todo => !todo.completed).length} </h2>
        </div>

        <ul>
            { /** Filter: in-progress -> only show todos that are NOT completed **/
                (props.todos.length > 0 && filter === 'in-progress') ? 
                    props.todos.map(todo => {
                        return (
                            !todo.completed && <Todo 
                                key={todo.id}
                                todo={todo}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    })
                    : null
            }

            { /** Filter: completed -> only show todos that ARE completed **/
                (props.todos.length > 0 && filter === 'completed') ? 
                    props.todos.map(todo => {
                        return (
                            todo.completed && <Todo 
                                key={todo.id}
                                todo={todo}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    })
                    : null
            }

            { /** Filter: all -> show completed todos AND todos in progress **/
                (props.todos.length > 0 && filter === 'all') ? 
                props.todos.map(todo => {
                    return (
                        <Todo 
                            key={todo.id}
                            todo={todo}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                    )
                })
                : null
            }
        </ul>
      
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

