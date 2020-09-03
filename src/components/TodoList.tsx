import React from "react"
import { ITodo } from "../interfaces"
import Todo from "./Todo"

type TodosProps = {
  todos: ITodo[]
  onDelete(id: number): void
  onCheck(id: number): void
}

const TodoList: React.FC<TodosProps> = ({ onDelete, todos, onCheck }) => {
  return (
    <div className='todos'>
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))
      ) : (
        <span className='plug'>No todos</span>
      )}
    </div>
  )
}

export default TodoList
