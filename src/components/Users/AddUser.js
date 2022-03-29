import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');
  const [enteredContent, setEnteredContent] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredPhone.length === 0 ||
      enteredContent.trim().length === 0
    ) {
      return;
    }
    if (+enteredPhone < 0) {
      return;
    }
    console.log(enteredUsername, enteredPhone, enteredContent);
    setEnteredUsername('');
    setEnteredPhone('');
    setEnteredContent('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  return (
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
          <label htmlFor="phone">연락처</label>
          <input
            id="phone"
            type="number"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
        </div>
        <label htmlFor="content" className={classes.blind}>
          내용
        </label>
        <textarea
          id="content"
          rows=""
          cols=""
          value={enteredContent}
          onChange={contentChangeHandler}
        />
        <Button type="submit">등록하기</Button>
      </form>
    </Card>
  );
};

export default AddUser;
