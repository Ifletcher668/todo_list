import React, { useState, CSSProperties, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList, { Task } from "./components/Todo";

const App = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleDelete = (delIdx: number) => {
        setTasks(tasks.filter((_task: Task, idx: number) => idx !== delIdx));
    };

    const handleTaskComplete = (idx: number) => {
        const task = tasks[idx];
        task.isComplete = !task.isComplete;
        setTasks([...tasks]);
    };

    useEffect(() => {
      // set variable to be the string returned from localStorage
      const data = localStorage.getItem("todo-list");
      // check if this actually returns anything... 
      
      if(data) {
        // set my array of tasks to a parsed verson of the JSON returned
        setTasks(JSON.parse(data))
      }
    },[]) // pass an empty dependancy array to update ONLY WHEN PAGE REFRESHED

    useEffect(() => {
      localStorage.setItem("todo-list", JSON.stringify(tasks)) 
      // take all of the tasks array and convert to string
      // literally that simple. 
      // turns the whole array from [stuff, stuff, stuff]
      // to "[stuff, stuff, stuff]"  
      console.log(typeof tasks)
      console.log(typeof JSON.stringify(tasks))
      console.log(JSON.stringify(tasks))
    },[tasks])
    


    return (
        <div className="App">
            <header className="App-header">
                <TodoList tasks={tasks} setTasks={setTasks} />
            </header>
            <main className="App-main">
                <div className="Container">
                    <div>
                        {tasks.map((task: Task, idx: number) => {
                            const styles: CSSProperties = {
                                color: "",
                                fontWeight: 0,
                                fontSize: "1em",
                            };
                            if (task.isComplete === true) {
                                styles.color = "green";
                                styles.fontWeight = 200;
                                styles.fontSize = "1.2em";
                            }
                            return (
                                <div key={idx}>
                                    {task.isComplete === true ? (
                                        <span style={styles}>&#x1F5F8;</span>
                                    ) : (
                                        ""
                                    )}
                                    <span style={styles}>{task.name}</span>
                                    <input
                                        type="checkbox"
                                        onChange={() => {
                                            handleTaskComplete(idx);
                                        }}
                                    />
                                    <button
                                        onClick={() => {
                                            handleDelete(idx);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
