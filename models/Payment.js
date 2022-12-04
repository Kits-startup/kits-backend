import mongoose from "mongoose";
const { Schema } = mongoose;

const PaymentSchema = new mongoose.Schema({
    idx: { // 관리용 번호
        type: Number,
        required: true,
        unique: true
    },
    paymentNumber: { // 결제 번호
        type: Number,
        required: true,
        unique: true,
    },
    paymentStatus: { // 결제 상태
        type: String,
        required: true,
    },
    paymentMethod: { // 결제 수단
        type: String,
        required: true,
    },
    paymentDate: { // 결제일
        type: Date,
        required: true,
    },
    paymentAmount: {
        type: Number, // 결제 금액, full 숫자로 기재
        required: true,
    },
    refundMethod: { // 환불 수단
        type: String,
    },
    refundRequestDate: { // 환불 요청일
        type: Date,
    },
    refundDate: { // 환불 완료일
        type: Date,
    },
    refundAmount: { // 환불 금액
        type: Number,
    },

});

export default mongoose.model("Payment", PaymentSchema);
