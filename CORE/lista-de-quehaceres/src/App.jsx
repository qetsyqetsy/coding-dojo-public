import React, { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]); // State variable to store the tasks
  const [newTask, setNewTask] = useState(""); // State variable to store the new task input

/* In this section, we import the necessary dependencies from React and define a functional component 
called App. We also define two state variables using the useState hook: tasks to store the tasks 
and newTask to store the new task input. */

  
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks"); // Retrieve the tasks from local storage
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); // If tasks exist in local storage, set the tasks state variable
    }
  }, []);

/* Here, we use the useEffect hook to retrieve the tasks from local storage when the component mounts.
We check if there are saved tasks in local storage and if so, we parse the JSON string and update the
tasks state variable with the retrieved tasks. */

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save the tasks to local storage whenever the tasks state variable changes
  }, [tasks]);

/* This useEffect hook is responsible for saving the tasks to local storage whenever the tasks state variable changes. We use the setItem
method of the localStorage object to store the tasks as a JSON string. */

  const addTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [...tasks, { text: newTask, completed: false }]; // Create a new array with the new task added
      setTasks(updatedTasks); // Update the tasks state variable with the new array
      setNewTask(""); // Clear the new task input
    }
  };

/* This function addTask is called when the "Add Task" button is clicked. It checks if the newTask input is not empty (after trimming
any leading or trailing whitespace). If it's not empty, it creates a new array updatedTasks by spreading the existing tasks array 
and adding a new task object with the text and completed properties. Then, it updates the tasks state variable with the new array
and clears the newTask input.  */

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask(); // Call the addTask function when the Enter key is pressed
    }
  };

/* This function handleKeyPress is called when a key is pressed while the newTask input is focused. It checks if the pressed key 
is the Enter key and if so, it calls the addTask function to add the task. */
  
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Create a new array without the task at the specified index
    setTasks(updatedTasks); // Update the tasks state variable with the new array
  };

/* This function deleteTask is called when the "Delete" button of a task is clicked. It creates a new array updatedTasks by filtering
the existing tasks array and excluding the task at the specified index. 
Then, it updates the tasks state variable with the new array. */

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ); // Create a new array with the task at the specified index toggled between completed and not completed
    setTasks(updatedTasks); // Update the tasks state variable with the new array
  };

/* This function toggleTaskCompletion is called when the checkbox of a task is toggled. It creates a new array updatedTasks 
by mapping over the existing tasks array. For the task at the specified index, it toggles the completed property by using
the spread operator to copy the task object and flipping the value of completed. For all other tasks, it returns the task as is.
Then, it updates the tasks state variable with the new array. */


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

/* Finally, in the return statement, we render the JSX elements that make up the task list. We have a heading, 
an input field for adding new tasks, a button to add tasks, and an unordered list to display the tasks. 
Each task is rendered as a list item with a checkbox, the task text, and a delete button. The style attribute
is used to apply a line-through text decoration to completed tasks. The key prop is set to the index of each task
in the tasks array to ensure efficient rendering and proper reconciliation. */

export default App;
