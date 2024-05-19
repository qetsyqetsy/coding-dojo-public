import React, { useState, useEffect } from "react";

const App = () => {
  // State variable to store the tasks
  const [tasks, setTasks] = useState(() => {
    console.log("Initializing state from local storage");
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (error) {
        console.error("Failed to parse tasks from local storage", error);
        return [];
      }
    }
    return [];
  });

  // State variable to store the new task input
  const [newTask, setNewTask] = useState("");

  // Save tasks to local storage whenever the tasks state variable changes
  useEffect(() => {
    console.log("Tasks state changed, saving to local storage:", tasks);
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to local storage", error);
    }
  }, [tasks]);

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [...tasks, { text: newTask, completed: false }];
      console.log("Adding new task:", newTask);
      setTasks(updatedTasks);
      setNewTask("");
    } else {
      console.log("New task input is empty, not adding task");
    }
  };

  // Function to handle key press events
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // Function to delete a task
  const deleteTask = (index) => {
    console.log("Deleting task at index:", index);
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (index) => {
    console.log("Toggling task completion at index:", index);
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Render the component
  return (
    <div className="app">
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="New task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {task.text}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
