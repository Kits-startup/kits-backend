import mongoose from "mongoose";
const { Schema } = mongoose;

const StaticSkillsSchema = new mongoose.Schema({
  job_id: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export default mongoose.model("StaticSkills", StaticSkillsSchema);
