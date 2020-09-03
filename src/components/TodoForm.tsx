import React, { useState } from "react"

interface FormProps {
  onAddTodo: (text: string) => void
}

function TodoForm({ onAddTodo }: FormProps): React.ReactElement {
  const [form, setForm] = useState<string>("")

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddTodo(form)
    setForm("")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(event.target.value)
  }

  return (
    <form onSubmit={handlerSubmit} className='form'>
      <input
        className='form__input'
        type='text'
        value={form}
        onChange={handleChange}
      />
      <button className='form__btn'>Add Todo</button>
    </form>
  )
}

export default TodoForm
