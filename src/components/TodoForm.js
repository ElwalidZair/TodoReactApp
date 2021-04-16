import React, {useState} from 'react'
import TodoList from './TodoList'

function TodoForm(props) {

    //declaring state variable which we will call task
    const [task, setTask] = useState("");

    const handleChange = e => {
        setTask(e.target.value);
    };

    const handleSubmit = e => {

        e.preventDefault();

        props.onSubmit({ 
            id:Math.floor(Math.random() * 200),
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