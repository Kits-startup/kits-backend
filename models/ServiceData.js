import mongoose from "mongoose";
const { Schema } = mongoose;

const ServiceDataSchema = new mongoose.Schema({
    serviceType: {
        type: String,
        required: true,
    },
    serviceTitle: {
        type: String,
        required: true,
    },
    serviceDescription: {
        type: String,
        required: true,
    },
    serviceURL: {
        type: String
    },
    serviceTags: {
        type: [String]
    },
    serviceStart: {
        type: Date,
        required: true,
    },
    serviceEnd: {
        type: Date,
    },
    serviceStatus: { // 진행중, 완료, 중단 등
        type: String,
        required: true,
    },
});

export default mongoose.model("ServiceData", ServiceDataSchema);
