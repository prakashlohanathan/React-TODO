import React, { useState } from 'react';
import Card from './Components/Card';
import './index.css';
import DropDown from './Components/DropDown';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [taskInputValue, setTaskInputValue] = useState('');
  const [taskDescriptionValue, setTaskDescriptionValue] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleTodo = () => {
    const todo = { name: taskInputValue, description: taskDescriptionValue, status: 'Not Completed' };
    setTodos([...todos, todo]);
    setTaskInputValue('');
    setTaskDescriptionValue('');
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  const handleEdit = (todo, editedName, editedDescription, status) => {
    setTodos(
      todos.map((item) => {
        if (item === todo) {
          return { ...item, name: editedName, description: editedDescription, status };
        }
        return item;
      })
    );
  };

  const handleStatusFilter = (selectedStatus) => {
    setStatusFilter(selectedStatus);
  };

  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === 'All') {
      return true;
    } else if (statusFilter === 'Completed') {
      return todo.status === 'Completed';
    } else if (statusFilter === 'Not Completed') {
      return todo.status === 'Not Completed';
    }
    return false;
  });

  return (
    <div>
      <h1>MY TODO APP</h1>
      <div className="task-form" style={{ marginTop: '10%' }}>
        <input
          value={taskInputValue}
          onChange={(e) => setTaskInputValue(e.target.value)}
          placeholder="Todo Name"
        />
        &nbsp; &nbsp; &nbsp;
        <input
          value={taskDescriptionValue}
          onChange={(e) => setTaskDescriptionValue(e.target.value)}
          placeholder="Todo Description"
        />
        &nbsp; &nbsp;
        <button onClick={handleTodo}>Add Todo</button>
      </div>
      <DropDown selectedOption={statusFilter} onSelect={handleStatusFilter} />
      <div className="task-list">
        <ul>
          {filteredTodos.map((todo, index) => (
            <li key={`todo-item-${index}`}>
              <Card todo={todo} onDelete={handleDelete} onEdit={handleEdit} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
