import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredContact, setEnteredContact] = useState('');
  const [enteredContent, setEnteredContent] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredContact.trim().length === 0 ||
      enteredContent.trim().length === 0
    ) {
      return;
    }
    if (+enteredContact < 0) {
      return;
    }
    props.onAddUser(enteredUsername, enteredContact, enteredContent);
    setEnteredUsername('');
    setEnteredContact('');
    setEnteredContent('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const contactChangeHandler = (event) => {
    setEnteredContact(event.target.value);
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
          <label htmlFor="contact">연락처</label>
          <input
            id="contact"
            type="number"
            value={enteredContact}
            onChange={contactChangeHandler}
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
