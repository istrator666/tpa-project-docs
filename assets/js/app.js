const pages = [
  {
    id: "home",
    menu: "00. Home",
    category: "Home",
    title: "TPA Project",
    status: "1차 문서",
    html: `
      <div class="section">
        <h3>한국 무속 테마 의식 주도권 덱빌딩</h3>
        <div class="code-like">상점 플레이 중심.
보유 전투 카드 전체 발현.
체력 제거, 공용 의식 주도권 사용.
의식 주도권 50 시작.
100 도달 시 승리.
0 도달 시 패배.
미클리어가 길어질수록 광폭 압박 증가.</div>
      </div>

      <div class="section">
        <h3>핵심 키워드</h3>
        <div class="tags">
          <span class="tag red">의식 주도권</span>
          <span class="tag">상점 중심</span>
          <span class="tag">로그라이크</span>
          <span class="tag">전투 카드 전체 발현</span>
          <span class="tag">결계</span>
          <span class="tag">광폭</span>
          <span class="tag">십이지신 보스</span>
        </div>
      </div>
    `
  },
  {
    id: "overview",
    menu: "01. Game Overview",
    category: "Concept",
    title: "Game Overview",
    status: "기획 방향",
    html: `
      <div class="section">
        <h3>장르</h3>
        <p>로그라이크 의식 주도권 덱빌딩.</p>
        <p>매판 새로 카드를 구성하는 구조. 상점 플레이가 알파이자 오메가. 전투는 상점에서 만든 덱이 발현되는 구간.</p>
      </div>

      <div class="section">
        <h3>게임 목표</h3>
        <table>
          <tr><th>항목</th><th>방향</th></tr>
          <tr><td>최종 목표</td><td>십이지신 보스 공략</td></tr>
          <tr><td>플레이 방식</td><td>상점에서 덱 구성 후 자동 전투</td></tr>
          <tr><td>승리 방식</td><td>의식 주도권 100 도달</td></tr>
          <tr><td>패배 방식</td><td>의식 주도권 0 도달</td></tr>
          <tr><td>반복 구조</td><td>런마다 새 카드 구성</td></tr>
        </table>
      </div>

      <div class="section">
        <h3>스토리 / 캐릭터 배치</h3>
        <p>처음 진입, 캐릭터 선택 시점에 간단 설명.</p>
        <p>상세 세계관보다 시스템 이해 우선. 캐릭터별 차이는 시작덱보다 등장 카드풀 차이로 처리.</p>
      </div>
    `
  },
  {
    id: "core-loop",
    menu: "02. Core Loop",
    category: "Loop",
    title: "Core Loop",
    status: "메인 흐름",
    html: `
      <div class="section">
        <h3>진행 흐름</h3>
        <div class="flow">
          <div class="flow-step">상점 진입</div><div class="arrow">→</div>
          <div class="flow-step">카드 구매 / 리롤 / 강화</div><div class="arrow">→</div>
          <div class="flow-step">상점 종료 선택</div><div class="arrow">→</div>
          <div class="flow-step">보스 단계 진입</div><div class="arrow">→</div>
          <div class="flow-step">전투 카드 전체 발현</div><div class="arrow">→</div>
          <div class="flow-step">보스 간섭</div><div class="arrow">→</div>
          <div class="flow-step">의식 주도권 판정</div>
        </div>
      </div>

      <div class="section">
        <h3>구조</h3>
        <p>상점에서 전투 카드와 상점 카드를 구성. 전투에서는 보유한 전투 카드 전체 발현.</p>
        <p>미클리어 시 광폭 증가. 다음 단계로 이동. 보스 클리어 시 보상 선택.</p>
      </div>
    `
  },
  {
    id: "shop",
    menu: "03. Shop System",
    category: "System",
    title: "Shop System",
    status: "메인 플레이",
    html: `
      <div class="section">
        <h3>상점 기본</h3>
        <p>상점은 메인 플레이 구간.</p>
        <table>
          <tr><th>항목</th><th>내용</th></tr>
          <tr><td>상점 카드 수</td><td>5장</td></tr>
          <tr><td>고정 카드</td><td>게임 종료까지 유지</td></tr>
          <tr><td>랜덤 카드</td><td>리롤 전까지 유지</td></tr>
          <tr><td>상점 종료</td><td>플레이어 선택</td></tr>
          <tr><td>영력 잔여 종료</td><td>가능</td></tr>
          <tr><td>전투 카드 상점 사용</td><td>기본 사용 불가</td></tr>
          <tr><td>전투 카드 사용 시도</td><td>비활성화 또는 사용 불가 표시</td></tr>
        </table>
      </div>

      <div class="section">
        <h3>덱 비율 표시</h3>
        <div class="code-like">전체 덱 18장
상점 카드 12장
전투 카드 6장

공격 2
의식 1
결계 1
방해 2</div>
        <p>덱 비율은 현재 덱 상태를 보는 정보. 전투 카드가 많으면 전투 발현량 증가. 대신 상점 손패에서 사용 불가 카드가 늘어날 수 있음.</p>
      </div>
    `
  },
  {
    id: "battle",
    menu: "04. Battle System",
    category: "System",
    title: "Battle System",
    status: "메인안",
    html: `
      <div class="section">
        <h3>메인 방향</h3>
        <div class="code-like">보유한 전투 카드는 전부 발현.

전투 카드 칸 제거.
5장 세팅 구조 제거.
보유 전투 카드는 전부 각각 발동.
같은 카드가 3장 있으면 3번 발동.</div>
      </div>

      <div class="section">
        <h3>기대 효과</h3>
        <table>
          <tr><th>항목</th><th>내용</th></tr>
          <tr><td>상점 중심 강화</td><td>상점에서 산 전투 카드가 전부 전투에 반영</td></tr>
          <tr><td>강화 체감 증가</td><td>강화된 전투 카드들이 모두 발현</td></tr>
          <tr><td>카드 부족 문제 제거</td><td>전투 카드 5장 미만 전투 불가 문제 제거</td></tr>
          <tr><td>슬롯 부담 감소</td><td>배틀 칸수, 슬롯 확장 문제 축소</td></tr>
        </table>
      </div>

      <div class="section">
        <h3>검토 지점 / 보완 방식</h3>
        <table>
          <tr><th>검토 지점</th><th>보완 방식</th></tr>
          <tr><td>플레이어가 결과만 보는 느낌 가능</td><td>전투 흐름 옵션, 보스 간섭</td></tr>
          <tr><td>카드 수가 늘수록 전투 시간 증가</td><td>배속 기능, 로그창, 요약</td></tr>
          <tr><td>어떤 카드가 먼저 발동하는지 기준 필요</td><td>발동 순서 규칙 별도 설계</td></tr>
          <tr><td>보스가 가만히 맞는 구조 위험</td><td>간섭 조건 방식 적용</td></tr>
        </table>
      </div>
    `
  },
  {
    id: "battle-options",
    menu: "05. Battle Flow Options",
    category: "Options",
    title: "Battle Flow Options",
    status: "안 비교",
    html: `
      <div class="section">
        <h3>전투 진행 방식</h3>
        <div class="option-grid">
          <div class="option">
            <div class="option-title"><span class="badge">A안</span> 플레이어 카드 전부 발현 후 보스 행동</div>
            <p>기대 효과: 구조 단순, 구현 쉬움.</p>
            <p>검토 지점: 보스 존재감 약함.</p>
          </div>
          <div class="option">
            <div class="option-title"><span class="badge">B안</span> 플레이어 1장 발현 후 보스 1행동 반복</div>
            <p>기대 효과: 계속 밀고 당기는 전투.</p>
            <p>검토 지점: 전투 카드가 많을수록 보스 행동도 과다.</p>
          </div>
          <div class="option">
            <div class="option-title"><span class="badge">C안</span> 플레이어 카드 전체 발현, 보스는 간섭 조건으로 개입</div>
            <p>기대 효과: 전체 발현 유지, 보스 개입 가능.</p>
            <p>검토 지점: 간섭 조건 설계 필요.</p>
          </div>
          <div class="option">
            <div class="option-title"><span class="badge">D안</span> 양쪽 수치 동시 계산</div>
            <p>기대 효과: 빠른 처리.</p>
            <p>검토 지점: 카드 발현 재미 약함.</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>1차 메인 방향</h3>
        <p>C안 중심.</p>
        <p>플레이어 전투 카드는 전부 발현. 보스는 매번 1:1로 행동하지 않고, 간섭 조건에 따라 개입.</p>
      </div>
    `
  },
  {
    id: "initiative",
    menu: "06. Ritual Initiative",
    category: "System",
    title: "Ritual Initiative",
    status: "공용 게이지",
    html: `
      <div class="section">
        <h3>의식 주도권</h3>
        <div class="code-like">체력 제거.
공용 의식 주도권 사용.

의식 주도권 50 시작.
100 도달 시 플레이어 승리.
0 도달 시 플레이어 패배.

보스 단계 이동 시 의식 주도권 유지.
보스 변경 시 의식 주도권 초기화.</div>
      </div>

      <div class="section">
        <h3>구조 옵션</h3>
        <table>
          <tr><th>안</th><th>내용</th><th>기대 효과</th><th>검토 지점</th></tr>
          <tr><td>A안</td><td>기존 체력/의식도 유지</td><td>이해 쉬움</td><td>게이지가 많아짐</td></tr>
          <tr><td>B안</td><td>플레이어/보스가 의식도를 각각 보유</td><td>용어 통일</td><td>사실상 게이지 2개</td></tr>
          <tr><td>C안</td><td>공용 의식 주도권 1개</td><td>기싸움 구조 명확</td><td>카드 효과 재정리 필요</td></tr>
        </table>
      </div>
    `
  },
  {
    id: "barrier",
    menu: "07. Barrier System",
    category: "System",
    title: "Barrier System",
    status: "결계",
    html: `
      <div class="section">
        <h3>결계</h3>
        <p>결계 = 보스가 의식 주도권을 빼앗는 것을 막는 임시 보호 수치.</p>
        <p>체력 대체가 아니라, 주도권이 보스 쪽으로 밀리는 것을 막는 완충 장치.</p>
      </div>

      <div class="section">
        <h3>처리 예시</h3>
        <div class="code-like">현재 의식 주도권: 50
보스 간섭: 주도권 -12
플레이어 결계: 7

결계 7 소모.
실제 주도권 변화 -5.
결과 의식 주도권 45.</div>
      </div>

      <div class="section">
        <h3>역할</h3>
        <table>
          <tr><th>역할</th><th>내용</th></tr>
          <tr><td>수비 빌드</td><td>보스 간섭을 버티는 방향</td></tr>
          <tr><td>주도권 완충</td><td>의식 주도권이 한 번에 크게 밀리는 상황 방지</td></tr>
          <tr><td>방해와 분리</td><td>방해는 보스 효과 약화, 결계는 손실 흡수</td></tr>
          <tr><td>광폭 대응</td><td>광폭으로 밀리는 주도권을 완충</td></tr>
        </table>
      </div>
    `
  },
  {
    id: "boss",
    menu: "08. Boss System",
    category: "System",
    title: "Boss System",
    status: "십이지신",
    html: `
      <div class="section">
        <h3>보스 방향</h3>
        <p>보스는 십이지신 전체 기준.</p>
        <p>전투 카드 전체 발현 구조에 맞춰 보스 구조 재검토. 보스가 플레이어와 똑같이 5장 카드를 쓰는 방식은 대안.</p>
      </div>

      <div class="section">
        <h3>보스 구조 옵션</h3>
        <table>
          <tr><th>안</th><th>내용</th><th>기대 효과</th><th>검토 지점</th></tr>
          <tr><td>A안</td><td>보스도 카드형 패턴 사용</td><td>데이터 관리 쉬움</td><td>전체 발현 구조와 맞춤 필요</td></tr>
          <tr><td>B안</td><td>보스별 고유 기믹 중심</td><td>보스 개성 강함</td><td>보스마다 예외 증가</td></tr>
          <tr><td>C안</td><td>공통 간섭 + 고유 기믹</td><td>구조 통일, 보스 개성 확보</td><td>간섭 시스템 설계 필요</td></tr>
        </table>
      </div>

      <div class="section">
        <h3>1차 메인 방향</h3>
        <p>C안.</p>
        <p>보스는 공통 간섭 구조 사용. 보스마다 고유 기믹 1개 이상 보유.</p>
      </div>
    `
  },
  {
    id: "frenzy",
    menu: "09. Frenzy System",
    category: "System",
    title: "Frenzy System",
    status: "광폭",
    html: `
      <div class="section">
        <h3>광폭</h3>
        <div class="code-like">광폭 = 오래 끌수록 보스 압박 증가.

미클리어 시 광폭 증가.
보스마다 광폭 초기화.
광폭 증가 시 다음 단계 시작 의식 주도권이 보스 쪽으로 밀림.
광폭이 높아질수록 보스 간섭 강화.</div>
      </div>

      <div class="section">
        <h3>광폭 옵션</h3>
        <table>
          <tr><th>안</th><th>내용</th><th>기대 효과</th><th>검토 지점</th></tr>
          <tr><td>A안</td><td>다음 단계 시작 시 주도권이 보스 쪽으로 밀림</td><td>압박이 바로 보임</td><td>수치 과하면 억울함</td></tr>
          <tr><td>B안</td><td>보스 간섭 수치 증가</td><td>구현 쉬움</td><td>단조로울 수 있음</td></tr>
          <tr><td>C안</td><td>보스 간섭 주기 감소</td><td>체감 강함</td><td>난이도 급상승 가능</td></tr>
          <tr><td>D안</td><td>보스 고유 기믹 강화</td><td>보스 개성 강화</td><td>설계량 증가</td></tr>
        </table>
      </div>
    `
  },
  {
    id: "reward",
    menu: "10. Reward System",
    category: "System",
    title: "Reward System",
    status: "보상",
    html: `
      <div class="section">
        <h3>보스 보상 기본안</h3>
        <div class="tags">
          <span class="tag red">카드 획득</span>
          <span class="tag red">강화</span>
          <span class="tag red">상점 리롤</span>
        </div>
      </div>

      <div class="section">
        <h3>보상 옵션</h3>
        <table>
          <tr><th>안</th><th>내용</th><th>기대 효과</th><th>검토 지점</th></tr>
          <tr><td>A안</td><td>카드 획득 / 강화 / 상점 리롤</td><td>현재 방향 유지, 상점 중심과 연결</td><td>카드 제거 수단 별도 필요</td></tr>
          <tr><td>B안</td><td>카드 획득 / 강화 / 카드 제거</td><td>덱 정리 가능</td><td>리롤 보상 제외</td></tr>
          <tr><td>C안</td><td>카드 획득 / 강화 / 정리권</td><td>제거와 리롤 통합 가능</td><td>설명 추가 필요</td></tr>
        </table>
      </div>

      <div class="section">
        <h3>1차 메인 방향</h3>
        <p>A안.</p>
        <p>카드 제거는 보스 보상보다 상점 카드풀에서 제공.</p>
      </div>
    `
  },
  {
    id: "start-deck",
    menu: "11. Start Deck / Character Pool",
    category: "Data",
    title: "Start Deck / Character Pool",
    status: "초기 구성",
    html: `
      <div class="section">
        <h3>시작덱 방향</h3>
        <div class="code-like">시작덱은 모든 캐릭터 동일.
캐릭터 차이는 시작덱이 아니라 등장 카드풀 차이로 처리.

시작 전투 카드 3장.
버리기/제거 보조 카드는 시작덱에 넣지 않음.</div>
      </div>

      <div class="section">
        <h3>시작 전투 카드 구성 옵션</h3>
        <table>
          <tr><th>안</th><th>구성</th><th>기대 효과</th><th>검토 지점</th></tr>
          <tr><td>A안</td><td>공격 1 / 의식 1 / 결계 1</td><td>기본 구조 체험 가능</td><td>방해 체험 없음</td></tr>
          <tr><td>B안</td><td>공격 1 / 의식 1 / 방해 1</td><td>보스 간섭 대응 체험</td><td>방어 개념 부족</td></tr>
          <tr><td>C안</td><td>공격 2 / 의식 1</td><td>초반 전투 빠름</td><td>시스템 폭이 좁게 보임</td></tr>
        </table>
      </div>
    `
  },
  {
    id: "cards",
    menu: "12. Card Data",
    category: "Data",
    title: "Card Data",
    status: "빈 데이터",
    html: `
      <div class="section">
        <h3>카드 데이터</h3>
        <p>카드 데이터 메뉴와 기능만 먼저 제작. 실제 카드 데이터는 빈 상태.</p>
        <p>새 전투 시스템 확정 후 카드 데이터 재작성.</p>
      </div>

      <div class="section">
        <h3>카드 목록</h3>
        <div class="toolbar">
          <input id="cardSearch" type="text" placeholder="카드명 / 효과 검색" />
          <select id="cardTypeFilter">
            <option value="all">전체 타입</option>
            <option value="상점">상점</option>
            <option value="전투">전투</option>
            <option value="공격">공격</option>
            <option value="의식">의식</option>
            <option value="결계">결계</option>
            <option value="방해">방해</option>
          </select>
        </div>
        <div id="cardList"></div>
      </div>

      <div class="section">
        <h3>카드 데이터 필드</h3>
        <table>
          <tr><th>필드</th><th>내용</th></tr>
          <tr><td>카드 ID</td><td>내부 관리용</td></tr>
          <tr><td>카드명</td><td>표시명</td></tr>
          <tr><td>분류</td><td>상점 / 전투 / 특수</td></tr>
          <tr><td>타입</td><td>공격 / 의식 / 결계 / 방해 등</td></tr>
          <tr><td>비용</td><td>공물 / 영력</td></tr>
          <tr><td>효과</td><td>수치 포함 효과</td></tr>
          <tr><td>강화 대상</td><td>주도권 / 결계 / 간섭 감소 등</td></tr>
          <tr><td>강화 증가량</td><td>강화 시 증가값</td></tr>
          <tr><td>구현 상태</td><td>기획 / 작업중 / 완료</td></tr>
          <tr><td>비고</td><td>예외, 수정 필요</td></tr>
        </table>
      </div>
    `
  },
  {
    id: "log-ui",
    menu: "13. Battle Log / UI Info",
    category: "UI",
    title: "Battle Log / UI Info",
    status: "정보 표시",
    html: `
      <div class="section">
        <h3>포함 정보</h3>
        <table>
          <tr><th>기능</th><th>내용</th></tr>
          <tr><td>전투 로그창</td><td>카드 발현과 주도권 변화를 기록</td></tr>
          <tr><td>전투 배속</td><td>카드가 많을 때 전투 속도 조절</td></tr>
          <tr><td>의식 주도권</td><td>숫자와 게이지 표시</td></tr>
          <tr><td>광폭 상태</td><td>스택, 단계, 경고 표시</td></tr>
          <tr><td>덱 비율</td><td>상점 카드 / 전투 카드 비율 표시</td></tr>
          <tr><td>덱 요약</td><td>보상 선택 전 현재 덱 상태 표시</td></tr>
          <tr><td>색상 경고</td><td>추후 적용</td></tr>
        </table>
      </div>

      <div class="section">
        <h3>전투 로그 예시</h3>
        <div class="code-like">참격 부적 발현: 의식 주도권 +6
축문 발현: 의식 주도권 +5
보스 간섭 - 쥐의 교란: 다음 의식 효과 -3
결계 부적 발현: 결계 +4
광폭 효과: 다음 단계 시작 의식 주도권 -5</div>
      </div>
    `
  },
  {
    id: "dev-rules",
    menu: "14. Development Rules",
    category: "Rules",
    title: "Development Rules",
    status: "구현 기준",
    html: `
      <div class="section">
        <h3>구현 기준</h3>
        <div class="code-like">상점 사이클은 상점에서만 적용.
버리기는 상점 사이클에서만 제외.
제거는 실제 덱에서 삭제.

보유 전투 카드는 전투에서 전부 발현.
같은 카드가 여러 장이면 각각 발현.
전투 카드는 상점에서 기본 사용 불가.

체력은 사용하지 않음.
공용 의식 주도권 사용.
의식 주도권 50 시작.
100 승리.
0 패배.

미클리어 시 광폭 증가.
보스 변경 시 의식 주도권과 광폭 초기화.</div>
      </div>
    `
  },
  {
    id: "issues",
    menu: "15. Issue Board",
    category: "Board",
    title: "Issue Board",
    status: "안 선택",
    html: `<div id="issueBoard"></div>`
  }
];

