import CheckList from './CheckList';

const AddList = ({ tasks, onToggle, onDelete, onEdit }) => {
  const handleDoubleClick = (id) => {
    const newText = prompt('Edit task:', tasks.find((task) => task.id === id)?.text);
    if (newText !== null && newText !== undefined) {
      onEdit(id, newText);
    }
  };

  return (
    <div className='theList'>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.done ? 'line-through' : 'none' }}
          onDoubleClick={() => handleDoubleClick(task.id)}
        >
          {task.text}
          <CheckList task={task} onToggle={onToggle} onDelete={onDelete} />
        </li>
      ))}
    </div>
  );
};

export default AddList;
