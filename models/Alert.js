import mongoose from "mongoose";
const { Schema } = mongoose;

// 공지사항

const AlertSchema = new mongoose.Schema({
    idx: { // 인덱스
        type: Number,
        required: true,
        unique: true
    },
    title: { // 제목
        type: String,
        required: true,
    },
    content: { // 본문
        type: String,
        required: true,
    },
    createdAt: { // 작성일
        type: Date,
        required: true,
    },
    updatedAt: { // 수정일
        type: Date,
        required: true,
    },
    attatchement: { // 첨부파일
        type: [String],
    },
});

export default mongoose.model("Alert", AlertSchema);
