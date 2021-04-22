import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import axios from 'axios'

function TodoList() {

    const [todos, setTodos] = useState([]);
    const url = `http://localhost:8080/todos`;

    const addTodo = todo =>{     
        if(!todo.text){
            return 
        }
        const newTodos = [todo,...todos]; 

        setTodos(newTodos);
        console.log([todo,...todos]);

        axios.post(url,{
            id: todo.id,
            task: todo.text
        })
        .then(res => {
            console.log(res);
        })
    }

 

    const removeTodo = (id) =>{
        axios.delete(`${url}/${id}`)
        .then(res => {
           const filtredArr = todos.filter(todo => todo.id !== id);
                   setTodos(filtredArr);
        })
    }

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue:item)))
    }
   
    return (
        <div>
            <h1>tasks to do</h1>
            <TodoForm todos = {todos}  onSubmit = {addTodo}/>
            <Todo todos = {todos}  removeTodo = {removeTodo} updateTodo = {updateTodo}></Todo>
        </div>
    ) 
}

export default TodoList
