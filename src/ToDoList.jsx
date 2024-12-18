import React, { useState }from 'react';
function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t =>[...t, {text: newTask, completed: false}]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }

    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
        
    }
    function checkOffTask(index){
        const updatedTasks = tasks.map((task, i) =>
        i === index ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks);

    }

    return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>

        <div>
            <input 
            type="text" 
            placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange}/>
            <button 
            className='add-button'
            onClick={addTask}>
           <i className="fa-solid fa-circle-plus"></i>
           </button>
        </div>
        <ol>
         {tasks.map((task, index) =>
            <li key={index}
            style={{
                textDecoration: task.completed ? "line-through" : "none",
                backgroundColor: task.completed ? "#d3f9d8": "white",
            }}>
                <span className="text">{task.text}</span>
                <button
                className='check-button'
                onClick={() => checkOffTask(index)}>
                <i className="fa-solid fa-check"></i>
                </button>
                <button
                className='delete-button'
                onClick={() => deleteTask(index)}>
                    <i className="fa-solid fa-trash-can"></i></button>
                    <button
                className='move-button'
                onClick={() => moveTaskUp(index)}>
                    <i className="fa-solid fa-circle-up"></i></button>
                    <button
                className='move-button'
                onClick={() => moveTaskDown(index)}>
                    <i className="fa-solid fa-circle-down"></i></button>

            </li>
        
        )}


          
        </ol>

    </div>);
}
export default ToDoList;