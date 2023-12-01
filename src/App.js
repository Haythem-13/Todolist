import AddList from './AddList';
import AddButton from './AddButton';

import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTasks = (theText) => {
    const newTask = {
      id: Date.now(),
      text: theText,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const onToggle = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      })
    );
  };

  const onDelete = (id) => {
    const deleted = tasks.filter((task) => task.id !== id);
    setTasks(deleted);
  };

  const onEdit = (id, newText) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        } else {
          return task;
        }
      })
    );
  };

  const onDeleteAll = () => {
    // Set tasks to an empty array to delete all tasks
    setTasks([]);
  };

  return (
    <div className='root'>
      <h1>To<span>DO</span> LIST</h1>
      <AddButton addTasks={addTasks} />
      <button className="delete-all-btn" onClick={onDeleteAll}>Delete All</button>
      <AddList tasks={tasks} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default App;
