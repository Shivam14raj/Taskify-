import React, { useState } from 'react'
import './Card.css'
import PopModel from '../PopModel.jsx'
import TodoServices from '../../services/TodoService.js'
import { toast } from 'react-toastify'

const Card = ({ alltask, getUserTask }) => {
  const [openModal, setOpenModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const handleModify = (task) => {
    setSelectedTask(task)
    setOpenModal(true)
  }

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this task?')

      if (!confirmDelete) return

      const response = await TodoServices.deleteTodo(id)

      toast.success(response.data.message || 'Task deleted successfully')

      if (getUserTask) {
        getUserTask()
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
      console.log(error)
    }
  }

  const closeModal = () => {
    setOpenModal(false)
    setSelectedTask(null)
  }

  return (
    <>
      <div className="cards-grid">
        {alltask?.map((task) => (
          <div className="task-card" key={task._id}>
            <div className="task-card-top">
              <h3>{task.title}</h3>

              <span className={`priority ${task.priority}`}>
                {task.priority}
              </span>
            </div>

            <p className="task-description">{task.description}</p>

            <div className="task-info">
              <span>{task.category || 'general'}</span>
              <span>{task.status || 'pending'}</span>
            </div>

            {task.dueDate && (
              <p className="due-date">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </p>
            )}

            <div className="card-actions">
              <button className="edit-btn" onClick={() => handleModify(task)}>
                Modify
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {openModal && (
        <PopModel
          task={selectedTask}
          onClose={closeModal}
          getUserTask={getUserTask}
        />
      )}
    </>
  )
}

export default Card