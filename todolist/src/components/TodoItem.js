import React from 'react';

const TodoItem = (props) => {
  const {todo, handleSelected} = props

  return <li onClick={() => handleSelected(todo)}>{todo.title}</li>
}

export default TodoItem