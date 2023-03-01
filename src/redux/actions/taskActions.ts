import { Task } from "../types/taskTypes";

export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASKS = "UPDATE_TASKS";
export const DELETE_TASK = "DELETE_TASK";

export interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

export interface UpdateTasksAction {
  type: typeof UPDATE_TASKS;
  payload: { taskId: number, status: string };
}

export interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number; 
}

export type TaskActionTypes = AddTaskAction | UpdateTasksAction | DeleteTaskAction;

export const addTask = (task: Task): AddTaskAction => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTasks = (taskId: number, status: string): UpdateTasksAction => ({
  type: UPDATE_TASKS,
  payload: { taskId, status },
});


export const deleteTask = (taskId: number): DeleteTaskAction => ({
  type: DELETE_TASK,
  payload: taskId,
});
