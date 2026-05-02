import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Layout/NavBar.jsx'
import './HomePage.css'
import PopModel from '../../components/PopModel.jsx'
import TodoServices from '../../services/TodoService.js'
import Card from '../../components/Card/card.jsx'

const HomePage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [alltask, setAllTask] = useState([])

  const getUserTask = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('todoapp'))
      const id = userData?.user?.id || userData?.user?._id

      if (!id) {
        console.log("User id not found")
        return
      }

      const { data } = await TodoServices.getAllToDo(id)
      setAllTask(data?.todos || [])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserTask()
  }, [])

  return (
    <div>
      <Navbar />

      <main className="home-page">
        <div className="container">
          <div className="home-header">
            <div>
              <h1>Your Tasks</h1>
              <p>Manage, search, and organize your daily work in one place.</p>
            </div>

            <button
              className="create-task-btn"
              onClick={() => setOpenModal(true)}
            >
              Create Task +
            </button>
          </div>

          {alltask.length > 0 ? (
            <Card alltask={alltask} getUserTask={getUserTask} />
          ) : (
            <div className="empty-state">
              <h2>You don't have any tasks yet</h2>
              <p>Create your first task to get started.</p>
            </div>
          )}
        </div>
      </main>

      {openModal && (
        <PopModel
          onClose={() => setOpenModal(false)}
          getUserTask={getUserTask}
        />
      )}
    </div>
  )
}

export default HomePage