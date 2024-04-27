import React from "react";
import styles from "./TodoCard.module.css";

export default function TodoCard({ todo, completed }) {
  return (
    <div className={styles.todoCard}>
      <p>Todo: {todo}</p>
      <p>Status: {completed ? "done" : "not done"}</p>
    </div>
  );
}

