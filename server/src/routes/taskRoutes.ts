import { Router } from "express";
import {
  createTask,
  getTasks,
  getUserTasks,
  updateTaskStatus,
  updateTaskPriority,
  getOneTask,
} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);
router.patch("/:taskId/priority", updateTaskPriority);
router.get("/user/:userId", getUserTasks);
router.get("/:taskId", getOneTask);

export default router;