import express from "express";
import { protect } from "../middleware/auth";
import { login, register } from "../controllers/PersonalUserauth";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, (req, res) => {
  res.send(req.user);
});;

export default router;