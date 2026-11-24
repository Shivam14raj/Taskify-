// import axios from "axios"

// const getToken = () => {
//   const user = JSON.parse(localStorage.getItem('todoapp'))
//   return user?.token
// }

// // create todo api 
// const createTodo = (data) => {
//   return axios.post('/api/v1/todo/create', data, {
//     headers: {
//       Authorization: `Bearer ${getToken()}`
//     }
//   })
// } 

// // get all api 
// const getAllToDo = (id) => {
//   return axios.post(
//     `/api/v1/todo/getAll/${id}`,
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${getToken()}`
//       }
//     }
//   )
// } 

// // update task api 
// const updateTodo = (id, data) =>{
//   return axios.put(`/api/v1/todo/update/${id}`, data, 
//     {
//       headers: {
//         Authorization: `Bearer ${getToken()}`
//       }
//     }
//   )
// }

// // delete task api 
// const deleteTodo = (id) =>{
//   return axios.delete(`/api/v1/todo/delete/${id}`, {
//     headers: {
//         Authorization: `Bearer ${getToken()}`
//       }
//   })
// }

// const TodoServices = { createTodo, getAllToDo, updateTodo, deleteTodo }
// export default TodoServices


import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || ''
const API = `${API_URL}/api/v1/todo`

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('todoapp'))
  return user?.token
}

// create todo api
const createTodo = (data) => {
  return axios.post(`${API}/create`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

// get all api
const getAllToDo = (id) => {
  return axios.post(
    `${API}/getAll/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  )
}

// update task api
const updateTodo = (id, data) => {
  return axios.put(`${API}/update/${id}`, data,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  )
}

// delete task api
const deleteTodo = (id) => {
  return axios.delete(`${API}/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

const TodoServices = { createTodo, getAllToDo, updateTodo, deleteTodo }
export default TodoServices
