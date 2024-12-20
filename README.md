# Simple Task Management Application with Redux

This project creates a simple task management application using React Native and Redux. The app supports basic operations such as adding, updating, and deleting tasks. Redux is used to manage the application's state.

## Project Structure

- Screens: Contains the different screens of the application

  - Dashboard, Tasks, AddTask, UpdateTask

- Components: Reusable components used throughout the app

  - Button, Input, TaskItem, FloatActionButton, TasksStatusCard

- Redux: Files related to Redux used for managing the application's state

  - actions, reducers, store

- Utils: Helper functions used across the app

  - setColor

## Features

1. **Task List:**  
   You can list all tasks and access detailed information for each task.
2. **Add Task:**  
   You can create a new task.
3. **Update Task:**  
   You can update the information of an existing task.
4. **Delete Task:**  
   You can delete a task from the list.
5. **Status Statistics:**  
   Statistics can be displayed according to the different statuses of the tasks (In Progress, In Review, On Hold, Completed).

## State Management with Redux

This application provides state management using Redux. Redux is a library that allows all components to interact in an organized manner over the state of their execution. The state is stored in a central store (repository) and packages that depend on this store automatically receive changes in state.

## Redux Flow

### 1.Actions

They are JavaScript objects that specify what types of changes the application should make, such as adding or deleting a task.

- **addNewTask(task):** Adds a new task.

- **deleteTask(taskId):** Deletes a task.

- **updateTask(task):** Updates an existing task.

### 2.Reducers

Defines state changes triggered by Actions. Reducers take the current state and the action and return a new state.

- **tasksReducer:** Manages tasks, their status, and operations related to tasks.

### 3.Store:

It is a centralized repository that stores the state of the application. Redux store manages the state of the entire application and provides it to the components, allowing the state to be updated.

### 4.Dispatch:

A function used to trigger a specific action in components. An action is dispatched with the dispatch function.

### 5.Selector:

Used to retrieve data from the Redux store. The useSelector hook is used to retrieve data from the store.

## Extra Features

- **Victory Pie:** VictoryPie is used to visually present the statistics of the project. It shows the percentage distribution of tasks according to the status.

## Technologies Used

- React Native
- Redux
- Redux Thunk
- Victory Native

## Screenshots

![](./src/assets/gif/musemind.gif)
