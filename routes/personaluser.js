import express from "express";
import {
  getPersonalUsers,
  getPersonalUserById,
  getPersonalUserByUserNumber,
  createPersonalUser,
  updatePersonalUser,
  deletePersonalUser,
} from "../controllers/personaluser.js";

const router = express.Router();

router.get("/", getPersonalUsers);
router.get("/:id", getPersonalUserById);
router.get("/userNumber/:userNumber", getPersonalUserByUserNumber);
router.post("/", createPersonalUser);
router.patch("/:id", updatePersonalUser);
router.delete("/:id", deletePersonalUser);

export default router;
