import React, { useEffect, useState } from 'react'
import NavBar from '../../components/Layout/NavBar'
import TodoServices from '../../services/TodoService.js'
import Card from '../../components/Card/card.jsx'
import './TodoList.css'

const TodoList = () => {
  const [alltask, setAllTask] = useState([])
  const [filter, setFilter] = useState('all')

  const getUserTask = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('todoapp'))
      const id = userData?.user?.id || userData?.user?._id

      const { data } = await TodoServices.getAllToDo(id)
      setAllTask(data?.todos || [])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserTask()
  }, [])

  // ✅ filter logic
  const filteredTasks =
    filter === 'all'
      ? alltask
      : alltask.filter((task) => task.priority === filter)

  return (
    <div>
      <NavBar />

      <div className="workspace-container">
        <div className="workspace-header">
          <h1>My Workspace</h1>

          <div className="filter-buttons">
            <button onClick={() => setFilter('all')}>
              All
            </button>

            <button onClick={() => setFilter('low')}>
              Low
            </button>

            <button onClick={() => setFilter('medium')}>
              Medium
            </button>

            <button onClick={() => setFilter('high')}>
              High
            </button>
          </div>
        </div>

        {filteredTasks.length > 0 ? (
          <Card alltask={filteredTasks} getUserTask={getUserTask} />
        ) : (
          <div className="empty-state">
            <h2>No tasks found</h2>
            <p>Try changing filter or create a new task</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoList