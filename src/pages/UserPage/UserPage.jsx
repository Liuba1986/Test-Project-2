import React, { useEffect, useState } from 'react'
import { getAllUsers } from "../../requests/users.js";
import UsersContainer from '../../components/UsersContainer/UsersContainer.jsx';
import { Context } from '../../context.js';


export default function UserPage() {

  const [users, setUsers] = useState([]);

  useEffect(() => getAllUsers(setUsers), []);
  // useEffect(() => {}, []);
  // () => {} - вызываемая функция
  // [] - массив зависимостей, когда массив пустой функция из первого аргумента вызывается один раз при перезагрузке компонента

//   console.log(users);

  return (
      <div>
        <Context.Provider value={{ users }}>
        <UsersContainer />
        </Context.Provider>
      </div>
      ) 
}
