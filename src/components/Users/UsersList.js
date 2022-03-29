import React from 'react';

import Card from '../UI/Card';

import classes from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <div key={user.id}>
            <li>
              {user.name} (contact: {user.contact})
            </li>
            <li>{user.content}</li>
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
