import React from 'react'
import { toast } from 'react-toastify'
import '../css/detail.css'
const Read = ({ todo, settodo }) => {
  const removedelete = (id) => {
    settodo(todo.filter(t => t.id !== id))
    toast.error("Todo deleted")
  }

  const togglecomplete = (id) => {
    settodo(todo.map(t =>
      t.id === id ? { ...t, iscompleted: !t.iscompleted } : t
    ))
  }

  return (
    <div className="read-container">
      <h1 className="read-title">
        <span className="highlight-pink">Pending</span> Tasks
      </h1>

      <ol className="todo-list">
        {todo.map((t) => (
          <li key={t.id} className="todo-item">
            <span className={`todo-text ${t.iscompleted ? "completed" : ""}`}
            >{t.title}</span>
            <div className="btn-group">
              {!t.iscompleted && (
                <button
                  onClick={() => togglecomplete(t.id)}
                  className="btn btn-green"
                >
                  Complete
                </button>
              )}
              <button
                onClick={() => removedelete(t.id)}
                className="btn btn-red"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Read
