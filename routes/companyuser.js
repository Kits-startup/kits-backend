import express from "express";
import {
  getCompanyUsers,
  getCompanyUserById,
  getCompanyUserByUserNumber,
  createCompanyUser,
  updateCompanyUser,
  deleteCompanyUser,
} from "../controllers/companyuser.js";

const router = express.Router();

router.get("/", getCompanyUsers);
router.get("/:id", getCompanyUserById);
router.get("/userNumber/:userNumber", getCompanyUserByUserNumber);
router.post("/", createCompanyUser);
router.patch("/:id", updateCompanyUser);
router.delete("/:id", deleteCompanyUser);

export default router;
