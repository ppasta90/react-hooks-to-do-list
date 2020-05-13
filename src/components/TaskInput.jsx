import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskInput({addTask}) {

    // defining state
    const [task, setTask] = useState({
        id: "",
        content: "",
        done: false
    });

    //handling typing input
    const handleInput = (e) => {
        setTask({...task, content: e.currentTarget.value});
    };

    //handling submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.content !== ""){
            //passing TASK as argument of ADDTASK with a unique ID
            addTask({...task, id: uuidv4()});
            //clearing input field
            setTask({...task, content: ""});
        }
    };
    
    

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            value = {task.content}
            onChange={handleInput}
            placeholder="enter a task"
            />
            <button>Add</button>
        </form>
    </div>
    )
};

export default TaskInput;
