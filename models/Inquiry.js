import mongoose from "mongoose";
const { Schema } = mongoose;

const InquirySchema = new mongoose.Schema({
    idx: {
        type: Number,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    attachment: {
        type: [String],
    },
    answer: {
        type: { type: Schema.Types.ObjectId, ref: "InquiryAnswer" }
    }
});

export default mongoose.model("Inquiry", InquirySchema);
