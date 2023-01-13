import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username: { // 로그인용
        type: String,
        required: true,
        unique: true,
    },
    /*
    userNumber: { // 넘버링용
        type: Number,
        required: true,
        unique: true,
    },
    */
    email: { // 기업 이메일
        type: String,
        required: true,
        unique: true,
    },
    /*
    type: { // 유형
        type: String,
        required: true,
    },
    */
    phone: { // 전화번호
        type: String,
        required: true,
    },
    isActive: { // 활성화 여부
        type: Boolean,
        default: true,
    },
    lastLogin: { // 최종 로그인 정보
        type: Date,
        default: Date.now
    },
    isApproved: { // 승인 여부
        type: Boolean,
        default: false,
    },
    memo: { // 메모
        type: String,
    },
    password: { // 비밀번호 (해시)
        type: String,
        required: true,
    },
    address: { // 주소
        type: String,
    },
    establishmentDate: { // 창립일
        type: Date,
    },
    registerationNumber: { // 사업자 등록번호
        type: String,
    },
    revenue: { // 매출액
        type: Number,
    },
    investment: { // 투자액
        type: String,
    },
    employeesCount: { // 직원 수
        type: Number,
    },
    managerName: { // 담당자 이름
        type: String,
    },
    managerContact: { // 담당자 연락처
        type: String,
    },
    services: { // 서비스
        type: [{ type: Schema.Types.ObjectId, ref: "ServiceData" }],
    },
    logo: { // 로고
        type: String,
    },
    detailImage: { // 상세 이미지
        type: [String],
    },
    membershipLevel: { // 멤버십 레벨
        type: String,
    },
    matchesCount: { // 매치 수
        type: Number,
        default: 0
    },
    paymentCount: { // 결제 수
        type: Number,
        default: 0
    },
    profileViews: { // 프로필 조회 수
        type: Number,
        default: 0
    },
    interviewCount: { // 면접 제안 수
        type: Number,
        default: 0
    },
    matchingCount: { // 매칭 수
        type: Number,
        default: 0
    },
    poolProfileViews: { // 인재풀 프로필 열람
        type: Number,
        default: 0
    },
    paymentCount: { // 결제 수
        type: Number,
        default: 0
    },
    paymentInfo: { // 결제 정보, idx로 결제 정보를 찾아야 함
        type: [Number],
    },
    enrollNotification :{ // 등록 알림
        type: [{ type: Schema.Types.ObjectId, ref: "ServiceData" }],
    },

});

export default mongoose.model("User", UserSchema);
