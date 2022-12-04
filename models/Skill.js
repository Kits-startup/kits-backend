import mongoose from "mongoose";
const { Schema } = mongoose;

const SkillSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: true,
    },
    skillLevel: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("Skill", SkillSchema);
