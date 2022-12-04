import mongoose from "mongoose";
const { Schema } = mongoose;

const InquirySchema = new mongoose.Schema({ // 문의사항 답변
    title: { // 제목
        type: String,
        required: true,
    },
    idx: { // 답변 인덱스
        type: Number,
        required: true,
        unique: true
    },
    adminId: { // 답변자 ID
        type: String,
        required: true,
    },
    content: { // 본문
        type: String,
        required: true,
    },
});

export default mongoose.model("Inquiry", InquirySchema);
