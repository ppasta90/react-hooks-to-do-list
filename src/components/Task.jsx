import React from 'react';

function Task({task, deleteTask, toggleDone}){

    const handleDeleteTask = () => {
        deleteTask(task.id)
    };

    const handleCheckBox = () => {
        toggleDone(task.id)
    };

    return (
        <div className = "border border-black rounded mb-4">
            <div className= "flex items-center justify-around">
                <input className = "m-6 " type="checkbox" onClick = {handleCheckBox} />
                <span
                className = "w-2/3"
                    style = {{
                        textDecoration: task.done ? "line-through" : null
                    }}
                >
                    {task.content}
                </span>
                <button
                className =  "m-6"
                onClick = {handleDeleteTask}>Delete</button>
            </div>
        </div>
    )
};

export default Task;