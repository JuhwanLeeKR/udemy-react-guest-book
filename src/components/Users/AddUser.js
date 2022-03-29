import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredContact, setEnteredContact] = useState('');
  const [enteredContentBody, setEnteredContentBody] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredContact.trim().length === 0 ||
      enteredContentBody.trim().length === 0
    ) {
      setError({
        title: '입력 값이 유효하지 않습니다 😓',
        message:
          '유효한 이름과 연락처, 내용을 입력해주세요. (모두 채워주세요 😎)',
      });
      return;
    }
    if (+enteredContact < 0) {
      setError({
        title: '연락처가 유효하지 않습니다 😓',
        message: '유효한 연락처를 입력해주세요 😎',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredContact, enteredContentBody);
    setEnteredUsername('');
    setEnteredContact('');
    setEnteredContentBody('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const contactChangeHandler = (event) => {
    setEnteredContact(event.target.value);
  };

  const contentBodyChangeHandler = (event) => {
    setEnteredContentBody(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div className={classes.inputFlex}>
            <label htmlFor="username">방문자명</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
            <label htmlFor="contact">연락처</label>
            <input
              id="contact"
              type="number"
              value={enteredContact}
              onChange={contactChangeHandler}
            />
          </div>
          <label htmlFor="contentBody" className={classes.blind}>
            내용
          </label>
          <textarea
            id="contentBody"
            rows=""
            cols=""
            value={enteredContentBody}
            onChange={contentBodyChangeHandler}
          />
          <Button type="submit">등록하기</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
