import mongoose, { Mongoose } from "mongoose";
const { Schema } = mongoose;

const PersonalUserSchema = new mongoose.Schema({
    username: { // 로그인용
        type: String,
        required: true,
        unique: true,
    },
    userNumber: { // 넘버링용
        type: Number,
        required: true,
        unique: true,
    },
    name: { // 이름
        type: String,
        required: true,
    },
    email: { // 개인 이메일
        type: String,
        required: true,
        unique: true,
    },
    type: { // 유형
        type: String,
        required: true,
    },
    joinType: { // 가입 경로 구분
        type: String,
        required: true,
    },
    phone: { // 전화번호
        type: String,
        required: true,
    },
    gender: { // 성별
        type: String,
        required: true,
    },
    lastLogin: { // 최종 로그인 정보
        type: Date,
        required: true,
    },
    isActive: { // 활성화 여부
        type: Boolean,
        required: true,
    },
    isApproved: { // 승인 여부
        type: Boolean,
        required: true,
    },
    memo: { //메모
        type: String,
    },
    password: { //비밀번호 (해시)
        type: String,
        required: true,
    },
    profilePicture: { // 프로필 사진
        type: String,
    },
    createdAt: { // 가입일
        type: Date,
        default: Date.now,
    },
    updatedAt: { // 수정일
        type: Date,
        default: Date.now,
    },
    jobType: { // 직군 종류 (복수 선택 가능)
        type: [String],
    },
    career: { // 경력, Career Model 사용
        // ref Career Schema
        type: [{ type: Schema.Types.ObjectId, ref: "Career" }],
    },
    skill: { // 스킬
        // ref Skill Schema
        type: [{ type: Schema.Types.ObjectId, ref: "Skill" }],
    },
    tag: { // 관심 태그
        // ref Tag Schema
        type: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    },
    postClicks: { //공고 클릭 수
        type: Number,
        default: 0,
    },
    enrolled: { // 지원한 채용 공고
        type: Number,
        default: 0,
    },
    currentEnrollment: { // 채용 진행중 공고
        type: Number,
        default: 0,
    },
    resumeAcceptance: { // 이력서 합격 수
        type: Number,
        default: 0,
    },
    interviewAcceptance: { // 면접 합격 수
        type: Number,
        default: 0,
    },
    finalAcceptnance: { // 최종합격 수
        type: Number,
        default: 0,
    },
    reviewsWritten: { //리뷰 작성 횟수
        type: Number,
        default: 0,
    }
});

export default mongoose.model("PersonalUser", PersonalUserSchema);
