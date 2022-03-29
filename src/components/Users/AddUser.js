import React from 'react';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">방문자명</label>
      <input id="username" type="text" />
      <label htmlFor="phone">연락처</label>
      <input id="phone" type="number" />
      <label htmlFor="content">내용</label>
      <textarea id="content" rows="" cols="" required />
      <button type="submit">등록하기</button>
    </form>
  );
};

export default AddUser;
