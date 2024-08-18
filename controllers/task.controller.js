import Task from "../models/task.model.js";
export const createTask = async (req, res) => {
  try {
    const { name } = req.body;
    const newTask = new Task({
      name,
    });
    const task = await newTask.save();
    console.log("TASK", name);
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params; 
    const task = await Task.findByIdAndUpdate(id, { name }, { new: true });
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    res.status(200).json(task);
  }
  catch (error) {
    console.log(error);
  }
}