/*
 * 그냥 값만 읽으면 된다면, useRef가 useState보다 낫다.
 * (상태를 바꿔야하면 useState)
 * useState를 남발하면 불필요한 코딩과 노력이 들어간다.
 */

import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  // Ref는 항상 객체이며, 항상 current prop을 갖고 있고,
  // current prop은 ref가 연결된 실제 값을 가지고 있다.
  // 실제 DOM을 조작할 수 있으나, DOM을 조작하는 것은 React에 맡기고 데이터를 읽어 오는데 사용하자.
  const nameInputRef = useRef();
  const contactInputRef = useRef();
  const contentBodyInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserContact = contactInputRef.current.value;
    const enteredUserContentBody = contentBodyInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredUserContact.trim().length === 0 ||
      enteredUserContentBody.trim().length === 0
    ) {
      setError({
        title: '입력 값이 유효하지 않습니다 😓',
        message:
          '유효한 이름과 연락처, 내용을 입력해주세요. (모두 채워주세요 😎)',
      });
      return;
    }
    if (+enteredUserContact < 0) {
      setError({
        title: '연락처가 유효하지 않습니다 😓',
        message: '유효한 연락처를 입력해주세요 😎',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserContact, enteredUserContentBody);
    nameInputRef.current.value = '';
    contactInputRef.current.value = '';
    contentBodyInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            <input id="username" type="text" ref={nameInputRef} />
            <label htmlFor="contact">연락처</label>
            <input id="contact" type="number" ref={contactInputRef} />
          </div>
          <label htmlFor="contentBody" className={classes.blind}>
            내용
          </label>
          <textarea
            id="contentBody"
            rows=""
            cols=""
            ref={contentBodyInputRef}
          />
          <Button type="submit">등록하기</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
