import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {

    //declaring state variable which we will call todos
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{       //add a task
        if(!todo.text){
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo);
    }

    return (
        <div>
            <h1>tasks to do</h1>
            <TodoForm todos={todos} onSubmit = {addTodo}/>

        </div>
    )
}

export default TodoList
