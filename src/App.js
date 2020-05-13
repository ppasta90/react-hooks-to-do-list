import React, {useState, useEffect} from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const storageKey = "storage";

function App() {

  // defining state
  const [tasks, setTasks] = useState([]);

  //useEffect for storage
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(storageKey))
    if (storage){
      setTasks(storage)
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem(storageKey, JSON.stringify(tasks))
  },[tasks]);


  // add a task (try to do in a different way!)
  const addTask = (task) => {
    setTasks([...tasks, task])
  };

  // removing selected task from the array of tasks
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  };

  //handling checkbox

  const toggleDone = (taskId) => {
    setTasks(
      tasks.map(task => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done
        };
      }
      return task;
    })
    )
  };

  
  return (
    <div style={{width:"fit-content", margin: "auto"}}>
      <h1>Add an item to your list </h1>
      <TaskInput addTask={addTask}/>
      <TaskList tasks = {tasks} deleteTask = {deleteTask} toggleDone={toggleDone}/>
    </div>
  );
}

export default App;
