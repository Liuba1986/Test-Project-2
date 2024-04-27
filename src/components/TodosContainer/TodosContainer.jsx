import React, { useContext, useState } from 'react'
import { Context } from '../../context'
import TodoCard from '../TodoCard/TodoCard'
import styles from './TodosContainer.module.css'

export default function TodosContainer() {

    const { todos } = useContext(Context)

  return (
    <div className={styles.todosContainer}>
        {
           todos.map(el => <TodoCard key={el.id} {...el}/>)
        }
    </div>
  )
}
