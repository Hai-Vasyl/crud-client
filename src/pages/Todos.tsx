import React, { useState, useEffect } from "react"
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import { ITodo } from "../interfaces"

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: Date.now(), text: "Buy milk", checked: true },
  ])

  useEffect(() => {
    let todos: string = localStorage.getItem("todos") || "[]"
    setTodos(JSON.parse(todos) as ITodo[])
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = (text: string) => {
    const todo = { id: Date.now(), text, checked: false }
    setTodos((prevTodo) => [todo, ...prevTodo])
  }

  const handleRemove = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const handleCheck = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked }
        }
        return todo
      })
    )
  }

  return (
    <>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onCheck={handleCheck} onDelete={handleRemove} />
    </>
  )
}

export default Todos