const nav = document.getElementById("nav");
const content = document.getElementById("content");
const pageTitle = document.getElementById("pageTitle");
const pageCategory = document.getElementById("pageCategory");
const pageStatus = document.getElementById("pageStatus");

function renderNav() {
  nav.innerHTML = "";
  pages.forEach((page) => {
    const button = document.createElement("button");
    button.textContent = page.menu;
    button.dataset.pageId = page.id;
    button.addEventListener("click", () => renderPage(page.id));
    nav.appendChild(button);
  });
}

function renderPage(pageId) {
  const page = pages.find((item) => item.id === pageId) || pages[0];

  pageTitle.textContent = page.title;
  pageCategory.textContent = page.category;
  pageStatus.textContent = page.status;
  content.innerHTML = page.html;

  document.querySelectorAll(".nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.pageId === page.id);
  });

  if (page.id === "cards") {
    setupCardsPage();
  }

  if (page.id === "issues") {
    renderIssueBoard();
  }
}

function setupCardsPage() {
  const searchInput = document.getElementById("cardSearch");
  const typeFilter = document.getElementById("cardTypeFilter");

  if (!searchInput || !typeFilter) return;

  searchInput.addEventListener("input", renderCards);
  typeFilter.addEventListener("change", renderCards);
  renderCards();
}

