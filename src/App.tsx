import React, { useEffect, useState } from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import api from './utils/api';
import { Task } from './model/task';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: #B0C4DE;
    width:100vw;
    height:100vh;

    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<[] | Task[]>([]);
  const [todoValue, setTodoValue] = useState<'' | string>('');

  const getTasks = async () => {
    const response = await api.get('/tasks');
    setTodoList(response.data.data);
  };

  const addTask = async () => {
    try {
      const response = await api.post('/tasks', {
        task: todoValue,
        isComplete: false,
      });
      if (response.status === 200) {
        setTodoValue('');
        getTasks();
      } else {
        throw new Error('task can not be added');
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  const toggleComplete = async (id: string) => {
    try {
      const task = todoList.find((item) => item._id === id);
      const response = await api.put(`/tasks/${id}`, {
        isComplete: !task?.isComplete,
      });
      if (response.status === 200) {
        getTasks();
      } else {
        throw new Error('task can not be added');
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        getTasks();
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          addTask={addTask}
        />
        <TodoList>
          {todoList.length > 0 ? (
            todoList.map((item, index) => (
              <TodoItem
                item={item}
                key={index}
                toggleComplete={toggleComplete}
                deleteItem={deleteItem}
              />
            ))
          ) : (
            <h2>There is no Item to show</h2>
          )}
        </TodoList>
      </TodoTemplate>
    </>
  );
};

export default App;
