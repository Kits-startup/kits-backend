import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new mongoose.Schema({
    idx: {
        type: Number,
        required: true,
    },
    company: {
        type: Number // index로 조회, 회사 정보는 따로 저장
    },
    uploader: {
        type: Number // index로 조회, 사용자 정보는 따로 저장
    },
    review: {
        type: String,
        required: true,
    },
    postedAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    }
});

export default mongoose.model("Review", ReviewSchema);