function renderCards() {
  const list = document.getElementById("cardList");
  const searchInput = document.getElementById("cardSearch");
  const typeFilter = document.getElementById("cardTypeFilter");

  if (!list) return;

  const cards = window.TPA_CARDS || [];
  const keyword = (searchInput?.value || "").trim().toLowerCase();
  const filter = typeFilter?.value || "all";

  const filtered = cards.filter((card) => {
    const text = `${card.name || ""} ${card.effect || ""} ${card.type || ""}`.toLowerCase();
    const matchKeyword = !keyword || text.includes(keyword);
    const matchFilter = filter === "all" || card.type === filter || card.category === filter;
    return matchKeyword && matchFilter;
  });

  if (filtered.length === 0) {
    list.innerHTML = `<div class="empty">카드 데이터 없음. 새 전투 시스템 확정 후 데이터 작성.</div>`;
    return;
  }

  list.innerHTML = `
    <table>
      <tr>
        <th>ID</th>
        <th>카드명</th>
        <th>분류</th>
        <th>타입</th>
        <th>효과</th>
        <th>상태</th>
      </tr>
      ${filtered.map((card) => `
        <tr>
          <td>${card.id || ""}</td>
          <td>${card.name || ""}</td>
          <td>${card.category || ""}</td>
          <td>${card.type || ""}</td>
          <td>${card.effect || ""}</td>
          <td>${card.status || ""}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

function renderIssueBoard() {
  const board = document.getElementById("issueBoard");
  const issues = window.TPA_ISSUES || [];

  if (!board) return;

  board.innerHTML = issues.map((issue) => `
    <div class="section">
      <h3>${issue.title}</h3>
      <div class="notice">메인안: ${issue.main}</div>
      <div class="option-grid" style="margin-top: 12px;">
        ${issue.options.map((option) => `
          <div class="option">
            <div class="option-title">
              <span class="badge">${option.name}</span>
              ${option.summary}
            </div>
            <p><strong>기대 효과:</strong> ${option.expected}</p>
            <p><strong>검토 지점:</strong> ${option.review}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

renderNav();
renderPage("home");
