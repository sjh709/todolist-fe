import React from 'react';
import styled from 'styled-components';

interface OwnProps {
  children: React.ReactNode;
}

const TodoTemplateBlock = styled.div`
  width: 500px;
  height: 600px;
  background: #ffffff;
  border-radius: 13px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  @media (max-width: 450px) {
    width: 300px;
  }
`;

const TodoTemplate: React.FC<OwnProps> = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
