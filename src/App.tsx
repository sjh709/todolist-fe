import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';

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
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList>
          <TodoItem />
        </TodoList>
      </TodoTemplate>
    </>
  );
};

export default App;
