import React, {useState} from 'react'


function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return (
    <div className="to-do-list">
        <h1 className="heading">Just do it.</h1>

        <div className="text-add-div">
            <input className="input-box"
            type="text"
            placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange}
            
            />
            <button 
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>
        
        
            {tasks.map((task, index) => 
                <div key={index} className="todo-div">
                    <span className="todo-text">{task}</span>
                    <button 
                        className="button"
                        onClick={() => deleteTask(index)}>
                        🗑
                    </button>
                    <button 
                        className="button"
                        onClick={() => moveTaskUp(index)}>
                        ↑
                    </button>
                    <button 
                        className="button"
                        onClick={() => moveTaskDown(index)}>
                        ↓
                    </button>
                </div>
                
            )}
        

    </div>
            );
}

export default ToDoList