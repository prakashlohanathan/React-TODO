import React, { useState } from 'react';

const Card = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo?.name || '');
  const [editedDescription, setEditedDescription] = useState(todo?.description || '');
  const [status, setStatus] = useState(todo?.status || 'Not Completed');

  const handleEdit = () => {
    if (isEditing && typeof onEdit === 'function') {
      onEdit(todo, editedName, editedDescription, status);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    if (typeof onDelete === 'function') {
      onDelete(todo);
    }
  };

  return (
    <div className="card" style={{ flex: '0 0 18rem', margin: '10px' }}>
      <div className="card-body">
        {isEditing ? (
          <>
            <label htmlFor="edited-name">Name:</label>
            <input
              type="text"
              id="edited-name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <label htmlFor="edited-description">Description:</label>
            <input
              type="text"
              id="edited-description"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            /> 
            <label htmlFor="status">Status:</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Completed">Completed</option>
              <option value="Not Completed">Not Completed</option>
            </select>
          </>
        ) : (
          <>
            <h4>Name: {todo?.name}</h4>
            <p>Description: {todo?.description}</p>
            <p>Status: {todo?.status}</p>
          </>
        )}
        <div className="buttons">
          <button style={{ backgroundColor: 'lightblue' }} onClick={handleEdit}>
            {isEditing ? 'Save' : 'Edit'}
          </button> &nbsp; &nbsp;
          <button style={{ backgroundColor: 'orange' }} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
