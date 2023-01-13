import express from "express";
import {
  getCompanyUsers,
  getCompanyUserById,
  updateCompanyUser,
  deleteCompanyUser,
} from "../controllers/companyuser.js";

const router = express.Router();

router.get("/", getCompanyUsers);
router.get("/:id", getCompanyUserById);
router.patch("/:id", updateCompanyUser);
router.delete("/:id", deleteCompanyUser);

export default router;
