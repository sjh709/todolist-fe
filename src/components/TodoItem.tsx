import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../model/task';

interface OwnProps {
  item: Task;
  toggleComplete(id: string): void;
  deleteItem(id: string): void;
}

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ba55d3;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: #ba55d3;
`;

const Text = styled.div`
  font-size: 1em;
  color: #222425;
  flex: 1;
`;

const Remove = styled.div`
  cursor: pointer;
  color: #222425;

  &:hover {
    color: #ba55d3;
  }
`;

const TodoItem: React.FC<OwnProps> = ({ item, toggleComplete, deleteItem }) => {
  return (
    <TodoItemBlock>
      <CheckCircle onClick={() => toggleComplete(item._id)}>
        {item.isComplete && <FontAwesomeIcon icon={faCheck} />}
      </CheckCircle>
      <Text>{item.task}</Text>
      <Remove>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(item._id)} />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
