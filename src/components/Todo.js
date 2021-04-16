import React ,{useState} from 'react';

import {AiOutlineClose} from 'react-icons/ai';
import {AiFillEdit} from 'react-icons/ai';

function Todo(props){

    return props.todos.map((todo,index)=>(
        <div key = {index} className = "list">
            <h3 key ={todo.id} className = "element">
                {todo.text}
            </h3>
            <span className = "element">
                <AiOutlineClose onClick = {()=>{props.removeTodo(todo.id)}}/>
                <AiFillEdit />
            </span>
        </div>
    ))
}

export default Todo;