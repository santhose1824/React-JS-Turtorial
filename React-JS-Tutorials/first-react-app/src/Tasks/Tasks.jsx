import React, { useState } from "react";
import "./Tasks.css";
const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Complete React Tutorials", completed: true },
    { id: 2, task: "Learn Java", completed: true },
    { id: 3, task: "Learn Python", completed: false },
    { id: 4, task: "Complete React Native Tutorials", completed: false },
    { id: 5, task: "Complete React Project UI", completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="task-container">
      <h2 style={{ textAlign: "center" }}>Tasks</h2>
      {tasks.map((task, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "lightgray",
            borderRadius: 5,
            padding: 10,
            margin: 10,
          }}
        >
          <p className="tasks" key={task.id}>
            {task.task}
          </p>
          <button
            style={{
              background: task.completed ? "green" : "red",
            }}
            className="status"
            key={index}
            onClick={()=>toggleTaskCompletion(task.id)}
          >
           {task.completed ? "Finshed" : "Pending"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
