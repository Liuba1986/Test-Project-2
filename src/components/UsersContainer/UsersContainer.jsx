import React, { useContext } from 'react'
import { Context } from '../../context'
import UserCard from '../UserCard/UserCard'

export default function UsersContainer() {
    
      const { users } = useContext(Context)


  return (
    <div>
        {
            users.map(el => <UserCard key={el.id} {...el}/>)
        }
    </div>
  )
}
