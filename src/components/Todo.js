import React ,{useState} from 'react';
import TodoForm from './TodoForm'
import {AiOutlineClose} from 'react-icons/ai';
import {AiFillEdit} from 'react-icons/ai';

function Todo(props){
    const [edit, setEdit] = useState({
        id:null,
        value:''
    })

    const submitUpdate = value =>{
        props.updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

    if(edit.id){
        return <TodoForm onSubmit = {submitUpdate}></TodoForm>
    }

    return props.todos.map((todo)=>(
        <div className = "list">
            <h3 className = "element">
                {todo.text}
            </h3>
            <span className = "element">
                <AiOutlineClose onClick = {()=>{props.removeTodo(todo.id)}}/>
                <AiFillEdit onClick = { () => setEdit({id:todo.id, value: todo.text})}/>
            </span>
        </div>
    ))
}

export default Todo;