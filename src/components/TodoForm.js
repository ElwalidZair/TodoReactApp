import React, {useState} from 'react'
import {axios} from 'axios'

function TodoForm(props) {

  
    const [task, setTask] = useState('');

    const handleChange = e => {      
        setTask(e.target.value);  
    };

    const handleSubmit = e => {     

        e.preventDefault();         

        props.onSubmit({            
            id:Math.floor(Math.random() * 1000),  
            text:task
        });


        setTask('');            
    }

    return (

        <form className = 'todo-form' onSubmit={handleSubmit}>
            <input 
                type = "text"
                placeholder = "Todo"
                value={task}
                name="text"
                className="todo-input"
                onChange = {handleChange}
            />
            <button className="todo-button">Add</button>
        </form>
    )
}

export default TodoForm;