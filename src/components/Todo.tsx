import React from "react"
import { AiOutlineCheck } from "react-icons/ai"
import { BsX } from "react-icons/bs"
import { ITodo } from "../interfaces"

interface TodoProps {
  todo: ITodo
  onDelete(id: number): void
  onCheck(id: number): void
}
// function Todo({todo}: TodoProps): React.ReactElement {
const Todo: React.FC<TodoProps> = ({ todo, onDelete, onCheck }) => {
  return (
    <div>
      <div className='todo' key={todo.id}>
        <button
          onClick={() => onCheck(todo.id)}
          className={`todo__check ${todo.checked && "todo__check--checked"}`}
        >
          {todo.checked && <AiOutlineCheck />}
        </button>
        <p className='todo__text'>{todo.text}</p>
        <button className='todo__btn-delete' onClick={() => onDelete(todo.id)}>
          <BsX />
        </button>
      </div>
    </div>
  )
}

export default Todo
