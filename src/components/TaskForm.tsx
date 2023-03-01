import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/reducers/taskReducers';
import { Task } from '../redux/types/taskTypes';
import { RootState } from '../redux/store';


type Props = {};

const TaskForm: React.FC<Props> = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [titleError, setTitleError] = React.useState(false);
  const [descriptionError, setDescriptionError] = React.useState(false);
  const dispatch = useDispatch();
  const taskCount = useSelector((state: RootState) => state.task.tasks.length);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitleError(title === '');
    setDescriptionError(description === '');

    if (title === '' || description === '') {
      return;
    }

    const task: Task = {
      id: taskCount + 1,
      title,
      description,
      status: 'New',
    };

    dispatch(addTask(task));

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new Task</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        {titleError && <span className="error">This field is empty</span>}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        {descriptionError && <span className="error">This field is empty</span>}
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default TaskForm;
