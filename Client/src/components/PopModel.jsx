import React, { useState } from 'react'
import './PopModel.css'
import { toast } from 'react-toastify'
import TodoServices from '../services/TodoService.js'

const PopModel = ({ onClose, getUserTask, task }) => {
  const isEdit = Boolean(task)

  const [title, setTitle] = useState(task?.title || '')
  const [description, setDescription] = useState(task?.description || '')
  const [priority, setPriority] = useState(task?.priority || 'low')
  const [dueDate, setDueDate] = useState(
    task?.dueDate ? task.dueDate.slice(0, 10) : ''
  )
  const [category, setCategory] = useState(task?.category || 'general')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (!title.trim() || !description.trim()) {
        return toast.error('Title and description are required')
      }

      const data = {
        title,
        description,
        priority,
        dueDate,
        category
      }

      let response

      if (isEdit) {
        response = await TodoServices.updateTodo(task._id, data)
        toast.success(response.data.message || 'Task updated successfully')
      } else {
        response = await TodoServices.createTodo(data)
        toast.success(response.data.message || 'Task created successfully')
      }

      if (getUserTask) {
        getUserTask()
      }

      onClose()
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
      console.log(error)
    }
  }

  return (
    <div className="modal-overlay">
      <div className="task-modal">
        <div className="modal-header">
          <div>
            <h2>{isEdit ? 'Update Task' : 'Add New Task'}</h2>
            <p>
              {isEdit
                ? 'Modify your task details and keep your work updated.'
                : 'Create a task and keep your work organized.'}
            </p>
          </div>

          <button className="modal-close" onClick={onClose}>
            X
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Write task description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>

            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              placeholder="general"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel Task
            </button>

            <button type="submit" className="submit-btn">
              {isEdit ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PopModel