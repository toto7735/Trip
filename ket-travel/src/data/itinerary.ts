export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  transport?: string;
  tips?: string;
  priority?: boolean;
  icon: string;
}

export interface Day {
  id: string;
  date: string;
  dayLabel: string;
  dayOfWeek: string;
  theme: string;
  activities: Activity[];
}

export const itinerary: Day[] = [
  {
    id: "day-1",
    date: "2/19",
    dayLabel: "1일차",
    dayOfWeek: "목요일",
    theme: "도착 & 선월드 & 야시장",
    activities: [
      {
        id: "1-1",
        time: "06:00 - 07:30",
        title: "공항 도착 & 환전/유심",
        description: "공항 도착 후 환전 및 유심 구매. 풀만 리조트로 이동하여 짐 보관.",
        transport: "공항 → 풀만 리조트 | 택시/그랩 약 15분",
        tips: "얼리 체크인 불가 시 짐 보관만 먼저",
        icon: "plane-landing",
      },
      {
        id: "1-2",
        time: "07:30 - 09:00",
        title: "아침 식사 (소나시 근처)",
        description: "호텔 근처 로컬 맛집에서 아침 식사.",
        transport: "호텔 근처 도보 5~10분",
        tips: "쌀국수(퍼) 추천",
        icon: "utensils",
      },
      {
        id: "1-3",
        time: "09:00 - 09:30",
        title: "선월드 케이블카역 이동",
        description: "안토이역(남부)으로 이동. 오픈 시간(09:30)에 맞춰 도착.",
        transport: "풀만 → 안토이역(남부) | 택시/그랩 약 25분",
        icon: "car",
      },
      {
        id: "1-4",
        time: "09:30 - 14:00",
        title: "혼똔섬 & 워터파크",
        description: "세계 최장 해상 케이블카 탑승 → 혼똔섬 도착. 워터파크(아쿠아토피아) 및 해변 즐기기.",
        transport: "케이블카 편도 20분 | 섬 내 버기카 이용",
        tips: "수영복/아쿠아슈즈 필수",
        priority: true,
        icon: "cable-car",
      },
      {
        id: "1-5",
        time: "14:00 - 15:00",
        title: "호텔 복귀 및 체크인",
        description: "풀만 리조트로 복귀하여 체크인. 씻고 잠시 휴식.",
        transport: "안토이역 → 풀만 리조트 | 택시/그랩 약 25분",
        icon: "hotel",
      },
      {
        id: "1-6",
        time: "15:00 - 17:00",
        title: "[1차 수영] 호텔 수영장",
        description: "풀만 인피니티 풀에서 첫날 피로 풀기.",
        transport: "호텔 내 이동",
        icon: "waves",
      },
      {
        id: "1-7",
        time: "17:00 - 17:30",
        title: "야시장 이동",
        description: "즈엉동 야시장으로 이동.",
        transport: "풀만 → 즈엉동 야시장(중부) | 택시/그랩 약 20~25분",
        tips: "퇴근 시간 약간 막힐 수 있음",
        icon: "car",
      },
      {
        id: "1-8",
        time: "17:30 - 20:00",
        title: "즈엉동 야시장 투어",
        description: "해산물, 땅콩, 과일 등 길거리 음식 즐기기.",
        transport: "시장 내 도보 구경",
        priority: true,
        icon: "store",
      },
      {
        id: "1-9",
        time: "20:00 ~",
        title: "호텔 복귀",
        description: "야시장에서 풀만 리조트로 복귀. 휴식.",
        transport: "야시장 → 풀만 리조트 | 택시/그랩 약 20~25분",
        icon: "moon",
      },
    ],
  },
  {
    id: "day-2",
    date: "2/20",
    dayLabel: "2일차",
    dayOfWeek: "금요일",
    theme: "빈원더스 풀데이",
    activities: [
      {
        id: "2-1",
        time: "08:30 - 09:30",
        title: "빈원더스로 이동",
        description: "북부 빈원더스로 이동. 거리가 꽤 멀어서 빈버스보다 택시 추천.",
        transport: "풀만 → 빈원더스(북부) | 택시/그랩 약 50분",
        icon: "car",
      },
      {
        id: "2-2",
        time: "09:30 - 18:00",
        title: "빈원더스 (Full Day)",
        description: "오전: 타이푼 월드(워터파크) 집중 공략. 오후: 놀이공원, 아쿠아리움 관람.",
        transport: "파크 내 도보 이동",
        tips: "하루 종일 올인, 체력 안배 필수",
        priority: true,
        icon: "ferris-wheel",
      },
      {
        id: "2-3",
        time: "18:00 - 19:30",
        title: "저녁 식사",
        description: "빈원더스 앞 알마즈 센터 또는 그랜드월드 쪽 식당 이용.",
        icon: "utensils",
      },
      {
        id: "2-4",
        time: "19:30 - 20:30",
        title: "호텔 복귀",
        description: "풀만 리조트로 복귀. 꿀잠 예약!",
        transport: "북부 → 풀만 리조트 | 택시/그랩 약 50분",
        icon: "moon",
      },
    ],
  },
  {
    id: "day-3",
    date: "2/21",
    dayLabel: "3일차",
    dayOfWeek: "토요일",
    theme: "수영 & 스파 & 스카이바",
    activities: [
      {
        id: "3-1",
        time: "08:00 - 11:00",
        title: "[2차 수영] 모닝 수영",
        description: "조식 후 바로 수영장. 가장 한적하고 예쁜 시간대.",
        transport: "호텔 내 이동",
        tips: "사진 찍기 좋은 시간",
        icon: "waves",
      },
      {
        id: "3-2",
        time: "11:00 - 13:00",
        title: "점심 및 준비",
        description: "호텔 내 휴식 또는 소나시 단지 내 식당 이용.",
        icon: "utensils",
      },
      {
        id: "3-3",
        time: "13:00 - 13:30",
        title: "마사지 샵 이동",
        description: "유주스파(즈엉동 시내)로 이동.",
        transport: "풀만 → 유주스파(중부) | 택시/그랩 약 20분",
        tips: "미리 예약 필수",
        icon: "car",
      },
      {
        id: "3-4",
        time: "13:30 - 15:30",
        title: "유주스파 (Yuju Spa)",
        description: "마사지 90분~120분 코스로 힐링.",
        transport: "시내(즈엉동) 위치",
        icon: "sparkles",
      },
      {
        id: "3-5",
        time: "15:30 - 17:00",
        title: "킹콩마트 쇼핑 & 카페",
        description: "킹콩마트에서 쇼핑 후 근처 카페(츄온츄온 등) 방문.",
        transport: "도보 또는 짧은 택시",
        icon: "shopping-bag",
      },
      {
        id: "3-6",
        time: "17:00 - 17:30",
        title: "스카이바 이동",
        description: "베스트 웨스턴(소나시)으로 이동. 호텔 바로 옆으로 복귀.",
        transport: "중부 → 베스트 웨스턴(소나시) | 택시/그랩 약 20분",
        icon: "car",
      },
      {
        id: "3-7",
        time: "17:30 - 19:30",
        title: "C.View 스카이바",
        description: "베스트 웨스턴 옥상에서 일몰 감상하며 칵테일 즐기기.",
        transport: "도보 이동 (풀만 바로 옆)",
        tips: "일몰 시간 약 17:40경",
        priority: true,
        icon: "sunset",
      },
    ],
  },
  {
    id: "day-4",
    date: "2/22",
    dayLabel: "4일차",
    dayOfWeek: "일요일",
    theme: "수영 & 스파 & 그랜드월드",
    activities: [
      {
        id: "4-1",
        time: "09:00 - 11:30",
        title: "[3차 수영] 또는 휴식",
        description: "마지막 수영 즐기기 또는 늦잠 자고 뒹굴기. 여유로운 오전.",
        transport: "호텔 내 이동",
        icon: "waves",
      },
      {
        id: "4-2",
        time: "11:30 - 12:00",
        title: "스파 이동",
        description: "쑥나우 스파(즈엉동 북쪽 외곽)로 이동.",
        transport: "풀만 → 쑥나우 스파 | 택시/그랩 약 25분",
        icon: "car",
      },
      {
        id: "4-3",
        time: "12:00 - 14:00",
        title: "쑥나우 스파 (Suc Nau)",
        description: "자연 속 힐링 스파에서 마사지 및 휴식.",
        icon: "leaf",
      },
      {
        id: "4-4",
        time: "14:00 - 14:40",
        title: "그랜드월드 이동",
        description: "쑥나우에서 북쪽 그랜드월드로 이동.",
        transport: "쑥나우 → 그랜드월드(북부) | 택시/그랩 약 35분",
        icon: "car",
      },
      {
        id: "4-5",
        time: "15:00 - 18:00",
        title: "그랜드월드 (수상택시)",
        description: "베니스 운하에서 수상 택시 탑승. 건물 배경으로 사진 촬영 및 산책.",
        transport: "수상택시 탑승",
        icon: "camera",
      },
      {
        id: "4-6",
        time: "18:00 - 19:00",
        title: "호텔 복귀",
        description: "풀만 리조트로 복귀. 마지막 밤 휴식.",
        transport: "그랜드월드 → 풀만 리조트 | 택시/그랩 약 50분",
        icon: "moon",
      },
    ],
  },
  {
    id: "day-5",
    date: "2/23",
    dayLabel: "5일차",
    dayOfWeek: "월요일",
    theme: "마지막 힐링 & 출국",
    activities: [
      {
        id: "5-1",
        time: "09:00 - 11:00",
        title: "조식 & 체크아웃",
        description: "여유로운 조식 후 체크아웃. 짐은 호텔 로비에 보관.",
        icon: "luggage",
      },
      {
        id: "5-2",
        time: "11:00 - 13:00",
        title: "점심 식사 (마지막 만찬)",
        description: "소나시 또는 공항 근처 맛집에서 마지막 점심.",
        transport: "풀만 → 공항 근처/소나시 | 택시 5~10분",
        icon: "utensils",
      },
      {
        id: "5-3",
        time: "13:00 - 15:00",
        title: "카페 & 마무리",
        description: "공항 근처 해변 카페(선셋 산나토 등)에서 마지막 여유. 15:00 일정 종료.",
        icon: "coffee",
      },
      {
        id: "5-4",
        time: "15:00 ~",
        title: "공항 이동",
        description: "공항으로 이동하여 출국 준비.",
        transport: "소나시 → 공항 | 택시 약 15분",
        icon: "plane",
      },
    ],
  },
];
