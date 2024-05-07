import React from 'react';

const TaskList = () => {
  const tasks = ['Learn React', 'Climb Mt. Everest', 'Run a marathon', 'Feed the dogs'];

  return (
    <div className="task-list">
      <h2>Things I need to do:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
