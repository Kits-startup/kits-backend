import mongoose from "mongoose";
const { Schema } = mongoose;

const TagSchema = new mongoose.Schema({
    // To be added
    tag: {
        type: String,
    }
});

export default mongoose.model("Tag", TagSchema);
