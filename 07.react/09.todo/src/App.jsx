import "./App.scss"
import React, { useState } from 'react'
import moment from "moment"

const App = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [todos, setTodos] = useState([])

  const create_todo = (e) => {
    e.preventDefault()

    if (!title || !description) {
      alert("title and description are required")
      return
    }

    const newTodo = {
      title: title,
      description: description,
      createdAt: new Date().getTime()
    }

    setTodos([newTodo, ...todos])
    e.target.reset()
  }

  const delete_todo = (time) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.createdAt !== time
    })
    setTodos(filteredTodos)
  }

  const edit_todo = (time) => {
    // get old todo
    const oldTodo = todos.find((todo) => {
      return todo.createdAt === time
    })

    // prompt old title, old description
    const updatedTitle = prompt("Enter updated title", oldTodo.title)
    const updatedDesc = prompt("Enter updated description", oldTodo.description)

    // todos upate krna hai uss id walay ko
    const updatedTodos = todos.map((todo) => {
      return todo.createdAt === time ?
        {
          ...todo,
          title: updatedTitle,
          description: updatedDesc,
          // createdAt: new Date().getTime()
        }
        : todo
    })
    setTodos(updatedTodos)

  }

  return (
    <div className="main">
      <h1>Todo App Reactjs</h1>
      <form onSubmit={create_todo}>

        <input type="text" placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea placeholder="Enter text..."
          required
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button>Submit</button>
      </form>

      <div className="result">
        {todos.map((singleTodo, index) => {
          return (
            <div key={index} className="post">
              <h2>{singleTodo.title}</h2>
              <p>{singleTodo.description}</p>
              <b>{moment(singleTodo.createdAt).fromNow()}</b>
              <div className="buttonContainer">
                <button onClick={() => delete_todo(singleTodo.createdAt)}>Delete</button>
                <button onClick={() => edit_todo(singleTodo.createdAt)}>Edit</button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App
