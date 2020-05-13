import React, { useState, Dispatch } from "react";

export interface Task {
    name: string;
    isComplete: boolean;
}

type Props = {
    tasks: Task[];
    setTasks: Dispatch<React.SetStateAction<Task[]>>;
};

const TodoList: React.FC<Props> = ({ tasks, setTasks }) => {
    const [taskName, setTaskName] = useState<string>("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const newTask: Task = {
            name: taskName,
            isComplete: false,
        };
        setTasks([...tasks, newTask]);
        // clear input box
        setTaskName("");
    };

    
    return (
        <div>
            <h2>Your Tasks</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={taskName}
                    type="text"
                    onChange={(event: any) => {
                        setTaskName(event.target.value);
                    }}
                />
                <button>New Task</button>
            </form>
        </div>
    );
};

export default TodoList;
