import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'
import '../css/create.css'


const Create = ({ todo, settodo }) => {
  const [title, settitle] = useState("")

  const changeSubmit = (e) => {
    e.preventDefault()
    const trimpart = title.trim()

    if (trimpart === "") {
      toast.info("Please enter a todo task")
      return
    }

    const newtodo = {
      id: nanoid(),
      title: title,
      iscompleted: false
    }

    settodo([...todo, newtodo])
    toast.success("Todo added successfully")
    settitle("")
  }

  return (
    <div className="create-container">
      <h1 className="create-title">
        Adding a <span className="highlight"><em>Todo</em></span> Task
      </h1>

      <form onSubmit={changeSubmit} className="create-form">
        <input
          className="input-field"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Enter your task..."
        />
        <button className="btn btn-blue">
          Add
        </button>
      </form>
    </div>
  )
}

export default Create
