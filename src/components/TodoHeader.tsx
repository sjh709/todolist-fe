import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TodoHeaderBlock = styled.div`
  padding-top: 15px;

  h1 {
    text-align: center;
    margin-bottom: 15px;
  }
  .input-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .input-box {
    width: 90%;
    height: 50px;
    padding: 0px 10px;
    border: 1px solid #dcdcdc;
    border-radius: 2em;
  }
  .add-btn {
    position: absolute;
    right: 6%;
    border: none;
    background: transparent;
    font-size: 2em;
    font-weight: 500;
    color: #ba55d3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .header-line {
    width: 90%;
    height: 1px;
    background: #dcdcdc;
    margin: 20px auto;
  }
`;

const TodoHeader: React.FC = () => {
  return (
    <TodoHeaderBlock>
      <h1>Todo List</h1>
      <div className='input-wrap'>
        <input
          type='text'
          placeholder='할일을 입력하세요.'
          className='input-box'
        />
        <button className='add-btn'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className='header-line' />
    </TodoHeaderBlock>
  );
};

export default TodoHeader;
