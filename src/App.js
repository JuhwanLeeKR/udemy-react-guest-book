import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uContact, uContentBody) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          contact: uContact,
          contentBody: uContentBody,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
    // <> ... </> 을 사용하여도 무관하다.
    // 다만 유효한 HTML이 아니며, 모든 프로젝트에 적합합 JSX라고 할 수 없다.
    // 프로젝트 셋업이 이를 지원해야 사용 가능하다.
    // Fragement를 import 해주면 React.Fragment가 아닌 Fragment로 사용 가능하다
  );
}

export default App;
