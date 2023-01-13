import mongoose from "mongoose";
const { Schema } = mongoose;

const NotificationSchema = new mongoose.Schema({
    // index는 _id 값으로 사용, 관리용 번호만 새로 생성
    idx: {
        type: Number,
        required: true,
        unique: true,
    },
    uploader: {
        type: String,
        required: true,
    }, 
    jobType: { // 직군 카테고리 
        type: [String],
    },
    jobDetailCategory: { // 직무 카테고리
        type: [String],
    },
    skill: { // 기술
        type: [String],
    }, 
    employmentType: { // 고용 형태
        type: [String],
    },
    mainTask: { // 주요 담당 업무
        type: [String],
    },
    preference: { // 우대사항
        type: [String],
    },
    specialBenefit: { // 혜택 및 복지
        type: [String],
    },
    jobCulture: { // 조직문화
        type: [String],
    },
    detailedDescriptions: { // 기타 세부 사항
        type: String,
    },
    workLocation: { // 근무지
        type: String,
    },
    salary: { // 연봉, 만원 단위로 기재 or overflow 가능성 있음 (int32)
        type: Number,
    },
    status: { // 상태
        type: String,
        required: true,
    },
    membershipLevel: { // 회원 등급
        type: String,
        required: true,
    },
    postedAt: { // 등록일
        type: Date,
        required: true,
    },
    updatedAt: { // 수정일
        type: Date,
        required: true,
    },
    expiredAt: { // 공고 종료일
        type: Date,
        required: true,
    },
});

export default mongoose.model("Notification", NotificationSchema);
