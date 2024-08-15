import { Router } from "express";

import{
    createTask,
    updateTask,
}
from "../controllers/task.controller.js";
const router = Router();

router.post("/create", createTask);

router.put("/update:_id", updateTask);

export default router;
