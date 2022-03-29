import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState();
  const [enteredPhone, setEnteredPhone] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    console.log(enteredUsername, enteredPhone);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div className={classes.inputFlex}>
          <label htmlFor="username">방문자명</label>
          <input id="username" type="text" onChange={usernameChangeHandler} />
          <label htmlFor="phone">연락처</label>
          <input id="phone" type="number" onChange={phoneChangeHandler} />
        </div>
        <label htmlFor="content" className={classes.blind}>
          내용
        </label>
        <textarea id="content" rows="" cols="" required />
        <Button type="submit">등록하기</Button>
      </form>
    </Card>
  );
};

export default AddUser;
