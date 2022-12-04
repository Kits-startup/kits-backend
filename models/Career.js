import mongoose from "mongoose";
const { Schema } = mongoose;

const CareerSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    note: {
        type: String,
    },
});

export default mongoose.model("Career", CareerSchema);
