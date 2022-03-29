import React, { useState } from 'react';

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
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
