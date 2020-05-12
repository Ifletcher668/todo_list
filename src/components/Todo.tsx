import React, { useState } from 'react'

interface Task {
    title:string;
    isComplete:boolean
}

const TodoList = () => { 
    const [tasks, setTasks] = useState<Task[]>([])
    
    // nothing to do with the object initially. Just used to handle input functionality 
    // a custom hook like this will be used anytime there is an input on a form. 
    // It will be used to assign to an object later on  
    const [taskTitle, setTaskTitle] = useState<string>("")


    const handleSubmit = (event:any) => {
        event.preventDefault(); 
        const newTask:Task = {
            title: taskTitle,
            isComplete: false
        }

        setTasks([...tasks, newTask]); 
        // clear input box
        setTaskTitle("");
    }

    const handleDelete = (delIdx:number) => {
        setTasks(tasks.filter((_task:any, idx:any) => idx !== delIdx))
    }

    const handleTaskComplete = (idx:number) => {
        const task = tasks[idx];
        // task.isComplete = !task.isComplete 
        setTasks([...tasks])
    }
    // read funcitons being called from within other functions inside out. The innermost
    // function has to finish before the outer ones can resolve 

    // any eventListener will always PASS the event
    return (
        <div>
            <h2>Your Tasks</h2>

            <form onSubmit={handleSubmit}>
                <input value={taskTitle} type="text" onChange={(event:any) => {
                    setTaskTitle(event.target.value)
                }}/>
                <button>New Task</button>
            </form>

            {
                tasks.map((task:Task, idx:number) => {
                    return (
                        <div key={idx}>
                            <span>{task.title}</span>
                            <input type="checkbox" onChange={(event:any) => {handleTaskComplete(idx)}} />
                            <button onClick={(event:any) => {handleDelete( idx)}}>Assassinate task</button>
                        </div>
                    )
                })
            }
        </div>
    ) 
}

export default TodoList;