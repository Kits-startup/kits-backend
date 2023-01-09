import express from "express";
import {
  getNotifications,
  getNotificationById,
  getNotificationByIndex,
  createNotification,
  updateNotification,
  deleteNotification,
} from "../controllers/notification.js";

const router = express.Router();

router.get("/", getNotifications);
router.get("/:id", getNotificationById);
router.get("/index/:idx", getNotificationByIndex);
router.post("/", createNotification);
router.patch("/:id", updateNotification);
router.delete("/:id", deleteNotification);

export default router;