import React from "react";
import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  const handleClick = (name) => {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const classNameCheck = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classNameCheck} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
