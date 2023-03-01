import React from 'react';
import { Task } from '../redux/types/taskTypes';
import TaskModal from './TaskModal';

type Props = {
  task: Task;
  handleCheckboxChange: (taskId: number, status: 'done' | 'pending') => void;
};

const TaskListItem: React.FC<Props> = ({ task, handleCheckboxChange }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCheckboxClick = () => {
    const updatedStatus = task.status === 'done' ? 'pending' : 'done';
    handleCheckboxChange(task.id, updatedStatus);
  };

  return (
    <tr className="task-table-row">
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={task.status === 'done'}
            onChange={handleCheckboxClick}
          />
          <span className="checkmark"></span>
        </label>
      </td>
      <td>
        <button onClick={handleOpenModal}>Details</button>
        {modalOpen && (
          <TaskModal
            task={task}
            onClose={handleCloseModal}
            onCheckboxChange={handleCheckboxChange}
            open={modalOpen}
          />
        )}
      </td>
    </tr>
  );
};

export default TaskListItem;
