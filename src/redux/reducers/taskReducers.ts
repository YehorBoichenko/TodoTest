import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/taskTypes';

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Omit<Task, 'id'>>) {
      const taskCount = state.tasks.length;
      const task: Task = {
        id: taskCount + 1,
        ...action.payload,
        status: 'New',
      };
      state.tasks.push(task);
    },
    updateTaskStatus(state, action: PayloadAction<{ id: number; status: string }>) {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].status = action.payload.status;
      }
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
