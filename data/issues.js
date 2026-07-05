window.TPA_ISSUES = [
  {
    title: "전투 흐름",
    main: "C안: 플레이어 전투 카드 전체 발현, 보스는 간섭 조건으로 개입",
    options: [
      {
        name: "A안",
        summary: "플레이어 카드 전부 발현 후 보스 행동",
        expected: "구조 단순, 구현 쉬움",
        review: "보스 존재감 약함"
      },
      {
        name: "B안",
        summary: "플레이어 1장 발현 후 보스 1행동 반복",
        expected: "계속 밀고 당기는 전투",
        review: "전투 카드가 많을수록 보스 행동도 과다"
      },
      {
        name: "C안",
        summary: "플레이어 카드 전체 발현, 보스는 간섭 조건으로 개입",
        expected: "전체 발현 유지, 보스 개입 가능",
        review: "간섭 조건 설계 필요"
      },
      {
        name: "D안",
        summary: "양쪽 수치 동시 계산",
        expected: "빠른 처리",
        review: "카드 발현 재미 약함"
      }
    ]
  },
  {
    title: "의식 주도권",
    main: "C안: 공용 의식 주도권 1개",
    options: [
      {
        name: "A안",
        summary: "기존 체력 / 의식도 유지",
        expected: "이해 쉬움",
        review: "게이지가 많아짐"
      },
      {
        name: "B안",
        summary: "플레이어와 보스가 의식도를 각각 보유",
        expected: "용어 통일",
        review: "사실상 게이지 2개"
      },
      {
        name: "C안",
        summary: "공용 의식 주도권 1개",
        expected: "기싸움 구조 명확",
        review: "카드 효과 재정리 필요"
      }
    ]
  },
  {
    title: "결계",
    main: "B안: 주도권 감소를 막는 임시 보호 수치",
    options: [
      {
        name: "A안",
        summary: "결계 없음, 방어는 보스 효과 감소로 처리",
        expected: "규칙 단순",
        review: "방어와 방해의 역할이 겹침"
      },
      {
        name: "B안",
        summary: "결계 있음, 주도권 감소를 막는 임시 보호 수치",
        expected: "수비 빌드 가능, 공용 게이지와 연결 좋음",
        review: "결계 수치와 소멸 규칙 필요"
      },
      {
        name: "C안",
        summary: "결계는 특수 카드에만 사용",
        expected: "복잡도 감소",
        review: "방어 타입의 기본 역할이 약함"
      }
    ]
  },
  {
    title: "보스 구조",
    main: "C안: 공통 간섭 + 고유 기믹",
    options: [
      {
        name: "A안",
        summary: "보스도 카드형 패턴 사용",
        expected: "데이터 관리 쉬움",
        review: "전체 발현 구조와 맞춤 필요"
      },
      {
        name: "B안",
        summary: "보스별 고유 기믹 중심",
        expected: "보스 개성 강함",
        review: "보스마다 예외 증가"
      },
      {
        name: "C안",
        summary: "공통 간섭 + 고유 기믹",
        expected: "구조 통일, 보스 개성 확보",
        review: "간섭 시스템 설계 필요"
      }
    ]
  },
  {
    title: "광폭",
    main: "A+B안: 주도권 밀림 + 보스 간섭 강화",
    options: [
      {
        name: "A안",
        summary: "다음 단계 시작 시 주도권이 보스 쪽으로 밀림",
        expected: "압박이 바로 보임",
        review: "수치 과하면 억울함"
      },
      {
        name: "B안",
        summary: "보스 간섭 수치 증가",
        expected: "구현 쉬움",
        review: "단조로울 수 있음"
      },
      {
        name: "C안",
        summary: "보스 간섭 주기 감소",
        expected: "체감 강함",
        review: "난이도 급상승 가능"
      },
      {
        name: "D안",
        summary: "보스 고유 기믹 강화",
        expected: "보스 개성 강화",
        review: "설계량 증가"
      }
    ]
  },
  {
    title: "보상",
    main: "A안: 카드 획득 / 강화 / 상점 리롤",
    options: [
      {
        name: "A안",
        summary: "카드 획득 / 강화 / 상점 리롤",
        expected: "현재 방향 유지, 상점 중심과 연결",
        review: "카드 제거 수단 별도 필요"
      },
      {
        name: "B안",
        summary: "카드 획득 / 강화 / 카드 제거",
        expected: "덱 정리 가능",
        review: "리롤 보상 제외"
      },
      {
        name: "C안",
        summary: "카드 획득 / 강화 / 정리권",
        expected: "제거와 리롤 통합 가능",
        review: "설명 추가 필요"
      }
    ]
  },
  {
    title: "시작덱",
    main: "A안: 공격 1 / 의식 1 / 결계 1",
    options: [
      {
        name: "A안",
        summary: "공격 1 / 의식 1 / 결계 1",
        expected: "기본 구조 체험 가능",
        review: "방해 체험 없음"
      },
      {
        name: "B안",
        summary: "공격 1 / 의식 1 / 방해 1",
        expected: "보스 간섭 대응 체험",
        review: "방어 개념 부족"
      },
      {
        name: "C안",
        summary: "공격 2 / 의식 1",
        expected: "초반 전투 빠름",
        review: "시스템 폭이 좁게 보임"
      }
    ]
  }
];
