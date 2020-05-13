import React from 'react';

function Task({task, deleteTask, toggleDone}){

    const handleDeleteTask = () => {
        deleteTask(task.id)
    };

    const handleCheckBox = () => {
        toggleDone(task.id)
    };

    return (
        <div style={{display:"flex", textAlign:"center"}}>
            <input type="checkbox" onClick = {handleCheckBox} />
            <span
                style = {{
                    textDecoration: task.done ? "line-through" : null
                }}
            >
                {task.content}
            </span>
            <button onClick = {handleDeleteTask}>X</button>
        </div>
    )
};

export default Task;