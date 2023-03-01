import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import { Task } from './redux/types/taskTypes';
import { updateTaskStatus } from './redux/reducers/taskReducers';

function App() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const dispatch = useDispatch();

  const handleCheckboxChange = (taskId: number, status: string) => {
    dispatch(updateTaskStatus({ id: taskId, status }));
  };



  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList
        tasks={tasks as Task[]}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}

export default App;
