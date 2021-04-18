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
        const removeArr = todos.filter(todo => todo.id !== id)
        alert("do you really want to delete it");
        setTodos(removeArr); 
    }

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text){
            return;
        }

        setTodos(prev => prev.map(item => item = newValue))
    }
   

    return (
        <div>
            <h1>tasks to do</h1>
            <TodoForm onSubmit = {addTodo}/>
            <Todo todos = {todos} removeTodo = {removeTodo} updateTodo = {updateTodo}></Todo>
        </div>
    ) 
}

export default TodoList
