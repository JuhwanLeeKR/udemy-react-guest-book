import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredContact, setEnteredContact] = useState('');
  const [enteredContentBody, setEnteredContentBody] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredContact.trim().length === 0 ||
      enteredContentBody.trim().length === 0
    ) {
      return;
    }
    if (+enteredContact < 0) {
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

  return (
    <div>
      <ErrorModal
        title="에러가 발생 했습니다!"
        message="무언가 잘못 되었어요!"
      />
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
