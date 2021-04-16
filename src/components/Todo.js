import React ,{useState} from 'react';

import {AiOutlineClose} from 'react-icons/ai';
import {AiFillEdit} from 'react-icons/ai';

function Todo(props){

    return props.todos.map((todo)=>(
        <div className = "list">
            <h3 className = "element">
                {todo.text}
            </h3>
            <span className = "element">
                <AiOutlineClose />
                <AiFillEdit />
            </span>
        </div>
    ))
}

export default Todo;