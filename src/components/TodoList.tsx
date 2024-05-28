import React from 'react';
import styled from 'styled-components';

interface OwnProps {
  children: React.ReactNode;
}

const TodoListBlock = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow-y: auto;
  height: 400px;
`;

const TodoList: React.FC<OwnProps> = ({ children }) => {
  return <TodoListBlock>{children}</TodoListBlock>;
};

export default TodoList;
