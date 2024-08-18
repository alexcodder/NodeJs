import { Router } from "express";

import{
    createTask,
    updateTask,
    deleteTask,
}
from "../controllers/task.controller.js";
const router = Router();

router.post("/create", createTask);

router.put("/update/:id", updateTask);

router.delete("/delete/:id", deleteTask);

export default router;
