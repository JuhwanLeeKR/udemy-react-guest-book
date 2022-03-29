import React from 'react';

import Card from '../UI/Card';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div className={classes.inputFlex}>
          <label htmlFor="username">방문자명</label>
          <input id="username" type="text" />
          <label htmlFor="phone">연락처</label>
          <input id="phone" type="number" />
        </div>
        <label htmlFor="content" className={classes.blind}>
          내용
        </label>
        <textarea id="content" rows="" cols="" required />
        <button type="submit">등록하기</button>
      </form>
    </Card>
  );
};

export default AddUser;
