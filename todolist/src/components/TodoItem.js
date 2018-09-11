import React from 'react';

const TodoItem = (props) => {
  const {todo, handleSelected} = props

  return <li onClick={() => handleSelected(todo)}><div>{todo.title}</div></li>
}

export default TodoItem