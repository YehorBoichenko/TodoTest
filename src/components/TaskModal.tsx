import React from 'react';
import { Task } from '../redux/types/taskTypes';

type Props = {
  task: Task;
  onCheckboxChange: (taskId: number, status: 'done' | 'pending') => void;
  open: boolean;
  onClose: () => void;
};

const TaskModal: React.FC<Props> = ({ task, onCheckboxChange, onClose }) => {
  const handleCheckboxClick = () => {
    const updatedStatus = task.status === 'done' ? 'pending' : 'done';
    onCheckboxChange(task.id, updatedStatus);
  };

  return (
    <div className="modal open">
     <div className="modal-content">
        <h2>{task.title}</h2>
        <h3>Description:</h3>
        <p>{task.description}</p>
        <label className="checkboxModal-label">
          <input
            type="checkbox"
            className="checkbox-input"
            checked={task.status === 'done'}
            onChange={handleCheckboxClick}
          />
          Status: <span className="checkmarkModal"></span>
  
        </label>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TaskModal;