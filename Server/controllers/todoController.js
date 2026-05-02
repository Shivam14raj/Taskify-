import { todoModel } from "../models/todoModel.js";

// creating TODO api
export const createToDoController = async (req, res) => {
  try {
    const { title, description, priority, dueDate, category } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Please provide title and description",
      });
    }

    const todo = new todoModel({
      title,
      description,
      priority,
      dueDate,
      category,
      createdBy: req.user.id,
    });

    const result = await todo.save();

    return res.status(201).json({
      success: true,
      message: "Your task is created",
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in creating your task",
      error: error.message,
    });
  }
};

// GET TODO api   
export const getTodo = async (req, res) => {
  try {
    // get yser id 
    const {userId} = req.params 

    // validating user id 
    if(!userId){
        return res.status(404).json({
            success: false, 
            message: "No user found with this id"
        })
    } else{
        // find task 
        const todos = await todoModel.find({createdBy: userId})
        if(!todos){
            return res.status(404).json({
                success: true,
                message: "you have no task"
            })
        } 

        return res.status(200).json({
            success: true, 
            message: "your task",
            todos
        })
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "error in fetching data",
      error: error.message,
    });
  }
};


// delete TODO api 
export const deleteTodo = async (req, res) =>{
     try {
      // we will detch on the basis of id now 

      const {id} = req.params 

      if(!id){
        return res.status(404).json({
            success: false,
            message: "no todo found with this id"
        })
      } 

      // find the todo first 
      const todo = await todoModel.findByIdAndDelete({_id:id}) 

      if(!todo){
         return res.status(404).json({
            success: false,
            message: "No task Found"
         })
      } 

      res.status(200).json({
        success: true, 
        message: "Your task has been successfully deleted"
      })


     } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "error in delete todo api"
        })
     }
} 


// update TODO api 
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Todo id is required"
      })
    }

    const todo = await todoModel.findOneAndUpdate(
      { _id: id, createdBy: req.user.id },
      { $set: data }, 
      { new: true, runValidators: true }
    ) 

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found or unauthorized"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Your task has been updated successfully",
      todo
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Error in update todo api"
    })
  }
}   