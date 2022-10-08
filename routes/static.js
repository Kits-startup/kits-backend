import express from "express";

import {
  getJobTypes,
  getJobs,
  getSkills,
  createJob,
  createJobType,
  createSkill,
} from "../controllers/static.js";

const router = express.Router();

router.get("/jobs", getJobs);
router.get("/jobTypes", getJobTypes);
router.get("/skills", getSkills);

router.post("/jobs", createJob);
router.post("/jobTypes", createJobType);
router.post("/skills", createSkill);

// additional auth route req.

export default router;
