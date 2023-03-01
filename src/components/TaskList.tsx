import React from 'react';
import { Task } from '../redux/types/taskTypes';
import TaskListItem from './TaskListItem';

type Props = {
  tasks: Task[];
  onCheckboxChange: (taskId: number, status: 'done' | 'pending') => void;
};

const TaskList: React.FC<Props> = ({ tasks, onCheckboxChange }) => {
  const handleCheckboxChange = (taskId: number, status: 'done' | 'pending') => {
    onCheckboxChange(taskId, status);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} handleCheckboxChange={handleCheckboxChange} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
