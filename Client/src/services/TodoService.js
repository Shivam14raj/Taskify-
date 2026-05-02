import axios from "axios"

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('todoapp'))
  return user?.token
}

// create todo api 
const createTodo = (data) => {
  return axios.post('/api/v1/todo/create', data, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
} 

// get all api 
const getAllToDo = (id) => {
  return axios.post(
    `/api/v1/todo/getAll/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  )
} 

// update task api 
const updateTodo = (id, data) =>{
  return axios.put(`/api/v1/todo/update/${id}`, data, 
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  )
}

// delete task api 
const deleteTodo = (id) =>{
  return axios.delete(`/api/v1/todo/delete/${id}`, {
    headers: {
        Authorization: `Bearer ${getToken()}`
      }
  })
}

const TodoServices = { createTodo, getAllToDo, updateTodo, deleteTodo }
export default TodoServices