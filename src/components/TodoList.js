import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

    //declaring state variable which we will call todos
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{       //add a tasks
        if(!todo.text){
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo);
    }

    const removeTodo = (id) =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr); 
    }
   

    return (
        <div>
            <h1>tasks to do</h1>
            <TodoForm onSubmit = {addTodo}/>
            <Todo todos = {todos} removeTodo = {removeTodo}></Todo>
        </div>
    ) 
}

export default TodoList
