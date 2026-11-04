// 새 기사는 아래 형식으로 추가하세요. id는 기사마다 고유해야 합니다.
window.LESSONS = [
  {
    id: "home", topic: "Living", label: "집 · 장소 묘사", art: "At home.",
    title: "The quiet comfort of a place called home",
    subtitle: "Why the most ordinary corner of an apartment can become the best part of a day.",
    question: "Tell me about your home. What is your favorite room, and why do you like it?",
    questionKo: "사는 집을 소개해 주세요. 가장 좋아하는 공간은 어디이고, 왜 좋아하나요?",
    paragraphs: [
      { ko: "저는 도시에 있는 작은 아파트에 살아요. 아주 넓지는 않지만, 아늑하고 지내기 편해요.", en: "I live in a small apartment in the city. It’s not very spacious, but it’s cozy and comfortable." },
      { ko: "집에서 가장 좋아하는 곳은 거실이에요. 창문 옆에 편한 소파가 있어서, 주말이면 거기에 앉아 시간을 보내요.", en: "My favorite place at home is the living room. There’s a comfortable sofa by the window, and I like spending time there on weekends." },
      { ko: "보통 퇴근하고 나면 소파에 앉아서 음악을 듣거나 영상을 봐요. 긴 하루를 마치고 긴장을 푸는 데 도움이 돼요.", en: "After work, I usually sit on the sofa and listen to music or watch videos. It helps me unwind after a long day." },
      { ko: "집이 화려한 건 아니지만, 저에게 필요한 건 다 있어요. 무엇보다 마음 편하게 쉴 수 있는 곳이라는 게 좋아요.", en: "My home isn’t fancy, but it has everything I need. More than anything, I love having a place where I can truly relax." }
    ], expressions: [["cozy and comfortable", "아늑하고 편안한"], ["unwind after a long day", "긴 하루를 마치고 긴장을 풀다"], ["more than anything", "무엇보다도"]]
  },
  {
    id: "coffee", topic: "Culture", label: "카페 · 일상 루틴", art: "Coffee, please.",
    title: "A familiar café, a welcome pause in the week",
    subtitle: "A good cup of coffee is only part of the reason we return to our favorite places.",
    question: "Describe a café you often visit. What do you usually do there?",
    questionKo: "자주 가는 카페를 소개해 주세요. 그곳에서 주로 무엇을 하나요?",
    paragraphs: [
      { ko: "집 근처에 작은 카페가 하나 있어요. 걸어서 5분 정도라서, 주말에 자주 가요.", en: "There’s a small café near my apartment. It’s about a five-minute walk away, so I often go there on weekends." },
      { ko: "조용한 분위기와 큰 창문이 마음에 들어요. 갓 내린 커피 향 때문에 들어갈 때마다 기분이 좋아져요.", en: "I like its quiet atmosphere and large windows. The smell of freshly brewed coffee always puts me in a good mood." },
      { ko: "저는 보통 아이스 아메리카노를 주문하고 창가에 앉아요. 가끔 책을 읽기도 하지만, 그냥 밖을 바라볼 때도 많아요.", en: "I usually order an iced Americano and sit by the window. Sometimes I read a book, but I often just watch the world go by." },
      { ko: "지난 토요일에는 친구와 거기서 두 시간이나 수다를 떨었어요. 바쁜 일상에서 잠깐 벗어나기에 정말 좋은 곳이에요.", en: "Last Saturday, I spent two hours chatting with a friend there. It’s a great place to take a break from my busy routine." }
    ], expressions: [["put me in a good mood", "기분을 좋게 하다"], ["watch the world go by", "주변 풍경을 느긋하게 바라보다"], ["take a break from", "~에서 잠시 벗어나 쉬다"]]
  },
  {
    id: "travel", topic: "Travel", label: "여행 · 과거 경험", art: "A little escape.",
    title: "An unhurried weekend by the sea",
    subtitle: "Some of the best trips leave room for an unexpected turn and a slower morning.",
    question: "Tell me about a memorable trip. Where did you go, and what made it special?",
    questionKo: "기억에 남는 여행에 대해 말해 주세요. 어디로 갔고, 무엇이 특별했나요?",
    paragraphs: [
      { ko: "작년 가을에 친구와 부산에 다녀왔어요. 둘 다 일이 바빠서 짧게라도 쉬고 싶었거든요.", en: "Last fall, I went to Busan with a friend. We were both busy with work and wanted to get away, even just for a short time." },
      { ko: "해변 근처에 숙소를 잡았어요. 첫날 저녁에는 바닷가를 걸으면서 작은 식당도 찾았어요.", en: "We stayed near the beach. On the first evening, we walked along the coast and found a little restaurant." },
      { ko: "다음 날에는 비가 와서 계획을 바꿔야 했어요. 대신 바다가 보이는 카페에서 커피를 마시며 오래 이야기했어요.", en: "It rained the next day, so we had to change our plans. Instead, we spent hours talking over coffee at a café overlooking the ocean." },
      { ko: "의외로 그 시간이 여행에서 가장 기억에 남아요. 가끔은 계획대로 되지 않을 때 더 좋은 추억이 생기는 것 같아요.", en: "Surprisingly, that turned out to be my favorite part of the trip. Sometimes the best memories come from things that don’t go as planned." }
    ], expressions: [["get away", "일상에서 벗어나다"], ["overlooking the ocean", "바다가 내려다보이는"], ["turn out to be", "결과적으로 ~이 되다"]]
  },
  {
    id: "walk", topic: "Wellbeing", label: "산책 · 습관", art: "Step outside.",
    title: "Finding a clearer mind, one walk at a time",
    subtitle: "An evening walk offers a simple way to draw a line between work and the rest of life.",
    question: "What do you do for exercise? Describe your routine and explain why you enjoy it.",
    questionKo: "운동으로 무엇을 하나요? 평소 루틴과 좋아하는 이유를 설명해 주세요.",
    paragraphs: [
      { ko: "솔직히 저는 격한 운동을 즐기는 편은 아니에요. 대신 일주일에 서너 번 동네 공원에서 걸어요.", en: "Honestly, I’m not really into intense workouts. Instead, I go for a walk at a nearby park three or four times a week." },
      { ko: "저녁을 먹고 나서 보통 30분 정도 걸어요. 편한 신발을 신고, 가끔은 이어폰으로 좋아하는 음악을 들어요.", en: "I usually walk for about thirty minutes after dinner. I put on comfortable shoes and sometimes listen to my favorite music with my earbuds." },
      { ko: "전에는 퇴근하면 집에서 휴대폰만 봤어요. 하지만 산책을 시작하고 나서는 잠도 더 잘 자고 스트레스도 덜 받아요.", en: "I used to spend my evenings at home just scrolling on my phone. Since I started walking, though, I’ve been sleeping better and feeling less stressed." },
      { ko: "무엇보다 특별한 장비나 준비가 필요 없어서 좋아요. 밖으로 나가는 것만으로도 머리를 식힐 수 있거든요.", en: "What I like most is that I don’t need any special equipment or preparation. Just stepping outside helps me clear my head." }
    ], expressions: [["be into", "~을 좋아하다"], ["I used to", "예전에는 ~하곤 했다"], ["clear my head", "머리를 식히다"]]
  },
  {
    id: "movie", topic: "Culture", label: "영화 · 취향 비교", art: "Press play.",
    title: "The changing ritual of a movie night",
    subtitle: "From the big screen to the living room, the pleasure of a good story stays the same.",
    question: "How have your movie-watching habits changed compared with the past?",
    questionKo: "과거와 비교해서 영화를 보는 습관이 어떻게 달라졌나요?",
    paragraphs: [
      { ko: "대학생 때는 친구들과 영화관에 자주 갔어요. 새 영화가 나오면 보통 주말에 약속을 잡았죠.", en: "When I was in college, I often went to the movies with my friends. Whenever a new movie came out, we would usually make plans to see it on the weekend." },
      { ko: "요즘은 집에서 스트리밍 서비스로 영화를 더 많이 봐요. 직장에 다니면서는 시간 맞추기가 쉽지 않거든요.", en: "These days, I watch more movies at home on streaming services. Now that I’m working, it’s harder to find a time that works for everyone." },
      { ko: "집에서는 언제든 멈출 수 있고 간식도 마음대로 먹을 수 있어요. 지난주에도 소파에서 코미디 영화를 한 편 봤어요.", en: "At home, I can pause whenever I want and have whatever snacks I like. Just last week, I watched a comedy on my sofa." },
      { ko: "그래도 액션 영화는 큰 화면으로 보는 게 더 좋아요. 그래서 정말 보고 싶은 영화가 있으면 여전히 영화관에 가요.", en: "Still, I prefer watching action movies on a big screen. So when there’s a movie I really want to see, I still go to the theater." }
    ], expressions: [["now that I’m working", "이제 직장에 다니다 보니"], ["a time that works for everyone", "모두에게 맞는 시간"], ["whenever I want", "원할 때 언제든"]]
  },
  {
    id: "reservation", topic: "Travel", label: "예약 · 롤플레이", art: "Plans change.",
    title: "When a reservation needs a second look",
    subtitle: "A small change of plans is an opportunity to ask the right questions.",
    question: "You need to change a hotel reservation. Call the hotel, explain the situation, and ask three or four questions.",
    questionKo: "호텔 예약을 변경해야 합니다. 호텔에 전화해 상황을 설명하고 질문을 서너 개 해보세요.",
    paragraphs: [
      { ko: "안녕하세요. 다음 주 금요일에 예약한 김지훈입니다. 출장 일정이 바뀌어서 예약을 변경하고 싶어요.", en: "Hello, my name is Jihun Kim, and I have a reservation for next Friday. My business trip schedule has changed, so I’d like to modify my booking." },
      { ko: "체크인 날짜를 토요일로 하루 미룰 수 있을까요? 그리고 같은 객실 유형으로 예약할 수 있는지도 궁금해요.", en: "Would it be possible to move my check-in date to Saturday? Also, is the same room type available?" },
      { ko: "예약을 변경하면 추가 요금이 있나요? 변경된 예약에도 조식이 포함되는지 확인해 주실 수 있나요?", en: "Is there an additional fee for changing the reservation? And could you check whether breakfast is still included in the updated booking?" },
      { ko: "확인해 주셔서 감사합니다. 변경된 예약 확인서를 이메일로 보내주시면 좋겠어요.", en: "Thank you for checking. I’d appreciate it if you could email me an updated confirmation." }
    ], expressions: [["modify my booking", "예약을 변경하다"], ["Would it be possible to …?", "~이 가능할까요?"], ["I’d appreciate it if …", "~해 주시면 감사하겠습니다"]]
  },
  {
    id: "cafe-routine-and-experience",
    topic: "Culture",
    label: "카페 · 일상 루틴 및 경험",
    art: "Daily Coffee Routine",
    title: "My Daily Coffee Ritual at a Sleek Neighborhood Cafe",
    subtitle: "How a simple daily habit at a local cafe transforms a busy morning routine.",
    question: "What do you usually do at a cafe, and how has it changed compared to the past?",
    questionKo: "당신은 보통 카페에서 무엇을 하며, 과거와 비교해 어떻게 달라졌나요?",
    paragraphs: [
      {
        ko: "음, 매일 아침 우리 집 근처 카페는 사람들로 가득 차요. 특히 그 카페는 현대적인 조명으로 세련되게 꾸며져 있어서 늘 눈길을 사로잡죠.",
        en: "Well, on a daily basis, the cafe near my home is full of people in the morning. Especially, the cafe is sleek with modern lights, so it always catches my eye."
      },
      {
        ko: "그래서 출근 전에 아메리카노를 마시는 게 저의 루틴이에요. 보통 우리 동네의 작은 카페들에서 시간을 보내는 걸 즐긴답니다.",
        en: "So, my ritual is to drink an Americano before work. I usually enjoy spending time in small cafes in my neighborhood."
      },
      {
        ko: "기억나는 게, 예전에 시험 공부를 하느라 매일같이 카페에서 공부했던 적이 있어요. 집중하기에 정말 좋은 환경이었죠.",
        en: "I remember one time, in the past, I studied at a cafe on a daily basis for my exam. It was such a great environment to focus."
      },
      {
        ko: "하지만 요즘은 커피가 저의 일상적인 루틴이 되었고, 바쁜 하루 끝에 긴장을 풀러 그런 곳들을 찾는 것이 정말 소중해요.",
        en: "But these days, coffee is my daily ritual, and I truly appreciate visiting those places to unwind after a busy day."
      }
    ],
    expressions: [
      ["on a daily basis", "매일"],
      ["sleek with modern lights", "현대적인 조명으로 세련된"],
      ["my ritual is to", "나의 루틴은 ~하는 것이다"]
    ]
  },
  {
    id: "public-transportation-commuting",
    topic: "Living",
    label: "교통 · 출퇴근 루틴 및 비교",
    art: "Daily Commute",
    title: "Navigating the City via Public Transportation",
    subtitle: "A look into how commuting habits and public transportation have evolved over time.",
    question: "How do you usually commute, and what are some things you've noticed about public transportation?",
    questionKo: "당신은 주로 어떻게 출퇴근을 하며, 대중교통에 대해 느낀 점은 무엇인가요?",
    paragraphs: [
      {
        ko: "교통과 관련해서 안전은 매우 중요합니다. 대중교통은 우리 도시에서 정말 잘 되어 있어요.",
        en: "When it comes to transportation, safety is important. Public transportation is very good in my city."
      },
      {
        ko: "그래서 저는 매일 출근하기 위해 대중교통을 이용하는 편입니다. 보통 출근할 때 지하철을 타죠.",
        en: "So, when it comes to commuting, I take the subway every day. I use public transportation to go to work."
      },
      {
        ko: "과거에 학교에 걸어 다니거나 붐비는 대중교통을 이용했던 기억이 나요. 잘못된 노선을 타서 길을 잃었던 적도 있답니다.",
        en: "I remember when it came to commuting, I walked to school or took crowded public transportation. I once got lost because I took the wrong subway line."
      },
      {
        ko: "하지만 요즘은 새로운 지하철 노선들이 많이 생겨났고, 출퇴근 시에 지하철을 선택하는 것이 가장 편리합니다.",
        en: "But these days, so many new subway lines have been built, and I always choose the subway when it comes to commuting."
      }
    ],
    expressions: [
      ["when it comes to", "~에 관한 한"],
      ["public transportation", "대중교통"],
      ["subway line", "지하철 노선"]
    ]
  },
  {
    id: "recycling-meticulous-habits",
    topic: "Culture",
    label: "재활용 · 분리수거 습관 및 경험",
    art: "Meticulous Recycling",
    title: "Meticulous Recycling Habits in My Country",
    subtitle: "How everyday recycling practices and strict regulations have evolved.",
    question: "How do people in your country handle recycling, and what are your personal habits?",
    questionKo: "당신 나라의 사람들은 재활용을 어떻게 처리하며, 당신의 개인적인 습관은 어떠한가요?",
    paragraphs: [
      {
        ko: "우리나라 사람들은 재활용에 매우 꼼꼼합니다. 세세한 규칙들까지 설명되어 있어 철저히 지켜야 하죠.",
        en: "People in my country are meticulous about recycling. Rules are explained down to the last detail so we follow them carefully."
      },
      {
        ko: "집에서 재활용을 할 때 저 역시 아주 꼼꼼하게 분리수거를 하려고 노력합니다. 특히 비닐류는 투명한 봉투에 따로 담아서 버리죠.",
        en: "At home, I try to be meticulous when I recycle. I always recycle vinyl by putting it in a clear bag."
      },
      {
        ko: "예전에 모든 것을 완벽하게 분리해서 내놓았는데, 하필 그날 수거 트럭이 오지 않아 당황했던 기억이 나네요.",
        en: "I remember once I went the extra mile by separating everything, but the truck didn't come that day, which was quite frustrating."
      },
      {
        ko: "하지만 요즘은 재활용 규정이 훨씬 더 꼼꼼해졌고, 우리 모두 환경을 위해 한 걸음 더 노력을 기울이고 있습니다.",
        en: "But these days, recycling is regulated down to the last detail, and people always go the extra mile to protect the environment."
      }
    ],
    expressions: [
      ["meticulous about", "~에 대해 꼼꼼한"],
      ["down to the last detail", "세세한 부분까지 모두"],
      ["go the extra mile", "한 걸음 더 나아가 노력을 기울이다"]
    ]
  },
  {
    id: "technology-amazing-inventions",
    topic: "Culture",
    label: "기술 · 전자기기 및 발명품",
    art: "Amazing Tech Inventions",
    title: "Surrounded by Impressive Tech Inventions",
    subtitle: "How modern electronic devices and gadgets have transformed our daily lives.",
    question: "What are some technological devices you use, and how do you feel about modern inventions?",
    questionKo: "당신이 사용하는 전자기기는 무엇이며, 현대의 발명품에 대해 어떻게 생각하시나요?",
    paragraphs: [
      {
        ko: "우리 주변의 전자기기들은 정말 인상적입니다. 에어팟이나 무선 기기들을 발명한 사람들에게 정말 감사함을 느껴요.",
        en: "I think electronics these days are pretty impressive. Whoever invented AirPods or other gadgets, I really appreciate them."
      },
      {
        ko: "저는 평소에 저에게 깊은 인상을 주는 최신 테크 제품들을 자주 찾아보고, 제 노트북이나 태블릿을 정말 소중하게 여깁니다.",
        en: "I often buy the newest tech products that really impress me, and I value my iPad and laptop more than anything."
      },
      {
        ko: "어릴 때는 MP3 플레이어가 가장 소중하고 인상적인 기기였지만, 지금은 어떤 기기들은 더 이상 그렇게 특별해 보이지 않죠.",
        en: "When I was younger, my MP3 player was the most valuable thing I had, but now some older gadgets aren't impressive anymore."
      },
      {
        ko: "하지만 요즘은 기술이 얼마나 빠르게 발전하는지 새삼 느끼며, 항상 사용할 수 있도록 충전하며 잘 활용하고 있습니다.",
        en: "These days, I really value how quickly technology is developing, and I always make sure my devices are fully usable when I need them."
      }
    ],
    expressions: [
      ["pretty impressive", "꽤 인상적인"],
      ["value ~ more than", "~를 ~보다 더 소중히 여기다"],
      ["how quickly technology is developing", "기술이 얼마나 빠르게 발전하는지"]
    ]
  },
  {
    id: "free-time-recharge-and-hobbies",
    topic: "Wellbeing",
    label: "여가 시간 · 휴식 및 재충전 루틴",
    art: "Free Time Recharge",
    title: "Recharging My Energy During Free Time",
    subtitle: "How spending free time staying in or walking helps me fully recharge.",
    question: "What do you usually do during your free time, and how does it help you?",
    questionKo: "당신은 여가 시간에 주로 무엇을 하며, 그것이 어떻게 도움이 되나요?",
    paragraphs: [
      {
        ko: "여가 시간은 제가 온전히 재충전할 수 있는 유일한 시간입니다. 친구들과 어울리는 것도 좋지만, 저는 주로 집에 머무는 것을 정말 좋아해요.",
        en: "Free time is the only time that I can fully recharge. I truly believe staying in is the best way to spend your free time."
      },
      {
        ko: "여유가 생기면 아내와 함께 산책을 하곤 합니다. 여가 시간에 가볍게 산책을 즐기는 것은 제가 가장 좋아하는 방법 중 하나예요.",
        en: "Whenever I have free time, I always go for a walk. I went for a walk last night with my wife and it was a great experience."
      },
      {
        ko: "예전에는 어렸을 때 책을 읽으며 재충전하곤 했고, 주말이 오기를 학수고대하며 바쁜 일상을 보냈었죠.",
        en: "Back when I was younger, I would read books to recharge during my free time, and I always looked forward to the weekend."
      },
      {
        ko: "하지만 요즘은 집에 머물며 온전한 휴식을 취하거나 가벼운 산책을 하는 것이 바쁜 일상 속에서 에너지를 채우는 최고의 방법이라는 것을 깨달았습니다.",
        en: "But now, I've realized that staying in and taking a nice walk are the best ways to spend free time and fully recharge."
      }
    ],
    expressions: [
      ["fully recharge", "온전히 재충전하다"],
      ["staying in", "집에 머물기 / 외출하지 않기"],
      ["go for a walk", "산책하다"]
    ]
  },
  {
    id: "restaurant-food-experience",
    topic: "Living",
    label: "음식점 · 맛집 탐방 및 외식 경험",
    art: "Dining Out Experience",
    title: "Exploring Cozy Restaurants in My Neighborhood",
    subtitle: "How dining out with friends has become a favorite way to unwind.",
    question: "What kind of restaurants do you usually visit, and can you share a memorable dining experience?",
    questionKo: "당신은 주로 어떤 종류의 식당을 방문하며, 기억에 남는 외식 경험을 공유해 주세요.",
    paragraphs: [
      {
        ko: "요즘 우리 동네에는 분위기 좋은 맛집들이 정말 많이 생겼습니다. 특히 세련된 인테리어를 갖춘 곳들이 늘 눈에 띄어요.",
        en: "These days, there are numerous cozy and trendy restaurants popping up in my neighborhood, and they always look so sleek."
      },
      {
        ko: "저는 주말마다 친구들과 함께 새로운 식당을 찾아가 맛있는 음식을 먹으며 스트레스를 푸는 것을 즐깁니다.",
        en: "I usually enjoy hanging out with my friends at local restaurants on weekends to try out new food."
      },
      {
        ko: "한 번은 예약하기 정말 힘든 유명 레스토랑을 갔었는데, 직원들이 세세한 부분까지 친절하게 챙겨주어 감동을 받았던 기억이 나요.",
        en: "I remember once I visited a popular restaurant where the staff explained everything down to the last detail, which made the experience unforgettable."
      },
      {
        ko: "바쁜 일상 속에서 이렇게 맛있는 음식을 즐기며 에너지를 재충전하는 시간이 저에게는 무엇보다 소중합니다.",
        en: "Looking back, taking a break from a busy schedule to enjoy a great meal is truly the best way to recharge."
      }
    ],
    expressions: [
      ["trendy restaurants", "트렌디한 식당"],
      ["hanging out with my friends", "친구들과 어울리기"],
      ["down to the last detail", "세세한 부분까지"]
    ]
  },
  {
    id: "park-walk-and-jogging",
    topic: "Wellbeing",
    label: "공원 산책 및 조깅 · 야외 활동 루틴",
    art: "Park Jogging Routine",
    title: "Staying Active with a Jogging Routine at the Local Park",
    subtitle: "How regular walks and morning jogs in the neighborhood park help me stay healthy and relaxed.",
    question: "What do you usually do when you go to a park, and can you share a memorable experience there?",
    questionKo: "공원에 가면 주로 무엇을 하며, 그곳에서의 기억에 남는 경험을 공유해 주세요.",
    paragraphs: [
      {
        ko: "우리 동네 근처에는 산책하기 정말 좋은 예쁜 공원이 있습니다. 아침마다 상쾌한 공기를 마시며 가볍게 걷는 사람들이 많죠.",
        en: "There is a lovely park near my home where people love to go on a daily basis. In the morning, it's always full of people enjoying the fresh air."
      },
      {
        ko: "저는 건강을 관리하고 하루를 활기차게 시작하기 위해 주말마다 공원에서 조깅을 하거나 산책을 즐기는 루틴을 가지고 있습니다.",
        en: "My routine is to go for a walk or go jogging at the park every weekend to stay active and manage my health."
      },
      {
        ko: "얼마 전에는 날씨가 너무 좋아서 평소보다 훨씬 더 멀리 공원 산책로를 따라 걸었는데, 정말 상쾌하고 기분이 좋았던 기억이 나요.",
        en: "I remember one time last month, I went the extra mile and walked all the way around the large trail in the park, and it was a wonderful experience."
      },
      {
        ko: "바쁜 일상 속에서 자연을 느끼며 재충전할 수 있는 이런 공원 방문은 요즘 저에게 무엇보다 소중한 일과입니다.",
        en: "These days, spending time at the park to recharge my energy has truly become one of my favorite ways to spend free time."
      }
    ],
    expressions: [
      ["go for a walk", "산책하다"],
      ["go jogging", "조깅하다"],
      ["recharge my energy", "에너지를 재충전하다"]
    ]
  },
  {
    "id": "reading-hobby",
    "topic": "Reading",
    "label": "독서",
    "art": "With a book.",
    "title": "Books as my favorite hobby",
    "subtitle": "여가 시간에 주로 무엇을 하나요?",
    "question": "What do you like to do in your free time?",
    "questionKo": "여가 시간에 주로 무엇을 하나요?",
    "paragraphs": [
      {
        "ko": "제가 가장 좋아하는 취미는 독서예요. 특히 퇴근 후나 주말에 책을 읽어요.",
        "en": "My favorite hobby is reading books. I usually read after work or on weekends."
      },
      {
        "ko": "경제와 자기계발에 관한 책을 좋아해요. 세상을 더 잘 이해하게 해주거든요.",
        "en": "I enjoy books about economics and personal development because they help me understand the world better."
      },
      {
        "ko": "일이 바빠도 매일 몇 페이지는 읽으려고 노력해요.",
        "en": "Even though I am busy with work, I try to read at least a few pages every day."
      },
      {
        "ko": "책을 읽으면 새로운 것을 배우고 일에 대한 생각도 잠시 잊을 수 있어요.",
        "en": "Reading helps me learn new things and take my mind off work."
      }
    ],
    "expressions": [
      [
        "make time for reading",
        "독서할 시간을 내다"
      ],
      [
        "take my mind off work",
        "일에서 잠시 벗어나다"
      ],
      [
        "from a different perspective",
        "다른 관점에서"
      ]
    ]
  },
  {
    "id": "reading-genres",
    "topic": "Reading",
    "label": "독서",
    "art": "With a book.",
    "title": "Why economics books interest me",
    "subtitle": "어떤 종류의 책을 좋아하나요?",
    "question": "What kinds of books do you like?",
    "questionKo": "어떤 종류의 책을 좋아하나요?",
    "paragraphs": [
      {
        "ko": "저는 주로 경제와 비즈니스 책을 읽어요.",
        "en": "I mostly enjoy reading books about economics and business."
      },
      {
        "ko": "물가나 금리, 주식시장이 일상에 어떤 영향을 주는지 궁금하거든요.",
        "en": "I am curious about how inflation, interest rates, and the stock market affect our daily lives."
      },
      {
        "ko": "가끔 어려운 내용도 있지만 이해하는 과정이 재미있어요.",
        "en": "Some topics are complicated, but I find learning about them really interesting."
      },
      {
        "ko": "새로운 생각을 얻을 수 있어서 독서할 시간을 내려고 해요.",
        "en": "Books give me new ideas, so I always try to make time for reading."
      }
    ],
    "expressions": [
      [
        "make time for reading",
        "독서할 시간을 내다"
      ],
      [
        "take my mind off work",
        "일에서 잠시 벗어나다"
      ],
      [
        "from a different perspective",
        "다른 관점에서"
      ]
    ]
  },
  {
    "id": "reading-memorable",
    "topic": "Reading",
    "label": "독서",
    "art": "With a book.",
    "title": "A book that changed my perspective",
    "subtitle": "기억에 남는 책을 소개해 주세요.",
    "question": "Tell me about a memorable book you read.",
    "questionKo": "기억에 남는 책을 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "기억에 남는 책 중 하나는 투자와 경제를 다룬 책이에요.",
        "en": "One of the most memorable books I read was about investing and the economy."
      },
      {
        "ko": "시장은 경제 뉴스뿐 아니라 투자자의 기대와 감정에도 영향을 받는다고 설명했어요.",
        "en": "It explained that markets are affected not only by economic news but also by investors’ expectations and emotions."
      },
      {
        "ko": "사람들의 생각이 빨리 바뀐다는 사실이 놀라웠어요.",
        "en": "I was surprised by how quickly people’s opinions can change."
      },
      {
        "ko": "그 책을 읽은 뒤 경제 뉴스를 다른 관점에서 보게 됐어요.",
        "en": "After reading it, I started looking at economic news from a different perspective."
      }
    ],
    "expressions": [
      [
        "make time for reading",
        "독서할 시간을 내다"
      ],
      [
        "take my mind off work",
        "일에서 잠시 벗어나다"
      ],
      [
        "from a different perspective",
        "다른 관점에서"
      ]
    ]
  },
  {
    "id": "reading-changes",
    "topic": "Reading",
    "label": "독서",
    "art": "With a book.",
    "title": "How my reading habits changed",
    "subtitle": "독서 습관이 과거와 어떻게 달라졌나요?",
    "question": "How have your reading habits changed over time?",
    "questionKo": "독서 습관이 과거와 어떻게 달라졌나요?",
    "paragraphs": [
      {
        "ko": "어릴 때는 소설과 만화책을 주로 읽었어요.",
        "en": "When I was younger, I mostly read novels and comic books."
      },
      {
        "ko": "요즘은 경제, 투자, 자기계발 책을 더 즐겨 읽어요.",
        "en": "These days, I prefer books about economics, investing, and personal development."
      },
      {
        "ko": "예전에는 종이책을 읽었지만 이제는 휴대전화로 전자책도 읽어요.",
        "en": "I used to read printed books, but now I sometimes read e-books on my phone."
      },
      {
        "ko": "읽는 책은 달라졌어도 독서는 여전히 좋아하는 취미예요.",
        "en": "The types of books have changed, but reading is still one of my favorite hobbies."
      }
    ],
    "expressions": [
      [
        "make time for reading",
        "독서할 시간을 내다"
      ],
      [
        "take my mind off work",
        "일에서 잠시 벗어나다"
      ],
      [
        "from a different perspective",
        "다른 관점에서"
      ]
    ]
  },
  {
    "id": "living-ideal",
    "topic": "Living",
    "label": "집 · 주거",
    "art": "At home.",
    "title": "A convenient place to live in Seoul",
    "subtitle": "앞으로 살고 싶은 지역을 설명해 주세요.",
    "question": "Describe the place where you would like to live.",
    "questionKo": "앞으로 살고 싶은 지역을 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "저는 앞으로 서울에 살고 싶어요. 서울은 생활하기 편리한 도시예요.",
        "en": "I would really like to live in Seoul. It is a very convenient city."
      },
      {
        "ko": "가장 중요한 것은 교통이에요. 저는 서울 밖에 있는 회사로 출퇴근하거든요.",
        "en": "The most important thing for me is transportation because I work outside Seoul."
      },
      {
        "ko": "회사 셔틀버스를 쉽게 탈 수 있는 곳에 살고 싶어요.",
        "en": "I want to live somewhere I can easily catch the company shuttle bus."
      },
      {
        "ko": "정류장이 집에서 걸어갈 거리에 있다면 일상이 훨씬 편해질 거예요.",
        "en": "If the shuttle bus stop were within walking distance, my daily life would be much easier."
      }
    ],
    "expressions": [
      [
        "within walking distance",
        "걸어서 갈 수 있는 거리"
      ],
      [
        "company shuttle bus",
        "회사 셔틀버스"
      ],
      [
        "convenient",
        "편리한"
      ]
    ]
  },
  {
    "id": "living-priority",
    "topic": "Living",
    "label": "집 · 주거",
    "art": "At home.",
    "title": "Transportation comes first",
    "subtitle": "집을 고를 때 가장 중요한 조건은 무엇인가요?",
    "question": "What matters most when choosing a home?",
    "questionKo": "집을 고를 때 가장 중요한 조건은 무엇인가요?",
    "paragraphs": [
      {
        "ko": "저에게 가장 중요한 조건은 교통이에요.",
        "en": "Transportation is the most important factor for me when choosing a home."
      },
      {
        "ko": "매일 자동차를 운전하면 출퇴근 시간에 스트레스를 많이 받을 수 있어요.",
        "en": "Driving every day can be stressful, especially during rush hour."
      },
      {
        "ko": "셔틀버스를 타면 쉬거나 음악을 듣거나 잠깐 잘 수도 있어요.",
        "en": "On the shuttle bus, I can relax, listen to music, or even get some sleep."
      },
      {
        "ko": "가족을 위해 좋은 학교도 중요하지만 셔틀 접근성이 최우선이에요.",
        "en": "Good schools matter for my family, too, but easy access to the shuttle is my top priority."
      }
    ],
    "expressions": [
      [
        "within walking distance",
        "걸어서 갈 수 있는 거리"
      ],
      [
        "company shuttle bus",
        "회사 셔틀버스"
      ],
      [
        "convenient",
        "편리한"
      ]
    ]
  },
  {
    "id": "living-changes",
    "topic": "Living",
    "label": "집 · 주거",
    "art": "At home.",
    "title": "My changing priorities in housing",
    "subtitle": "주거지에 대한 선호가 어떻게 달라졌나요?",
    "question": "How have your housing preferences changed?",
    "questionKo": "주거지에 대한 선호가 어떻게 달라졌나요?",
    "paragraphs": [
      {
        "ko": "어릴 때는 아파트의 크기와 새로움을 중요하게 생각했어요.",
        "en": "When I was younger, I mostly cared about the size of the apartment and how modern it was."
      },
      {
        "ko": "하지만 가족과 직장이 생긴 뒤로 생각이 달라졌어요.",
        "en": "But my priorities changed after I started a family and a full-time job."
      },
      {
        "ko": "이제는 학교와 교통이 편리한 서울 지역에 살고 싶어요.",
        "en": "Now, I want to live in an area of Seoul with good schools and convenient transportation."
      },
      {
        "ko": "큰 집보다 가족의 생활과 출퇴근이 편한 집이 더 중요해요.",
        "en": "A convenient home for my family and commute matters more to me than a large apartment."
      }
    ],
    "expressions": [
      [
        "within walking distance",
        "걸어서 갈 수 있는 거리"
      ],
      [
        "company shuttle bus",
        "회사 셔틀버스"
      ],
      [
        "convenient",
        "편리한"
      ]
    ]
  },
  {
    "id": "gyeongju-place",
    "topic": "Domestic Travel",
    "label": "국내 여행 · 경주",
    "art": "In Gyeongju.",
    "title": "A peaceful trip to Gyeongju",
    "subtitle": "국내에서 여행했던 장소를 소개해 주세요.",
    "question": "Tell me about a place you visited in Korea.",
    "questionKo": "국내에서 여행했던 장소를 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "한국에서 가장 기억에 남는 여행지 중 하나는 경주예요.",
        "en": "One of the most memorable places I have visited in Korea is Gyeongju."
      },
      {
        "ko": "경주는 역사 유적지로 유명하고 분위기가 평화로워요.",
        "en": "Gyeongju is famous for its historical sites and peaceful atmosphere."
      },
      {
        "ko": "높은 건물이 많은 서울과 달리 전통 건축물과 아름다운 풍경을 즐길 수 있어요.",
        "en": "Unlike Seoul, it has many traditional buildings and beautiful views."
      },
      {
        "ko": "산책하면서 한국 역사에 대해 배우고 쉴 수 있어서 다시 가고 싶어요.",
        "en": "I would love to go back because I can relax while walking around and learning about Korean history."
      }
    ],
    "expressions": [
      [
        "historical sites",
        "역사 유적지"
      ],
      [
        "peaceful atmosphere",
        "평화로운 분위기"
      ],
      [
        "take a break",
        "잠시 쉬다"
      ]
    ]
  },
  {
    "id": "gyeongju-activities",
    "topic": "Domestic Travel",
    "label": "국내 여행 · 경주",
    "art": "In Gyeongju.",
    "title": "Exploring the sights of Gyeongju",
    "subtitle": "경주 여행에서 무엇을 했나요?",
    "question": "What did you do during your trip to Gyeongju?",
    "questionKo": "경주 여행에서 무엇을 했나요?",
    "paragraphs": [
      {
        "ko": "경주에서는 유명 관광지를 둘러봤어요.",
        "en": "During my trip to Gyeongju, I visited some famous tourist attractions."
      },
      {
        "ko": "불국사와 첨성대 같은 역사적인 장소가 특히 인상적이었어요.",
        "en": "Historical places like Bulguksa Temple and Cheomseongdae were especially impressive."
      },
      {
        "ko": "황리단길에서는 카페를 구경하고 맛있는 음식을 먹었어요.",
        "en": "At Hwangnidan-gil, I explored cafes and tried some delicious food."
      },
      {
        "ko": "가장 좋았던 것은 서두르지 않고 걸으며 풍경을 즐기는 시간이었어요.",
        "en": "My favorite part was walking around and enjoying the scenery without rushing."
      }
    ],
    "expressions": [
      [
        "historical sites",
        "역사 유적지"
      ],
      [
        "peaceful atmosphere",
        "평화로운 분위기"
      ],
      [
        "take a break",
        "잠시 쉬다"
      ]
    ]
  },
  {
    "id": "gyeongju-memory",
    "topic": "Domestic Travel",
    "label": "국내 여행 · 경주",
    "art": "In Gyeongju.",
    "title": "What made Gyeongju unforgettable",
    "subtitle": "기억에 남는 국내 여행 경험을 말해 주세요.",
    "question": "Tell me about a memorable travel experience.",
    "questionKo": "기억에 남는 국내 여행 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "경주에서 전통 건물과 유적지를 걸어 다녔던 순간이 기억에 남아요.",
        "en": "I remember walking around the traditional buildings and historical sites in Gyeongju."
      },
      {
        "ko": "오래된 장소들이 잘 보존되어 있다는 점이 인상적이었어요.",
        "en": "I was impressed by how well the historical places were preserved."
      },
      {
        "ko": "카페에서 쉬고 맛있는 음식을 먹으며 여유로운 시간을 보냈어요.",
        "en": "I relaxed in cafes and enjoyed delicious food."
      },
      {
        "ko": "돌아왔을 때 기분이 상쾌했고 가장 좋아하는 여행지 중 하나가 되었어요.",
        "en": "I felt refreshed when I got home, and it became one of my favorite travel destinations."
      }
    ],
    "expressions": [
      [
        "historical sites",
        "역사 유적지"
      ],
      [
        "peaceful atmosphere",
        "평화로운 분위기"
      ],
      [
        "take a break",
        "잠시 쉬다"
      ]
    ]
  },
  {
    "id": "gyeongju-compare",
    "topic": "Domestic Travel",
    "label": "국내 여행 · 경주",
    "art": "In Gyeongju.",
    "title": "A slower kind of vacation",
    "subtitle": "경주 여행은 다른 여행과 무엇이 달랐나요?",
    "question": "How was your Gyeongju trip different from other trips?",
    "questionKo": "경주 여행은 다른 여행과 무엇이 달랐나요?",
    "paragraphs": [
      {
        "ko": "보통 여행에서는 번화한 지역에 가거나 쇼핑하는 걸 좋아해요.",
        "en": "I usually enjoy visiting busy areas and going shopping when I travel."
      },
      {
        "ko": "하지만 경주는 훨씬 조용하고 여유로웠어요.",
        "en": "But Gyeongju was much quieter and more relaxing."
      },
      {
        "ko": "쇼핑몰 대신 유적지를 걸으며 역사에 대해 배웠어요.",
        "en": "Instead of going to malls, I walked around historical sites and learned about history."
      },
      {
        "ko": "여기저기 서두를 필요 없이 순간을 즐길 수 있었어요.",
        "en": "I did not have to rush from place to place. I could just enjoy the moment."
      }
    ],
    "expressions": [
      [
        "historical sites",
        "역사 유적지"
      ],
      [
        "peaceful atmosphere",
        "평화로운 분위기"
      ],
      [
        "take a break",
        "잠시 쉬다"
      ]
    ]
  },
  {
    "id": "gyeongju-routine",
    "topic": "Domestic Travel",
    "label": "국내 여행 · 경주",
    "art": "In Gyeongju.",
    "title": "What I enjoy on domestic trips",
    "subtitle": "국내 여행에서는 보통 무엇을 하나요?",
    "question": "What do you usually do when traveling in Korea?",
    "questionKo": "국내 여행에서는 보통 무엇을 하나요?",
    "paragraphs": [
      {
        "ko": "국내 여행에서는 관광 명소와 맛집을 찾아다녀요.",
        "en": "When I travel in Korea, I usually visit tourist attractions and try local food."
      },
      {
        "ko": "가족과 쉬면서 시간을 보낼 수 있는 장소를 좋아해요.",
        "en": "I prefer places where I can relax and spend time with my family."
      },
      {
        "ko": "경주에 갔을 때는 유적지를 걷고 작은 카페에서 쉬었어요.",
        "en": "When I visited Gyeongju, I walked around historical sites and relaxed in small cafes."
      },
      {
        "ko": "저에게 여행은 바쁜 일상에서 벗어나 좋은 추억을 만드는 일이에요.",
        "en": "For me, traveling is about taking a break from my busy life and making good memories."
      }
    ],
    "expressions": [
      [
        "historical sites",
        "역사 유적지"
      ],
      [
        "peaceful atmosphere",
        "평화로운 분위기"
      ],
      [
        "take a break",
        "잠시 쉬다"
      ]
    ]
  },
  {
    "id": "gyeongju-traffic",
    "topic": "Domestic Travel",
    "label": "국내 여행 · 경주",
    "art": "In Gyeongju.",
    "title": "A traffic problem on a trip",
    "subtitle": "국내 여행 중 겪은 문제를 설명해 주세요.",
    "question": "Tell me about a problem on a domestic trip.",
    "questionKo": "국내 여행 중 겪은 문제를 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "경주 여행 중 교통이 예상보다 혼잡했던 상황을 떠올릴 수 있어요.",
        "en": "I remember a time during a trip to Gyeongju when traffic was worse than expected."
      },
      {
        "ko": "차가 너무 많아 일정을 모두 소화하기 어려웠어요.",
        "en": "There were so many cars that it became hard to follow our original plan."
      },
      {
        "ko": "그래서 차를 주차하고 근처 명소들을 걸어 다니기로 했어요.",
        "en": "So we decided to park the car and explore nearby attractions on foot."
      },
      {
        "ko": "결과적으로 멋진 카페도 발견하고 즐거운 시간을 보냈어요.",
        "en": "It turned out well because we found some nice cafes and had a great time."
      }
    ],
    "expressions": [
      [
        "historical sites",
        "역사 유적지"
      ],
      [
        "peaceful atmosphere",
        "평화로운 분위기"
      ],
      [
        "take a break",
        "잠시 쉬다"
      ]
    ]
  },
  {
    "id": "okinawa-trip",
    "topic": "International Travel",
    "label": "해외 여행 · 오키나와",
    "art": "In Okinawa.",
    "title": "Blue seas and unfamiliar roads",
    "subtitle": "다녀온 해외 여행지를 소개해 주세요.",
    "question": "Tell me about a foreign country you visited.",
    "questionKo": "다녀온 해외 여행지를 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "가장 기억에 남는 해외 여행지는 일본 오키나와예요.",
        "en": "One of my most memorable trips abroad was to Okinawa, Japan."
      },
      {
        "ko": "아름다운 바다와 편안한 분위기를 즐겼고 섬을 둘러보기 위해 차를 빌렸어요.",
        "en": "I enjoyed the beautiful beaches and relaxing atmosphere, and I rented a car to explore the island."
      },
      {
        "ko": "하지만 일본은 한국과 달리 좌측통행을 하고 운전대가 오른쪽에 있어요.",
        "en": "However, in Japan people drive on the left, and the steering wheel is on the right, unlike in Korea."
      },
      {
        "ko": "처음에는 헷갈렸지만 오래 기억에 남는 여행이었어요.",
        "en": "It was confusing at first, but the trip was unforgettable."
      }
    ],
    "expressions": [
      [
        "drive on the left",
        "좌측통행하다"
      ],
      [
        "get into a car accident",
        "자동차 사고가 나다"
      ],
      [
        "not used to it",
        "익숙하지 않다"
      ]
    ]
  },
  {
    "id": "okinawa-accident",
    "topic": "International Travel",
    "label": "해외 여행 · 오키나와",
    "art": "In Okinawa.",
    "title": "An unforgettable rental-car accident",
    "subtitle": "해외 여행 중 기억에 남는 일을 말해 주세요.",
    "question": "Tell me about a memorable experience abroad.",
    "questionKo": "해외 여행 중 기억에 남는 일을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "오키나와에서 렌터카를 운전하다 사고가 난 적이 있어요.",
        "en": "I got into a car accident while driving a rental car in Okinawa."
      },
      {
        "ko": "일본의 운전대 위치와 주행 방향이 한국과 달라 익숙하지 않았어요.",
        "en": "I was not used to the steering wheel position and driving direction because they are different from Korea."
      },
      {
        "ko": "사고가 났을 때 정말 놀라고 스트레스를 받았어요.",
        "en": "When the accident happened, I was really shocked and stressed out."
      },
      {
        "ko": "이 경험을 통해 해외에서 운전하기 전에 현지 교통 규칙을 잘 확인해야 한다는 것을 배웠어요.",
        "en": "That experience taught me to check local traffic rules carefully before driving abroad."
      }
    ],
    "expressions": [
      [
        "drive on the left",
        "좌측통행하다"
      ],
      [
        "get into a car accident",
        "자동차 사고가 나다"
      ],
      [
        "not used to it",
        "익숙하지 않다"
      ]
    ]
  },
  {
    "id": "okinawa-problem",
    "topic": "International Travel",
    "label": "해외 여행 · 오키나와",
    "art": "In Okinawa.",
    "title": "Solving a rental-car problem",
    "subtitle": "해외 여행에서 생긴 문제와 대응을 설명해 주세요.",
    "question": "Describe a problem you had while traveling abroad.",
    "questionKo": "해외 여행에서 생긴 문제와 대응을 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "오키나와에서 차를 빌린 후 예상치 못한 문제가 생겼어요.",
        "en": "I had an unexpected problem after renting a car in Okinawa."
      },
      {
        "ko": "좌측통행에 익숙하지 않아 결국 사고가 났어요.",
        "en": "I was not used to driving on the left, and I ended up having an accident."
      },
      {
        "ko": "처음에는 걱정이 컸지만 침착하게 상황을 처리하려고 했어요.",
        "en": "I was very worried at first, but I tried to stay calm and deal with the situation."
      },
      {
        "ko": "그 후로는 해외에서 운전할 때 교통 규칙을 더 신중하게 살펴봐요.",
        "en": "Since then, I have been much more careful about local traffic rules when driving abroad."
      }
    ],
    "expressions": [
      [
        "drive on the left",
        "좌측통행하다"
      ],
      [
        "get into a car accident",
        "자동차 사고가 나다"
      ],
      [
        "not used to it",
        "익숙하지 않다"
      ]
    ]
  },
  {
    "id": "okinawa-driving",
    "topic": "International Travel",
    "label": "해외 여행 · 오키나와",
    "art": "In Okinawa.",
    "title": "Korean roads versus Japanese roads",
    "subtitle": "일본과 한국의 운전 방식은 어떻게 다른가요?",
    "question": "How is driving in Japan different from Korea?",
    "questionKo": "일본과 한국의 운전 방식은 어떻게 다른가요?",
    "paragraphs": [
      {
        "ko": "한국에서는 운전대가 왼쪽에 있고 도로 오른쪽으로 달려요.",
        "en": "In Korea, the steering wheel is on the left, and we drive on the right side of the road."
      },
      {
        "ko": "반면 일본에서는 운전대가 오른쪽에 있고 좌측통행을 해요.",
        "en": "In Japan, it is the opposite: the steering wheel is on the right, and people drive on the left."
      },
      {
        "ko": "오키나와에서 렌터카를 운전해 보니 생각보다 헷갈렸어요.",
        "en": "When I drove a rental car in Okinawa, it was more confusing than I expected."
      },
      {
        "ko": "사고를 겪은 뒤 현지 규칙에 익숙해지는 것이 중요하다고 느꼈어요.",
        "en": "After my accident, I realized how important it is to get familiar with local driving rules."
      }
    ],
    "expressions": [
      [
        "drive on the left",
        "좌측통행하다"
      ],
      [
        "get into a car accident",
        "자동차 사고가 나다"
      ],
      [
        "not used to it",
        "익숙하지 않다"
      ]
    ]
  },
  {
    "id": "okinawa-compare",
    "topic": "International Travel",
    "label": "해외 여행 · 오키나와",
    "art": "In Okinawa.",
    "title": "Gyeongju and Okinawa compared",
    "subtitle": "국내 여행과 해외 여행을 비교해 주세요.",
    "question": "Compare your domestic and international trips.",
    "questionKo": "국내 여행과 해외 여행을 비교해 주세요.",
    "paragraphs": [
      {
        "ko": "경주 여행에서는 언어와 교통이 익숙해서 편하게 다닐 수 있었어요.",
        "en": "In Gyeongju, the language and transportation were familiar, so traveling was easy."
      },
      {
        "ko": "오키나와에서는 아름다운 해변과 다른 문화를 즐겼어요.",
        "en": "In Okinawa, I enjoyed beautiful beaches and a different culture."
      },
      {
        "ko": "하지만 렌터카 운전 방식이 달라 사고가 날 정도로 힘들었어요.",
        "en": "However, the driving system was so different that I even had a rental-car accident."
      },
      {
        "ko": "두 여행 모두 장점이 있지만 해외 여행에서는 더 많은 준비가 필요하다고 생각해요.",
        "en": "Both trips had their advantages, but I think international travel requires more preparation."
      }
    ],
    "expressions": [
      [
        "drive on the left",
        "좌측통행하다"
      ],
      [
        "get into a car accident",
        "자동차 사고가 나다"
      ],
      [
        "not used to it",
        "익숙하지 않다"
      ]
    ]
  },
  {
    "id": "okinawa-lesson",
    "topic": "International Travel",
    "label": "해외 여행 · 오키나와",
    "art": "In Okinawa.",
    "title": "A lesson from the road",
    "subtitle": "오키나와 여행에서 무엇을 배웠나요?",
    "question": "What did you learn from your Okinawa trip?",
    "questionKo": "오키나와 여행에서 무엇을 배웠나요?",
    "paragraphs": [
      {
        "ko": "예전에는 해외에서도 운전이 어렵지 않을 거라고 생각했어요.",
        "en": "I used to think driving abroad would not be very difficult."
      },
      {
        "ko": "하지만 일본은 운전석과 차선 방향이 달라 생각보다 어려웠어요.",
        "en": "But in Japan, the steering wheel and driving direction were different, so it was harder than expected."
      },
      {
        "ko": "결국 렌터카 사고를 겪으면서 큰 교훈을 얻었어요.",
        "en": "I ended up having a rental-car accident, and it taught me an important lesson."
      },
      {
        "ko": "이제는 해외에서 차를 빌리기 전에 현지의 교통 규칙을 꼼꼼히 확인하려고 해요.",
        "en": "Now I try to check local traffic rules carefully before renting a car abroad."
      }
    ],
    "expressions": [
      [
        "drive on the left",
        "좌측통행하다"
      ],
      [
        "get into a car accident",
        "자동차 사고가 나다"
      ],
      [
        "not used to it",
        "익숙하지 않다"
      ]
    ]
  },
  {
    "id": "movies-preference",
    "topic": "Movies",
    "label": "영화 감상",
    "art": "Movie night.",
    "title": "An easy movie night",
    "subtitle": "어떤 영화를 좋아하나요?",
    "question": "What kinds of movies do you enjoy?",
    "questionKo": "어떤 영화를 좋아하나요?",
    "paragraphs": [
      {
        "ko": "저는 액션 영화와 SF 영화를 좋아해요.",
        "en": "I really enjoy action movies and science fiction movies."
      },
      {
        "ko": "퇴근 후에는 영화관보다 집에서 영화를 보는 편이에요.",
        "en": "After work, I usually prefer watching movies at home instead of going to a theater."
      },
      {
        "ko": "주말에는 가족과 함께 음식을 시켜서 영화를 보기도 해요.",
        "en": "On weekends, I sometimes order food and watch movies with my family."
      },
      {
        "ko": "영화는 업무를 잊고 가족과 즐거운 시간을 보낼 수 있게 해줘요.",
        "en": "Movies help me forget about work and have a good time with my family."
      }
    ],
    "expressions": [
      [
        "action movies",
        "액션 영화"
      ],
      [
        "watch movies at home",
        "집에서 영화를 보다"
      ],
      [
        "spend time together",
        "함께 시간을 보내다"
      ]
    ]
  },
  {
    "id": "movies-then-now",
    "topic": "Movies",
    "label": "영화 감상",
    "art": "Movie night.",
    "title": "From theaters to streaming",
    "subtitle": "영화를 보는 방식은 어떻게 달라졌나요?",
    "question": "How have your movie habits changed?",
    "questionKo": "영화를 보는 방식은 어떻게 달라졌나요?",
    "paragraphs": [
      {
        "ko": "예전에는 친구들과 영화관에 자주 갔어요.",
        "en": "I used to go to the movie theater with my friends quite often."
      },
      {
        "ko": "큰 화면으로 보는 영화가 좋았어요.",
        "en": "I loved watching movies on a big screen."
      },
      {
        "ko": "이제는 가족도 있고 일이 바빠 집에서 스트리밍으로 많이 봐요.",
        "en": "These days, I have a family and a busy schedule, so I mostly watch movies through streaming services at home."
      },
      {
        "ko": "중간에 멈췄다가 나중에 다시 볼 수 있어서 편리해요.",
        "en": "It is convenient because I can pause a movie and continue watching it later."
      }
    ],
    "expressions": [
      [
        "action movies",
        "액션 영화"
      ],
      [
        "watch movies at home",
        "집에서 영화를 보다"
      ],
      [
        "spend time together",
        "함께 시간을 보내다"
      ]
    ]
  },
  {
    "id": "parks-favorite",
    "topic": "Parks",
    "label": "공원",
    "art": "At the park.",
    "title": "A peaceful park near home",
    "subtitle": "좋아하는 공원을 설명해 주세요.",
    "question": "Describe a park you like.",
    "questionKo": "좋아하는 공원을 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "날씨가 좋으면 동네 공원에 가는 걸 좋아해요.",
        "en": "I like visiting a park near my neighborhood when the weather is nice."
      },
      {
        "ko": "그곳에는 산책로와 나무, 쉴 수 있는 벤치가 있어요.",
        "en": "There are walking paths, trees, and benches where people can relax."
      },
      {
        "ko": "가족과 걸으면서 이야기를 하거나 신선한 공기를 즐겨요.",
        "en": "I walk with my family, talk about our day, and enjoy the fresh air."
      },
      {
        "ko": "조용하고 평화로운 분위기 덕분에 바쁜 일상에서 잠시 벗어날 수 있어요.",
        "en": "The quiet atmosphere helps me take a break from my busy daily routine."
      }
    ],
    "expressions": [
      [
        "take a walk",
        "산책하다"
      ],
      [
        "fresh air",
        "신선한 공기"
      ],
      [
        "spend quality time",
        "뜻깊은 시간을 보내다"
      ]
    ]
  },
  {
    "id": "parks-memory",
    "topic": "Parks",
    "label": "공원",
    "art": "At the park.",
    "title": "A simple spring day outside",
    "subtitle": "공원에서 기억에 남는 일을 말해 주세요.",
    "question": "Tell me about a memorable park visit.",
    "questionKo": "공원에서 기억에 남는 일을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "화창한 봄날 가족과 공원에 갔던 일이 기억나요.",
        "en": "I remember visiting a park with my family on a beautiful spring day."
      },
      {
        "ko": "꽃이 활짝 피었고 아들은 신나게 뛰어놀았어요.",
        "en": "The flowers were in bloom, and my son was excited to run around and play."
      },
      {
        "ko": "우리는 벤치에 앉아 간식을 먹고 사진도 찍었어요.",
        "en": "We sat on a bench, had some snacks, and took a few pictures."
      },
      {
        "ko": "특별한 행사는 아니었지만 함께 보낸 시간이 소중했어요.",
        "en": "It was nothing fancy, but spending time together made it special."
      }
    ],
    "expressions": [
      [
        "take a walk",
        "산책하다"
      ],
      [
        "fresh air",
        "신선한 공기"
      ],
      [
        "spend quality time",
        "뜻깊은 시간을 보내다"
      ]
    ]
  },
  {
    "id": "cafes-favorite",
    "topic": "Cafes",
    "label": "카페",
    "art": "Coffee break.",
    "title": "Coffee, a book, and quiet time",
    "subtitle": "좋아하는 카페를 소개해 주세요.",
    "question": "Describe a cafe you like.",
    "questionKo": "좋아하는 카페를 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "저는 조용하고 의자가 편한 카페를 좋아해요.",
        "en": "I like quiet cafes with comfortable seats."
      },
      {
        "ko": "커피를 마시며 책을 읽는 시간이 특히 좋아요.",
        "en": "I especially enjoy having a cup of coffee while reading a book."
      },
      {
        "ko": "큰 창문이 있으면 밖을 보면서 더 편히 쉴 수 있어요.",
        "en": "When a cafe has large windows, I can relax and enjoy the view."
      },
      {
        "ko": "저에게 카페는 커피를 마시는 곳을 넘어 쉬어갈 수 있는 공간이에요.",
        "en": "For me, a cafe is more than a place to drink coffee. It is a place to take a break."
      }
    ],
    "expressions": [
      [
        "grab a cup of coffee",
        "커피 한 잔을 마시다"
      ],
      [
        "relaxing atmosphere",
        "편안한 분위기"
      ],
      [
        "by the window",
        "창가에"
      ]
    ]
  },
  {
    "id": "cafes-memory",
    "topic": "Cafes",
    "label": "카페",
    "art": "Coffee break.",
    "title": "A traditional cafe in Gyeongju",
    "subtitle": "기억에 남는 카페 방문 경험을 말해 주세요.",
    "question": "Tell me about a memorable cafe visit.",
    "questionKo": "기억에 남는 카페 방문 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "경주 황리단길에서 전통 한옥 느낌의 카페를 발견했던 일이 기억나요.",
        "en": "I remember finding a cafe in a traditional Korean-style building in Hwangnidan-gil, Gyeongju."
      },
      {
        "ko": "분위기가 좋아서 들어가 커피를 주문했어요.",
        "en": "The atmosphere looked nice, so I went inside and ordered coffee."
      },
      {
        "ko": "창가에 앉아 전통 건물과 현대적인 인테리어를 감상했어요.",
        "en": "I sat by the window and enjoyed the mix of traditional architecture and modern design."
      },
      {
        "ko": "잠시 쉬었던 그 시간이 여행의 좋은 추억이 되었어요.",
        "en": "That short break became one of my favorite travel memories."
      }
    ],
    "expressions": [
      [
        "grab a cup of coffee",
        "커피 한 잔을 마시다"
      ],
      [
        "relaxing atmosphere",
        "편안한 분위기"
      ],
      [
        "by the window",
        "창가에"
      ]
    ]
  },
  {
    "id": "museums-like",
    "topic": "Museums",
    "label": "박물관",
    "art": "At the museum.",
    "title": "Why I like museums",
    "subtitle": "박물관 방문을 좋아하나요?",
    "question": "Do you enjoy visiting museums?",
    "questionKo": "박물관 방문을 좋아하나요?",
    "paragraphs": [
      {
        "ko": "저는 역사와 기술에 관심이 많아서 박물관을 좋아해요.",
        "en": "I enjoy museums because I am interested in history and technology."
      },
      {
        "ko": "옛 유물을 보며 과거 사람들의 생활을 배울 수 있어요.",
        "en": "I can learn how people lived in the past by looking at historical artifacts."
      },
      {
        "ko": "책에서 읽는 것보다 실제 물건을 보면 더 흥미로워요.",
        "en": "Seeing real objects feels more interesting than just reading about them."
      },
      {
        "ko": "가족과 함께 배우고 시간을 보낼 수 있다는 점도 좋아요.",
        "en": "I also like that my family can learn and spend time together."
      }
    ],
    "expressions": [
      [
        "learn something new",
        "새로운 것을 배우다"
      ],
      [
        "historical artifacts",
        "역사 유물"
      ],
      [
        "educational and enjoyable",
        "교육적이면서 즐거운"
      ]
    ]
  },
  {
    "id": "museums-gyeongju",
    "topic": "Museums",
    "label": "박물관",
    "art": "At the museum.",
    "title": "Learning about Silla history",
    "subtitle": "방문했던 박물관에 대해 말해 주세요.",
    "question": "Tell me about a museum you visited.",
    "questionKo": "방문했던 박물관에 대해 말해 주세요.",
    "paragraphs": [
      {
        "ko": "경주국립박물관 같은 곳에서는 신라의 역사를 자세히 배울 수 있어요.",
        "en": "At a place like the Gyeongju National Museum, you can learn about the history of Silla."
      },
      {
        "ko": "그곳에는 오래된 유물과 흥미로운 이야기가 많이 있어요.",
        "en": "There are many old artifacts and interesting stories."
      },
      {
        "ko": "특히 유물 뒤에 숨겨진 역사적 이야기가 인상적이에요.",
        "en": "I find the stories behind historical objects especially impressive."
      },
      {
        "ko": "박물관은 재미있게 과거를 배우기 좋은 곳이라고 생각해요.",
        "en": "I think museums are great places to learn about the past in an enjoyable way."
      }
    ],
    "expressions": [
      [
        "learn something new",
        "새로운 것을 배우다"
      ],
      [
        "historical artifacts",
        "역사 유물"
      ],
      [
        "educational and enjoyable",
        "교육적이면서 즐거운"
      ]
    ]
  },
  {
    "id": "music-habits",
    "topic": "Music",
    "label": "음악",
    "art": "Listening to music.",
    "title": "Music on the commute",
    "subtitle": "어떤 음악을 즐겨 듣나요?",
    "question": "What kind of music do you enjoy?",
    "questionKo": "어떤 음악을 즐겨 듣나요?",
    "paragraphs": [
      {
        "ko": "저는 한국 대중음악과 편안한 노래를 좋아해요.",
        "en": "I enjoy Korean pop music and relaxing songs."
      },
      {
        "ko": "보통 셔틀버스로 출퇴근하거나 집에서 쉴 때 음악을 들어요.",
        "en": "I usually listen to music on the company shuttle bus or while relaxing at home."
      },
      {
        "ko": "피곤할 때는 신나는 음악을, 스트레스를 받을 때는 잔잔한 음악을 선택해요.",
        "en": "When I am tired, I choose upbeat songs. When I am stressed, I prefer calmer music."
      },
      {
        "ko": "음악은 기분을 바꾸고 하루를 조금 더 즐겁게 만들어줘요.",
        "en": "Music can change my mood and make my day more enjoyable."
      }
    ],
    "expressions": [
      [
        "change my mood",
        "기분을 바꾸다"
      ],
      [
        "sing along",
        "노래를 따라 부르다"
      ],
      [
        "upbeat songs",
        "신나는 노래"
      ]
    ]
  },
  {
    "id": "music-roadtrip",
    "topic": "Music",
    "label": "음악",
    "art": "Listening to music.",
    "title": "Singing through a traffic jam",
    "subtitle": "음악과 관련된 기억에 남는 경험을 말해 주세요.",
    "question": "Tell me about a memorable music-related experience.",
    "questionKo": "음악과 관련된 기억에 남는 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "가족과 차를 타고 여행 가던 중 교통 체증에 걸린 일이 있어요.",
        "en": "I remember getting stuck in traffic during a road trip with my family."
      },
      {
        "ko": "모두 지루해해서 좋아하는 음악을 틀었어요.",
        "en": "Everyone was bored, so I played some of our favorite songs."
      },
      {
        "ko": "아들이 노래를 따라 부르기 시작했고 우리는 함께 웃었어요.",
        "en": "My son started singing along, and we all laughed together."
      },
      {
        "ko": "막혀 있던 길도 음악 덕분에 즐거운 추억이 되었어요.",
        "en": "Even though we were stuck in traffic, music turned the moment into a good memory."
      }
    ],
    "expressions": [
      [
        "change my mood",
        "기분을 바꾸다"
      ],
      [
        "sing along",
        "노래를 따라 부르다"
      ],
      [
        "upbeat songs",
        "신나는 노래"
      ]
    ]
  },
  {
    "id": "news-interests",
    "topic": "News",
    "label": "신문 · 뉴스",
    "art": "In the news.",
    "title": "Economics in my daily news",
    "subtitle": "어떤 뉴스를 즐겨 읽나요?",
    "question": "What news do you like to read?",
    "questionKo": "어떤 뉴스를 즐겨 읽나요?",
    "paragraphs": [
      {
        "ko": "저는 경제와 기술 뉴스를 주로 읽어요.",
        "en": "I mostly read news about economics and technology."
      },
      {
        "ko": "특히 주식시장, 금리, AI와 반도체 산업에 관심이 있어요.",
        "en": "I am especially interested in the stock market, interest rates, AI, and semiconductors."
      },
      {
        "ko": "출근길에 휴대전화로 뉴스를 확인하는 편이에요.",
        "en": "I usually check the news on my smartphone during my commute."
      },
      {
        "ko": "세상에서 일어나는 일을 이해하는 데 도움이 돼요.",
        "en": "Reading the news helps me understand what is happening around the world."
      }
    ],
    "expressions": [
      [
        "financial news",
        "경제 뉴스"
      ],
      [
        "compare different sources",
        "여러 출처를 비교하다"
      ],
      [
        "daily routine",
        "일상 습관"
      ]
    ]
  },
  {
    "id": "news-changes",
    "topic": "News",
    "label": "신문 · 뉴스",
    "art": "In the news.",
    "title": "From printed papers to the phone",
    "subtitle": "뉴스를 보는 방식은 어떻게 변했나요?",
    "question": "How has reading the news changed?",
    "questionKo": "뉴스를 보는 방식은 어떻게 변했나요?",
    "paragraphs": [
      {
        "ko": "과거에는 많은 사람이 종이신문이나 TV로 뉴스를 봤어요.",
        "en": "In the past, many people read printed newspapers or watched the news on TV."
      },
      {
        "ko": "요즘 저는 스마트폰으로 언제 어디서나 기사를 읽어요.",
        "en": "These days, I read articles on my smartphone anytime and anywhere."
      },
      {
        "ko": "여러 관점을 비교하기 쉽지만 잘못된 정보도 있을 수 있어요.",
        "en": "It is easy to compare different opinions, but some information can be unreliable."
      },
      {
        "ko": "그래서 중요한 뉴스는 여러 출처를 확인하려고 해요.",
        "en": "That is why I try to check different sources for important news."
      }
    ],
    "expressions": [
      [
        "financial news",
        "경제 뉴스"
      ],
      [
        "compare different sources",
        "여러 출처를 비교하다"
      ],
      [
        "daily routine",
        "일상 습관"
      ]
    ]
  },
  {
    "id": "walking-health",
    "topic": "Walking",
    "label": "걷기",
    "art": "On a walk.",
    "title": "Walking as everyday exercise",
    "subtitle": "건강을 위해 어떤 운동을 하나요?",
    "question": "What do you do to stay healthy?",
    "questionKo": "건강을 위해 어떤 운동을 하나요?",
    "paragraphs": [
      {
        "ko": "일이 바빠서 헬스장에 늘 갈 수는 없어요.",
        "en": "I cannot always go to the gym because of my busy work schedule."
      },
      {
        "ko": "그래서 저녁이나 주말에 동네를 걷는 편이에요.",
        "en": "So I usually take a walk around my neighborhood after dinner or on weekends."
      },
      {
        "ko": "가족과 이야기하면서 걸을 때도 있어요.",
        "en": "Sometimes, I walk with my family and talk about our day."
      },
      {
        "ko": "특별한 장비 없이 운동하고 생각을 정리할 수 있어 좋아요.",
        "en": "I like walking because I can exercise and clear my mind without any special equipment."
      }
    ],
    "expressions": [
      [
        "clear my mind",
        "생각을 정리하다"
      ],
      [
        "stay active",
        "활동적으로 지내다"
      ],
      [
        "enjoy the scenery",
        "풍경을 감상하다"
      ]
    ]
  },
  {
    "id": "walking-gyeongju",
    "topic": "Walking",
    "label": "걷기",
    "art": "On a walk.",
    "title": "A relaxing walk in Gyeongju",
    "subtitle": "기억에 남는 산책을 소개해 주세요.",
    "question": "Tell me about a memorable walk.",
    "questionKo": "기억에 남는 산책을 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "가장 기억에 남는 산책 중 하나는 경주 여행에서 했던 산책이에요.",
        "en": "One of my most memorable walks was during my trip to Gyeongju."
      },
      {
        "ko": "날씨가 좋았고 주변에 전통 건물과 유적지가 많았어요.",
        "en": "The weather was nice, and there were many traditional buildings and historical sites."
      },
      {
        "ko": "사진을 찍으며 천천히 걸었어요.",
        "en": "I walked slowly and took some pictures."
      },
      {
        "ko": "서두르지 않고 풍경을 즐길 수 있어서 정말 상쾌했어요.",
        "en": "I felt refreshed because I could enjoy the scenery without rushing."
      }
    ],
    "expressions": [
      [
        "clear my mind",
        "생각을 정리하다"
      ],
      [
        "stay active",
        "활동적으로 지내다"
      ],
      [
        "enjoy the scenery",
        "풍경을 감상하다"
      ]
    ]
  },
  {
    "id": "hiking-hobby",
    "topic": "Hiking",
    "label": "하이킹 · 등산",
    "art": "On the trail.",
    "title": "Why I like hiking",
    "subtitle": "등산 취미를 소개해 주세요.",
    "question": "Tell me about your hiking hobby.",
    "questionKo": "등산 취미를 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "날씨가 좋으면 등산하는 걸 좋아해요.",
        "en": "I enjoy hiking, especially when the weather is nice."
      },
      {
        "ko": "사무실에서 시간을 많이 보내기 때문에 자연 속에서 공기를 마시는 게 좋아요.",
        "en": "Since I spend a lot of time indoors at work, I love getting fresh air in nature."
      },
      {
        "ko": "오르막길은 힘들지만 정상에서 보는 풍경은 정말 멋져요.",
        "en": "Climbing can be tiring, but the view from the top is amazing."
      },
      {
        "ko": "정상에 도착했을 때 성취감을 느끼고 스트레스도 풀려요.",
        "en": "When I reach the top, I feel a sense of achievement and less stressed."
      }
    ],
    "expressions": [
      [
        "reach the top",
        "정상에 도착하다"
      ],
      [
        "steeper than expected",
        "예상보다 가파른"
      ],
      [
        "worth the effort",
        "노력할 만한 가치가 있는"
      ]
    ]
  },
  {
    "id": "hiking-memory",
    "topic": "Hiking",
    "label": "하이킹 · 등산",
    "art": "On the trail.",
    "title": "The climb I almost gave up",
    "subtitle": "기억에 남는 등산 경험을 말해 주세요.",
    "question": "Tell me about a memorable hiking experience.",
    "questionKo": "기억에 남는 등산 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "어느 가을날 등산을 갔는데 단풍이 아름다웠어요.",
        "en": "I went hiking on an autumn day, and the leaves were beautiful."
      },
      {
        "ko": "처음에는 쉬울 거라 생각했지만 길이 예상보다 가팔랐어요.",
        "en": "At first, I thought it would be easy, but the trail was steeper than I expected."
      },
      {
        "ko": "너무 힘들어 포기할 뻔했지만 끝까지 걸었어요.",
        "en": "I got so tired that I almost gave up, but I kept going."
      },
      {
        "ko": "마침내 정상에서 멋진 풍경을 보고 정말 뿌듯했어요.",
        "en": "When I finally reached the top, the view was amazing, and I felt really proud."
      }
    ],
    "expressions": [
      [
        "reach the top",
        "정상에 도착하다"
      ],
      [
        "steeper than expected",
        "예상보다 가파른"
      ],
      [
        "worth the effort",
        "노력할 만한 가치가 있는"
      ]
    ]
  },
  {
    "id": "hiking-preparation",
    "topic": "Hiking",
    "label": "하이킹 · 등산",
    "art": "On the trail.",
    "title": "Getting ready for the trail",
    "subtitle": "등산 전에 무엇을 준비하나요?",
    "question": "What do you prepare before hiking?",
    "questionKo": "등산 전에 무엇을 준비하나요?",
    "paragraphs": [
      {
        "ko": "등산하기 전에는 일기예보부터 확인해요.",
        "en": "Before hiking, I check the weather forecast first."
      },
      {
        "ko": "물과 간식, 편한 등산화를 준비하고 휴대전화를 충전해요.",
        "en": "I prepare water, snacks, comfortable hiking shoes, and a fully charged phone."
      },
      {
        "ko": "저는 무리하지 않으려고 쉬운 길이나 중간 난도의 코스를 선택해요.",
        "en": "I choose easy or moderate trails because I do not want to push myself too hard."
      },
      {
        "ko": "미리 경로를 찾아보면 더 안전하고 편하게 다녀올 수 있어요.",
        "en": "Checking the route in advance makes the hike safer and more enjoyable."
      }
    ],
    "expressions": [
      [
        "reach the top",
        "정상에 도착하다"
      ],
      [
        "steeper than expected",
        "예상보다 가파른"
      ],
      [
        "worth the effort",
        "노력할 만한 가치가 있는"
      ]
    ]
  },
  {
    "id": "hiking-changes",
    "topic": "Hiking",
    "label": "하이킹 · 등산",
    "art": "On the trail.",
    "title": "Hiking more slowly than before",
    "subtitle": "등산하는 방식이 어떻게 달라졌나요?",
    "question": "How has your approach to hiking changed?",
    "questionKo": "등산하는 방식이 어떻게 달라졌나요?",
    "paragraphs": [
      {
        "ko": "젊었을 때는 정상에 빨리 올라가고 싶었어요.",
        "en": "When I was younger, I just wanted to reach the top quickly."
      },
      {
        "ko": "요즘에는 서두르지 않고 자연을 즐기는 편이에요.",
        "en": "These days, I prefer taking my time and enjoying nature."
      },
      {
        "ko": "날씨와 안전도 훨씬 신경 써요.",
        "en": "I also pay much more attention to safety and weather conditions."
      },
      {
        "ko": "이제 등산은 기록을 세우는 것보다 쉬고 재충전하는 시간이 됐어요.",
        "en": "Now hiking is more about relaxing and recharging than setting a record."
      }
    ],
    "expressions": [
      [
        "reach the top",
        "정상에 도착하다"
      ],
      [
        "steeper than expected",
        "예상보다 가파른"
      ],
      [
        "worth the effort",
        "노력할 만한 가치가 있는"
      ]
    ]
  },
  {
    "id": "staycation-routine",
    "topic": "Staycation",
    "label": "집에서 보내는 휴가",
    "art": "A day off.",
    "title": "A relaxing vacation at home",
    "subtitle": "집에서 휴가를 보낼 때 무엇을 하나요?",
    "question": "What do you do when you stay home on vacation?",
    "questionKo": "집에서 휴가를 보낼 때 무엇을 하나요?",
    "paragraphs": [
      {
        "ko": "가끔은 여행보다 집에서 쉬는 휴가가 좋아요.",
        "en": "Sometimes, I prefer staying home to traveling during my vacation."
      },
      {
        "ko": "늦잠을 자고 가족과 아침을 먹으며 여유롭게 시작해요.",
        "en": "I sleep in and start the day with a relaxed breakfast with my family."
      },
      {
        "ko": "책을 읽거나 영화를 보고 날씨가 좋으면 산책해요.",
        "en": "I read books, watch movies, or go for a walk when the weather is nice."
      },
      {
        "ko": "일정과 교통을 걱정하지 않고 재충전할 수 있는 것이 가장 좋아요.",
        "en": "The best part is that I can recharge without worrying about schedules or traffic."
      }
    ],
    "expressions": [
      [
        "sleep in",
        "늦잠 자다"
      ],
      [
        "recharge my batteries",
        "재충전하다"
      ],
      [
        "stay home and relax",
        "집에서 쉬다"
      ]
    ]
  },
  {
    "id": "staycation-memory",
    "topic": "Staycation",
    "label": "집에서 보내는 휴가",
    "art": "A day off.",
    "title": "A vacation without traveling",
    "subtitle": "기억에 남는 집에서의 휴가를 설명해 주세요.",
    "question": "Tell me about a memorable staycation.",
    "questionKo": "기억에 남는 집에서의 휴가를 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "일이 너무 바빠 지쳐서 여행 대신 집에서 쉬기로 했던 적이 있어요.",
        "en": "I once decided to stay home instead of traveling because I was exhausted from work."
      },
      {
        "ko": "첫날은 늦잠을 자고 영화를 봤어요.",
        "en": "On the first day, I slept in and watched movies."
      },
      {
        "ko": "다음 날에는 책을 읽고 가족과 산책한 뒤 맛있는 음식을 먹었어요.",
        "en": "The next day, I read a book, went for a walk with my family, and enjoyed some good food."
      },
      {
        "ko": "화려하지 않았지만 휴가가 끝날 때 훨씬 상쾌했어요.",
        "en": "It was nothing fancy, but I felt much more refreshed by the end of the vacation."
      }
    ],
    "expressions": [
      [
        "sleep in",
        "늦잠 자다"
      ],
      [
        "recharge my batteries",
        "재충전하다"
      ],
      [
        "stay home and relax",
        "집에서 쉬다"
      ]
    ]
  },
  {
    "id": "weather-korea",
    "topic": "Weather",
    "label": "날씨",
    "art": "Four seasons.",
    "title": "Four seasons in Korea",
    "subtitle": "한국의 날씨를 설명해 주세요.",
    "question": "Describe the weather in your country.",
    "questionKo": "한국의 날씨를 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "한국에는 봄, 여름, 가을, 겨울이 뚜렷하게 있어요.",
        "en": "Korea has four distinct seasons: spring, summer, fall, and winter."
      },
      {
        "ko": "여름은 덥고 습하며 겨울은 매우 추워요.",
        "en": "Summer is hot and humid, while winter is very cold."
      },
      {
        "ko": "저는 날씨가 선선하고 단풍이 아름다운 가을을 가장 좋아해요.",
        "en": "I like fall the most because the weather is cool and the leaves are beautiful."
      },
      {
        "ko": "가을에는 가족과 산책이나 등산을 즐기기 좋아요.",
        "en": "Fall is a great time to walk or hike with my family."
      }
    ],
    "expressions": [
      [
        "four distinct seasons",
        "뚜렷한 사계절"
      ],
      [
        "weather forecast",
        "일기예보"
      ],
      [
        "started raining heavily",
        "비가 세차게 내리기 시작했다"
      ]
    ]
  },
  {
    "id": "weather-problem",
    "topic": "Weather",
    "label": "날씨",
    "art": "Four seasons.",
    "title": "When rain ruined my plans",
    "subtitle": "날씨 때문에 계획이 바뀐 경험을 말해 주세요.",
    "question": "Tell me about a weather-related problem.",
    "questionKo": "날씨 때문에 계획이 바뀐 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "등산을 계획한 날 처음에는 날씨가 맑았어요.",
        "en": "I planned to go hiking on a day that started out sunny."
      },
      {
        "ko": "그런데 갑자기 먹구름이 끼고 비가 세차게 내렸어요.",
        "en": "But dark clouds suddenly appeared, and it started raining heavily."
      },
      {
        "ko": "우산도 없어서 등산 대신 근처 카페로 갔어요.",
        "en": "I did not have an umbrella, so I went to a nearby cafe instead of hiking."
      },
      {
        "ko": "아쉽긴 했지만 커피를 마시며 쉴 수 있어서 나쁘지 않았어요.",
        "en": "I was disappointed, but having coffee and relaxing was not so bad."
      }
    ],
    "expressions": [
      [
        "four distinct seasons",
        "뚜렷한 사계절"
      ],
      [
        "weather forecast",
        "일기예보"
      ],
      [
        "started raining heavily",
        "비가 세차게 내리기 시작했다"
      ]
    ]
  },
  {
    "id": "transport-korea",
    "topic": "Transportation",
    "label": "교통 · 출퇴근",
    "art": "On the road.",
    "title": "Getting around Seoul",
    "subtitle": "한국의 대중교통을 소개해 주세요.",
    "question": "Tell me about transportation in Korea.",
    "questionKo": "한국의 대중교통을 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "특히 서울의 대중교통은 편리해요.",
        "en": "Public transportation is very convenient in Korea, especially in Seoul."
      },
      {
        "ko": "지하철, 버스, 택시를 이용해 차 없이도 이동할 수 있어요.",
        "en": "People can get around by subway, bus, or taxi without a car."
      },
      {
        "ko": "저는 회사 셔틀버스를 이용하면 운전하지 않고 쉬거나 음악을 들을 수 있어요.",
        "en": "When I take the company shuttle bus, I can relax or listen to music instead of driving."
      },
      {
        "ko": "그래서 집 근처에 셔틀 정류장이 있는 것이 중요해요.",
        "en": "That is why having a shuttle bus stop near home is important to me."
      }
    ],
    "expressions": [
      [
        "during rush hour",
        "출퇴근 혼잡 시간에"
      ],
      [
        "get around",
        "이동하다"
      ],
      [
        "shuttle bus stop",
        "셔틀버스 정류장"
      ]
    ]
  },
  {
    "id": "transport-accident",
    "topic": "Transportation",
    "label": "교통 · 출퇴근",
    "art": "On the road.",
    "title": "Driving trouble in Okinawa",
    "subtitle": "교통과 관련된 문제를 설명해 주세요.",
    "question": "Tell me about a transportation problem.",
    "questionKo": "교통과 관련된 문제를 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "오키나와에서 렌터카를 운전할 때 교통 문제를 겪었어요.",
        "en": "I had a transportation problem while driving a rental car in Okinawa."
      },
      {
        "ko": "일본은 좌측통행이고 운전대도 반대쪽에 있어서 낯설었어요.",
        "en": "Japan has left-side driving, and the steering wheel is on the opposite side, so it felt unfamiliar."
      },
      {
        "ko": "결국 사고가 나서 매우 놀랐어요.",
        "en": "Unfortunately, I got into an accident and was really shocked."
      },
      {
        "ko": "그 일 이후에는 해외 운전 규칙을 더 잘 확인해요.",
        "en": "Since then, I have checked local driving rules more carefully."
      }
    ],
    "expressions": [
      [
        "during rush hour",
        "출퇴근 혼잡 시간에"
      ],
      [
        "get around",
        "이동하다"
      ],
      [
        "shuttle bus stop",
        "셔틀버스 정류장"
      ]
    ]
  },
  {
    "id": "smartphone-use",
    "topic": "Smartphones",
    "label": "스마트폰",
    "art": "On my phone.",
    "title": "A phone for everything",
    "subtitle": "스마트폰을 어떻게 사용하나요?",
    "question": "How do you use your smartphone?",
    "questionKo": "스마트폰을 어떻게 사용하나요?",
    "paragraphs": [
      {
        "ko": "스마트폰은 매일 쓰는 필수품이에요.",
        "en": "My smartphone is something I use every day."
      },
      {
        "ko": "뉴스를 보고 가족과 연락하고 전자책도 읽어요.",
        "en": "I read the news, keep in touch with my family, and read e-books on it."
      },
      {
        "ko": "출퇴근 셔틀에서는 음악을 듣거나 경제 뉴스를 확인해요.",
        "en": "On the shuttle bus, I listen to music or check financial news."
      },
      {
        "ko": "작은 기기 하나로 많은 일을 할 수 있어 정말 편리해요.",
        "en": "It is so convenient that I can do many things with one small device."
      }
    ],
    "expressions": [
      [
        "keep in touch",
        "연락하며 지내다"
      ],
      [
        "stopped responding",
        "반응하지 않게 되었다"
      ],
      [
        "back up important data",
        "중요 자료를 백업하다"
      ]
    ]
  },
  {
    "id": "smartphone-problem",
    "topic": "Smartphones",
    "label": "스마트폰",
    "art": "On my phone.",
    "title": "A phone that froze",
    "subtitle": "스마트폰 문제를 겪은 경험을 설명해 주세요.",
    "question": "Tell me about a smartphone problem you had.",
    "questionKo": "스마트폰 문제를 겪은 경험을 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "어느 날 휴대전화 화면이 갑자기 반응하지 않았어요.",
        "en": "One day, my smartphone suddenly stopped responding."
      },
      {
        "ko": "화면을 눌러도 아무 변화가 없어서 답답했어요.",
        "en": "Nothing happened when I touched the screen, so I felt frustrated."
      },
      {
        "ko": "인터넷에서 해결 방법을 찾고 기기를 다시 시작했어요.",
        "en": "I searched online for a solution and restarted the device."
      },
      {
        "ko": "다행히 다시 작동했고 이후에는 중요한 자료를 백업하려고 해요.",
        "en": "Luckily, it worked again. Since then, I have tried to back up my important data."
      }
    ],
    "expressions": [
      [
        "keep in touch",
        "연락하며 지내다"
      ],
      [
        "stopped responding",
        "반응하지 않게 되었다"
      ],
      [
        "back up important data",
        "중요 자료를 백업하다"
      ]
    ]
  },
  {
    "id": "tech-change",
    "topic": "Technology",
    "label": "인터넷 · 기술",
    "art": "Technology at work.",
    "title": "How technology changes my life",
    "subtitle": "기술이 일상을 어떻게 바꾸었나요?",
    "question": "How has technology changed your life?",
    "questionKo": "기술이 일상을 어떻게 바꾸었나요?",
    "paragraphs": [
      {
        "ko": "기술 덕분에 정보를 찾는 방식이 크게 달라졌어요.",
        "en": "Technology has changed how I find information."
      },
      {
        "ko": "과거에는 책이나 컴퓨터를 찾아야 했지만 이제는 스마트폰으로 바로 검색해요.",
        "en": "In the past, I had to use books or a computer, but now I can search on my phone."
      },
      {
        "ko": "AI 도구로 어려운 개념을 배우거나 생각을 정리하기도 해요.",
        "en": "I also use AI tools to learn difficult topics and organize my thoughts."
      },
      {
        "ko": "화면을 너무 오래 보는 단점도 있지만 전체적으로 편리해졌어요.",
        "en": "There are downsides, like too much screen time, but overall life has become more convenient."
      }
    ],
    "expressions": [
      [
        "artificial intelligence",
        "인공지능"
      ],
      [
        "double-check information",
        "정보를 재확인하다"
      ],
      [
        "save time",
        "시간을 절약하다"
      ]
    ]
  },
  {
    "id": "tech-ai",
    "topic": "Technology",
    "label": "인터넷 · 기술",
    "art": "Technology at work.",
    "title": "AI as a useful tool",
    "subtitle": "유용한 기술 하나를 소개해 주세요.",
    "question": "Tell me about useful technology.",
    "questionKo": "유용한 기술 하나를 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "저에게 가장 유용한 기술 중 하나는 인공지능이에요.",
        "en": "One of the most useful technologies for me is artificial intelligence."
      },
      {
        "ko": "저는 기술 분야에서 일해서 AI에 관심이 많아요.",
        "en": "I work in technology, so I am very interested in AI."
      },
      {
        "ko": "AI는 복잡한 자료를 쉽게 설명해주고 시간을 절약해줘요.",
        "en": "AI tools can explain complicated information in simpler words and save me time."
      },
      {
        "ko": "항상 정확한 것은 아니어서 중요한 내용은 다시 확인해요.",
        "en": "AI is not always correct, so I double-check important information."
      }
    ],
    "expressions": [
      [
        "artificial intelligence",
        "인공지능"
      ],
      [
        "double-check information",
        "정보를 재확인하다"
      ],
      [
        "save time",
        "시간을 절약하다"
      ]
    ]
  },
  {
    "id": "banking-mobile",
    "topic": "Banking",
    "label": "은행",
    "art": "Mobile banking.",
    "title": "Banking without going to a bank",
    "subtitle": "평소 은행을 어떻게 이용하나요?",
    "question": "How do you usually use banks?",
    "questionKo": "평소 은행을 어떻게 이용하나요?",
    "paragraphs": [
      {
        "ko": "요즘에는 대부분 모바일 뱅킹을 이용해요.",
        "en": "These days, I mostly use mobile banking."
      },
      {
        "ko": "휴대전화로 송금하고 잔액을 확인하고 요금을 낼 수 있어요.",
        "en": "I can transfer money, check my balance, and pay bills on my phone."
      },
      {
        "ko": "은행에 가서 줄을 설 필요가 없어 편리해요.",
        "en": "It is convenient because I do not have to visit a bank and wait in line."
      },
      {
        "ko": "언제 어디서든 금융 업무를 볼 수 있는 점이 가장 좋아요.",
        "en": "What I like most is being able to handle banking tasks almost anytime and anywhere."
      }
    ],
    "expressions": [
      [
        "transfer money",
        "송금하다"
      ],
      [
        "account balance",
        "계좌 잔액"
      ],
      [
        "error message",
        "오류 메시지"
      ]
    ]
  },
  {
    "id": "banking-problem",
    "topic": "Banking",
    "label": "은행",
    "art": "Mobile banking.",
    "title": "A failed bank transfer",
    "subtitle": "은행 업무에서 겪은 문제를 말해 주세요.",
    "question": "Tell me about a banking problem.",
    "questionKo": "은행 업무에서 겪은 문제를 말해 주세요.",
    "paragraphs": [
      {
        "ko": "모바일 뱅킹으로 송금하려는데 앱에 오류가 난 적이 있어요.",
        "en": "I once tried to transfer money through a banking app, but it kept showing an error."
      },
      {
        "ko": "급한 송금이라 몇 번 다시 시도했지만 안 됐어요.",
        "en": "It was urgent, so I tried several times, but it did not work."
      },
      {
        "ko": "알고 보니 은행 시스템이 잠시 불안정했던 거예요.",
        "en": "It turned out that the banking system was temporarily unavailable."
      },
      {
        "ko": "조금 기다렸다가 다시 시도하니 송금이 돼서 안심했어요.",
        "en": "After waiting a while, I tried again and felt relieved when the transfer went through."
      }
    ],
    "expressions": [
      [
        "transfer money",
        "송금하다"
      ],
      [
        "account balance",
        "계좌 잔액"
      ],
      [
        "error message",
        "오류 메시지"
      ]
    ]
  },
  {
    "id": "health-habits",
    "topic": "Health",
    "label": "건강 · 병원",
    "art": "Staying healthy.",
    "title": "Staying healthy while working full-time",
    "subtitle": "평소 건강 관리를 어떻게 하나요?",
    "question": "How do you stay healthy?",
    "questionKo": "평소 건강 관리를 어떻게 하나요?",
    "paragraphs": [
      {
        "ko": "회사 일이 바빠도 건강을 유지하려고 노력해요.",
        "en": "I try to stay healthy even when work gets busy."
      },
      {
        "ko": "시간이 나면 동네를 걷거나 주말에 등산해요.",
        "en": "When I have time, I walk around my neighborhood or go hiking on weekends."
      },
      {
        "ko": "운동만큼 중요한 것은 충분히 자는 것이에요.",
        "en": "Getting enough sleep is just as important as exercise."
      },
      {
        "ko": "잘 쉬어야 일할 때 집중도 더 잘할 수 있어요.",
        "en": "When I get enough rest, I can concentrate better at work."
      }
    ],
    "expressions": [
      [
        "get plenty of rest",
        "충분히 쉬다"
      ],
      [
        "visit a clinic",
        "병원에 가다"
      ],
      [
        "take care of my health",
        "건강을 돌보다"
      ]
    ]
  },
  {
    "id": "health-clinic",
    "topic": "Health",
    "label": "건강 · 병원",
    "art": "Staying healthy.",
    "title": "A visit to the clinic",
    "subtitle": "몸이 아팠던 경험을 말해 주세요.",
    "question": "Tell me about a time you felt sick.",
    "questionKo": "몸이 아팠던 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "얼마 전 심한 감기에 걸려 열과 두통이 있었어요.",
        "en": "I remember getting a bad cold and having a fever and a headache."
      },
      {
        "ko": "처음에는 괜찮을 줄 알았는데 다음 날 더 아팠어요.",
        "en": "At first, I thought it was nothing, but I felt worse the next day."
      },
      {
        "ko": "근처 병원에 가서 진료를 받고 집에서 쉬었어요.",
        "en": "I visited a nearby clinic and rested at home afterward."
      },
      {
        "ko": "며칠 뒤 나아졌고 건강이 얼마나 중요한지 깨달았어요.",
        "en": "I felt better after a few days and realized how important my health is."
      }
    ],
    "expressions": [
      [
        "get plenty of rest",
        "충분히 쉬다"
      ],
      [
        "visit a clinic",
        "병원에 가다"
      ],
      [
        "take care of my health",
        "건강을 돌보다"
      ]
    ]
  },
  {
    "id": "recycling-korea",
    "topic": "Recycling",
    "label": "재활용 · 환경",
    "art": "Going green.",
    "title": "How recycling works in Korea",
    "subtitle": "한국의 분리수거를 설명해 주세요.",
    "question": "How do people recycle in Korea?",
    "questionKo": "한국의 분리수거를 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "한국에서는 종이, 플라스틱, 유리, 음식물 쓰레기를 분리해 버려요.",
        "en": "In Korea, we separate paper, plastic, glass, and food waste."
      },
      {
        "ko": "아파트에는 재활용품을 모아두는 지정된 장소가 있어요.",
        "en": "Apartment buildings usually have designated areas for recyclable materials."
      },
      {
        "ko": "바쁠 때는 조금 번거롭지만 환경을 위해 중요하다고 생각해요.",
        "en": "It can be annoying when I am busy, but I think it is important for the environment."
      },
      {
        "ko": "쇼핑할 때 재사용 가방을 쓰는 등 작은 노력도 해요.",
        "en": "I also try small things like using reusable shopping bags."
      }
    ],
    "expressions": [
      [
        "separate trash",
        "쓰레기를 분리하다"
      ],
      [
        "reusable bags",
        "재사용 가방"
      ],
      [
        "protect the environment",
        "환경을 보호하다"
      ]
    ]
  },
  {
    "id": "recycling-changes",
    "topic": "Recycling",
    "label": "재활용 · 환경",
    "art": "Going green.",
    "title": "A greener daily routine",
    "subtitle": "분리수거는 예전과 어떻게 달라졌나요?",
    "question": "How has recycling changed over time?",
    "questionKo": "분리수거는 예전과 어떻게 달라졌나요?",
    "paragraphs": [
      {
        "ko": "어릴 때는 재활용에 큰 관심이 없었어요.",
        "en": "When I was younger, I did not pay much attention to recycling."
      },
      {
        "ko": "요즘은 여러 종류의 쓰레기를 분리하는 일이 일상이 됐어요.",
        "en": "These days, separating different types of trash is part of our daily routine."
      },
      {
        "ko": "일회용품을 줄이고 텀블러를 사용하는 사람도 많아졌어요.",
        "en": "More people are trying to reduce disposable products and use tumblers."
      },
      {
        "ko": "조금 귀찮아도 환경을 지키는 좋은 변화라고 생각해요.",
        "en": "It takes some effort, but I think it is a positive change for the environment."
      }
    ],
    "expressions": [
      [
        "separate trash",
        "쓰레기를 분리하다"
      ],
      [
        "reusable bags",
        "재사용 가방"
      ],
      [
        "protect the environment",
        "환경을 보호하다"
      ]
    ]
  },
  {
    "id": "shopping-routine",
    "topic": "Shopping",
    "label": "쇼핑",
    "art": "Shopping online.",
    "title": "Why I shop online",
    "subtitle": "주로 어디서 쇼핑하나요?",
    "question": "Where do you usually shop?",
    "questionKo": "주로 어디서 쇼핑하나요?",
    "paragraphs": [
      {
        "ko": "요즘은 대부분 온라인으로 쇼핑해요.",
        "en": "These days, I do most of my shopping online."
      },
      {
        "ko": "일을 하다 보니 매장에 갈 시간이 많지 않아요.",
        "en": "Since I work full-time, I do not have much time to visit stores."
      },
      {
        "ko": "옷과 전자제품을 사고 가격과 후기를 꼼꼼히 비교해요.",
        "en": "I buy clothes and electronics, and I carefully compare prices and reviews."
      },
      {
        "ko": "직접 입어봐야 하는 옷은 백화점에 가기도 해요.",
        "en": "I sometimes visit department stores when I need to try clothes on."
      }
    ],
    "expressions": [
      [
        "compare prices",
        "가격을 비교하다"
      ],
      [
        "customer reviews",
        "구매 후기"
      ],
      [
        "exchange it for a larger size",
        "더 큰 사이즈로 교환하다"
      ]
    ]
  },
  {
    "id": "shopping-items",
    "topic": "Shopping",
    "label": "쇼핑",
    "art": "Shopping online.",
    "title": "Finding the right product",
    "subtitle": "주로 어떤 제품을 구매하나요?",
    "question": "What do you usually buy?",
    "questionKo": "주로 어떤 제품을 구매하나요?",
    "paragraphs": [
      {
        "ko": "저는 재킷, 시계, 전자기기 등에 관심이 있어요.",
        "en": "I am interested in jackets, watches, and electronic devices."
      },
      {
        "ko": "비싼 물건을 살 때는 시간을 들여 여러 브랜드를 비교해요.",
        "en": "When I buy something expensive, I spend time comparing different brands."
      },
      {
        "ko": "구매 후기를 읽고 관련 영상도 찾아봐요.",
        "en": "I read customer reviews and watch videos about the product."
      },
      {
        "ko": "가격 대비 품질이 좋은 물건을 찾으면 만족스러워요.",
        "en": "I feel satisfied when I find a product that offers good quality for the price."
      }
    ],
    "expressions": [
      [
        "compare prices",
        "가격을 비교하다"
      ],
      [
        "customer reviews",
        "구매 후기"
      ],
      [
        "exchange it for a larger size",
        "더 큰 사이즈로 교환하다"
      ]
    ]
  },
  {
    "id": "shopping-jacket",
    "topic": "Shopping",
    "label": "쇼핑",
    "art": "Shopping online.",
    "title": "The winter jacket I wanted",
    "subtitle": "기억에 남는 쇼핑 경험을 말해 주세요.",
    "question": "Tell me about a memorable shopping experience.",
    "questionKo": "기억에 남는 쇼핑 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "겨울에 입을 좋은 재킷을 오래 찾은 적이 있어요.",
        "en": "I once spent a long time looking for a good winter jacket."
      },
      {
        "ko": "온라인으로 여러 브랜드를 비교했지만 사진만으로 고르기 어려웠어요.",
        "en": "I compared many brands online, but choosing from pictures alone was difficult."
      },
      {
        "ko": "그래서 백화점에서 직접 입어보고 잘 맞는 제품을 찾았어요.",
        "en": "So I visited a department store, tried some jackets on, and found one that fit well."
      },
      {
        "ko": "조금 비쌌지만 만족스러운 구매였어요.",
        "en": "It was a little expensive, but I was happy with my purchase."
      }
    ],
    "expressions": [
      [
        "compare prices",
        "가격을 비교하다"
      ],
      [
        "customer reviews",
        "구매 후기"
      ],
      [
        "exchange it for a larger size",
        "더 큰 사이즈로 교환하다"
      ]
    ]
  },
  {
    "id": "shopping-exchange",
    "topic": "Shopping",
    "label": "쇼핑",
    "art": "Shopping online.",
    "title": "An online order in the wrong size",
    "subtitle": "쇼핑 중 발생한 문제와 해결 과정을 말해 주세요.",
    "question": "Tell me about a problem while shopping.",
    "questionKo": "쇼핑 중 발생한 문제와 해결 과정을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "온라인에서 재킷을 주문했는데 도착해보니 너무 작았어요.",
        "en": "I ordered a jacket online, but it was too small when it arrived."
      },
      {
        "ko": "기대했던 옷이라 실망했어요.",
        "en": "I was disappointed because I had been looking forward to wearing it."
      },
      {
        "ko": "고객센터에 연락해 상황을 설명하고 큰 사이즈로 교환했어요.",
        "en": "I contacted customer service, explained the problem, and exchanged it for a larger size."
      },
      {
        "ko": "그 이후로 온라인에서 옷을 살 때는 사이즈표를 꼭 다시 확인해요.",
        "en": "Since then, I always double-check the size chart when shopping for clothes online."
      }
    ],
    "expressions": [
      [
        "compare prices",
        "가격을 비교하다"
      ],
      [
        "customer reviews",
        "구매 후기"
      ],
      [
        "exchange it for a larger size",
        "더 큰 사이즈로 교환하다"
      ]
    ]
  },
  {
    "id": "shopping-changes",
    "topic": "Shopping",
    "label": "쇼핑",
    "art": "Shopping online.",
    "title": "Shopping then and now",
    "subtitle": "쇼핑 습관은 어떻게 변했나요?",
    "question": "How have your shopping habits changed?",
    "questionKo": "쇼핑 습관은 어떻게 변했나요?",
    "paragraphs": [
      {
        "ko": "예전에는 쇼핑몰이나 백화점에 직접 가는 걸 좋아했어요.",
        "en": "In the past, I liked going to shopping malls and department stores."
      },
      {
        "ko": "요즘은 일과 가족 때문에 시간이 부족해서 온라인으로 많이 사요.",
        "en": "These days, I shop online more often because I am busy with work and family."
      },
      {
        "ko": "스마트폰으로 가격과 후기를 쉽게 비교할 수 있어요.",
        "en": "I can easily compare prices and customer reviews on my smartphone."
      },
      {
        "ko": "나이가 들면서 디자인만큼 품질도 중요하게 생각하게 됐어요.",
        "en": "As I have gotten older, I have started caring more about quality as well as design."
      }
    ],
    "expressions": [
      [
        "compare prices",
        "가격을 비교하다"
      ],
      [
        "customer reviews",
        "구매 후기"
      ],
      [
        "exchange it for a larger size",
        "더 큰 사이즈로 교환하다"
      ]
    ]
  },
  {
    "id": "shopping-compare",
    "topic": "Shopping",
    "label": "쇼핑",
    "art": "Shopping online.",
    "title": "Online stores or physical shops",
    "subtitle": "온라인과 오프라인 쇼핑을 비교해 주세요.",
    "question": "Compare online and in-store shopping.",
    "questionKo": "온라인과 오프라인 쇼핑을 비교해 주세요.",
    "paragraphs": [
      {
        "ko": "온라인 쇼핑은 언제 어디서나 할 수 있어서 편리해요.",
        "en": "Online shopping is convenient because I can shop anytime and anywhere."
      },
      {
        "ko": "가격을 비교하기 쉽지만 물건을 직접 만져보거나 입어볼 수 없어요.",
        "en": "It is easy to compare prices, but I cannot touch or try on the products."
      },
      {
        "ko": "반대로 매장에서는 품질과 사이즈를 직접 확인할 수 있어요.",
        "en": "At a physical store, I can check the quality and size in person."
      },
      {
        "ko": "그래서 보통 온라인을 이용하지만 비싼 재킷은 매장에 가서 확인해요.",
        "en": "So I usually shop online, but I visit a store when buying an expensive jacket."
      }
    ],
    "expressions": [
      [
        "compare prices",
        "가격을 비교하다"
      ],
      [
        "customer reviews",
        "구매 후기"
      ],
      [
        "exchange it for a larger size",
        "더 큰 사이즈로 교환하다"
      ]
    ]
  },
  {
    "id": "shopping-family",
    "topic": "Shopping",
    "label": "쇼핑",
    "art": "Shopping online.",
    "title": "A weekend at the mall",
    "subtitle": "누구와 쇼핑을 가나요?",
    "question": "Who do you usually shop with?",
    "questionKo": "누구와 쇼핑을 가나요?",
    "paragraphs": [
      {
        "ko": "주말에는 아내와 아들과 쇼핑몰에 가기도 해요.",
        "en": "On weekends, I sometimes go to a shopping mall with my wife and son."
      },
      {
        "ko": "아들은 장난감 가게를 좋아하고 저는 전자제품과 옷을 구경해요.",
        "en": "My son enjoys toy stores, while I like looking at electronics and clothes."
      },
      {
        "ko": "쇼핑이 끝나면 함께 점심을 먹거나 카페에 가요.",
        "en": "After shopping, we often have lunch or visit a cafe together."
      },
      {
        "ko": "별다른 물건을 사지 않아도 가족과 시간을 보내는 것이 좋아요.",
        "en": "Even if we do not buy anything special, I enjoy spending time with my family."
      }
    ],
    "expressions": [
      [
        "compare prices",
        "가격을 비교하다"
      ],
      [
        "customer reviews",
        "구매 후기"
      ],
      [
        "exchange it for a larger size",
        "더 큰 사이즈로 교환하다"
      ]
    ]
  },
  {
    "id": "neighbors-describe",
    "topic": "Neighbors",
    "label": "이웃",
    "art": "Next door.",
    "title": "Friendly faces in the elevator",
    "subtitle": "이웃들은 어떤 사람들인가요?",
    "question": "Tell me about your neighbors.",
    "questionKo": "이웃들은 어떤 사람들인가요?",
    "paragraphs": [
      {
        "ko": "저는 아파트에 살고 이웃들은 대체로 친절하고 예의 바른 편이에요.",
        "en": "I live in an apartment, and most of my neighbors are friendly and polite."
      },
      {
        "ko": "자주 만나는 사이는 아니지만 엘리베이터에서 마주치면 인사해요.",
        "en": "We are not very close, but we say hello when we meet in the elevator."
      },
      {
        "ko": "가끔 날씨나 동네 이야기를 짧게 나눠요.",
        "en": "Sometimes, we have a short chat about the weather or the neighborhood."
      },
      {
        "ko": "가까이에 친절한 이웃이 있다는 사실이 좋아요.",
        "en": "It is nice to know there are friendly people living nearby."
      }
    ],
    "expressions": [
      [
        "run into my neighbors",
        "이웃을 우연히 마주치다"
      ],
      [
        "keep the noise down",
        "소음을 줄이다"
      ],
      [
        "respect privacy",
        "사생활을 존중하다"
      ]
    ]
  },
  {
    "id": "neighbors-often",
    "topic": "Neighbors",
    "label": "이웃",
    "art": "Next door.",
    "title": "Brief conversations next door",
    "subtitle": "이웃들과 얼마나 자주 이야기하나요?",
    "question": "How often do you talk with your neighbors?",
    "questionKo": "이웃들과 얼마나 자주 이야기하나요?",
    "paragraphs": [
      {
        "ko": "일찍 출근하고 저녁에 퇴근해서 이웃들과 자주 만나지는 못해요.",
        "en": "I leave early for work and come home in the evening, so I do not see my neighbors often."
      },
      {
        "ko": "그래도 엘리베이터에서 마주치면 인사를 해요.",
        "en": "Still, I say hello whenever I run into them in the elevator."
      },
      {
        "ko": "가끔 아이들이나 동네에 관한 이야기를 나누기도 해요.",
        "en": "Sometimes, we talk briefly about our children or the neighborhood."
      },
      {
        "ko": "가깝지는 않아도 서로 존중하며 지내는 것이 중요해요.",
        "en": "Even if we are not close, I think being respectful to each other is important."
      }
    ],
    "expressions": [
      [
        "run into my neighbors",
        "이웃을 우연히 마주치다"
      ],
      [
        "keep the noise down",
        "소음을 줄이다"
      ],
      [
        "respect privacy",
        "사생활을 존중하다"
      ]
    ]
  },
  {
    "id": "neighbors-kindness",
    "topic": "Neighbors",
    "label": "이웃",
    "art": "Next door.",
    "title": "A neighbor who helped me",
    "subtitle": "이웃과 기억에 남는 경험을 말해 주세요.",
    "question": "Tell me about a memorable experience with a neighbor.",
    "questionKo": "이웃과 기억에 남는 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "일하는 동안 택배가 도착해서 걱정했던 적이 있어요.",
        "en": "I once worried about a package that arrived while I was at work."
      },
      {
        "ko": "그런데 이웃이 택배를 안전하게 보관해 주었다고 연락했어요.",
        "en": "But a neighbor contacted me and said they had kept the package safe."
      },
      {
        "ko": "잘 알지 못하는 사이였는데도 도와줘서 놀라고 고마웠어요.",
        "en": "I was surprised and thankful because we did not know each other very well."
      },
      {
        "ko": "그 후로는 저도 이웃에게 더 친절하게 대하려고 해요.",
        "en": "Since then, I have tried to be friendlier to my neighbors."
      }
    ],
    "expressions": [
      [
        "run into my neighbors",
        "이웃을 우연히 마주치다"
      ],
      [
        "keep the noise down",
        "소음을 줄이다"
      ],
      [
        "respect privacy",
        "사생활을 존중하다"
      ]
    ]
  },
  {
    "id": "neighbors-noise",
    "topic": "Neighbors",
    "label": "이웃",
    "art": "Next door.",
    "title": "A noisy night upstairs",
    "subtitle": "이웃과 문제를 겪은 적이 있나요?",
    "question": "Have you ever had a problem with neighbors?",
    "questionKo": "이웃과 문제를 겪은 적이 있나요?",
    "paragraphs": [
      {
        "ko": "어느 날 밤 위층에서 큰 소음이 들렸어요.",
        "en": "One night, I heard loud noises coming from the apartment upstairs."
      },
      {
        "ko": "가구를 옮기는 소리 같았고 잠을 잘 수 없어 답답했어요.",
        "en": "It sounded like someone was moving furniture, and I was frustrated because I wanted to sleep."
      },
      {
        "ko": "아파트 관리사무소에 연락해 상황을 설명했어요.",
        "en": "I contacted the apartment management office and explained the situation."
      },
      {
        "ko": "잠시 후 조용해졌고 아파트에서는 서로를 배려하는 게 중요하다고 느꼈어요.",
        "en": "The noise eventually stopped, and I realized how important it is to be considerate in an apartment."
      }
    ],
    "expressions": [
      [
        "run into my neighbors",
        "이웃을 우연히 마주치다"
      ],
      [
        "keep the noise down",
        "소음을 줄이다"
      ],
      [
        "respect privacy",
        "사생활을 존중하다"
      ]
    ]
  },
  {
    "id": "neighbors-changes",
    "topic": "Neighbors",
    "label": "이웃",
    "art": "Next door.",
    "title": "How neighborly life has changed",
    "subtitle": "이웃 관계는 과거와 어떻게 달라졌나요?",
    "question": "How have relationships with neighbors changed?",
    "questionKo": "이웃 관계는 과거와 어떻게 달라졌나요?",
    "paragraphs": [
      {
        "ko": "어릴 때는 이웃끼리 서로 더 잘 알고 음식을 나누곤 했어요.",
        "en": "When I was younger, neighbors seemed to know each other better and often shared food."
      },
      {
        "ko": "요즘은 아파트에서 바쁘게 살다 보니 옆집 사람도 모르는 경우가 있어요.",
        "en": "These days, people are so busy that they sometimes do not even know who lives next door."
      },
      {
        "ko": "저 역시 이웃과 긴 시간을 보내지는 못해요.",
        "en": "I do not spend much time with my neighbors, either."
      },
      {
        "ko": "하지만 엘리베이터에서 인사하는 작은 행동도 중요하다고 생각해요.",
        "en": "Still, I think even small things like saying hello in the elevator matter."
      }
    ],
    "expressions": [
      [
        "run into my neighbors",
        "이웃을 우연히 마주치다"
      ],
      [
        "keep the noise down",
        "소음을 줄이다"
      ],
      [
        "respect privacy",
        "사생활을 존중하다"
      ]
    ]
  },
  {
    "id": "neighbors-good",
    "topic": "Neighbors",
    "label": "이웃",
    "art": "Next door.",
    "title": "What makes a good neighbor",
    "subtitle": "좋은 이웃의 조건은 무엇인가요?",
    "question": "What makes a good neighbor?",
    "questionKo": "좋은 이웃의 조건은 무엇인가요?",
    "paragraphs": [
      {
        "ko": "좋은 이웃은 친절하고 배려심이 있어야 해요.",
        "en": "I think a good neighbor should be friendly and considerate."
      },
      {
        "ko": "특히 밤에는 소음을 줄이는 것이 중요해요.",
        "en": "It is especially important to keep the noise down at night."
      },
      {
        "ko": "엘리베이터 문을 잡아주거나 인사하는 작은 친절도 도움이 돼요.",
        "en": "Small gestures like holding the elevator door or saying hello make a difference."
      },
      {
        "ko": "저는 서로의 사생활을 존중하는 조용하고 친절한 이웃이 좋아요.",
        "en": "I prefer quiet, friendly neighbors who respect each other’s privacy."
      }
    ],
    "expressions": [
      [
        "run into my neighbors",
        "이웃을 우연히 마주치다"
      ],
      [
        "keep the noise down",
        "소음을 줄이다"
      ],
      [
        "respect privacy",
        "사생활을 존중하다"
      ]
    ]
  },
  {
    "id": "project-overview",
    "topic": "Work Projects",
    "label": "회사 프로젝트",
    "art": "At work.",
    "title": "An AI platform for engineers",
    "subtitle": "회사에서 진행한 프로젝트를 소개해 주세요.",
    "question": "Tell me about a project at your company.",
    "questionKo": "회사에서 진행한 프로젝트를 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "저는 반도체 회사에서 엔지니어를 위한 AI 기반 플랫폼을 개발해요.",
        "en": "I work for a semiconductor company and develop AI-based platforms for engineers."
      },
      {
        "ko": "프로젝트 목표는 반복 업무를 줄이고 설비 데이터를 더 효율적으로 분석하는 것이었어요.",
        "en": "The goal was to reduce repetitive tasks and analyze equipment data more efficiently."
      },
      {
        "ko": "복잡한 데이터를 다루는 과정은 어려웠지만 팀과 함께 시스템을 개선했어요.",
        "en": "Working with complicated data was challenging, but my team and I improved the system."
      },
      {
        "ko": "엔지니어들이 제가 만든 플랫폼을 실제로 사용해 업무 효율이 좋아지는 모습을 볼 때 가장 기뻐요.",
        "en": "What makes me happiest is seeing engineers use the platform I developed and work more efficiently."
      }
    ],
    "expressions": [
      [
        "AI-based platform",
        "AI 기반 플랫폼"
      ],
      [
        "work more efficiently",
        "더 효율적으로 일하다"
      ],
      [
        "won several awards",
        "여러 번 상을 받았다"
      ]
    ]
  },
  {
    "id": "project-role",
    "topic": "Work Projects",
    "label": "회사 프로젝트",
    "art": "At work.",
    "title": "My role in building the system",
    "subtitle": "프로젝트에서 어떤 역할을 했나요?",
    "question": "What was your role in the project?",
    "questionKo": "프로젝트에서 어떤 역할을 했나요?",
    "paragraphs": [
      {
        "ko": "제 역할은 설비 데이터를 분석하고 AI 시스템을 개발하는 일이었어요.",
        "en": "My role was to analyze equipment data and develop an AI system."
      },
      {
        "ko": "먼저 문제를 파악하고 데이터를 정리했어요.",
        "en": "First, I identified the main problems and organized the data."
      },
      {
        "ko": "그다음 결과가 잘 나오는지 여러 번 시험하고 개선했어요.",
        "en": "Then, I tested the results several times and improved the system."
      },
      {
        "ko": "혼자 모든 일을 할 수는 없기 때문에 팀원들과 의견을 나누며 진행했어요.",
        "en": "I could not do everything alone, so I communicated and shared ideas with my team."
      }
    ],
    "expressions": [
      [
        "AI-based platform",
        "AI 기반 플랫폼"
      ],
      [
        "work more efficiently",
        "더 효율적으로 일하다"
      ],
      [
        "won several awards",
        "여러 번 상을 받았다"
      ]
    ]
  },
  {
    "id": "project-challenge",
    "topic": "Work Projects",
    "label": "회사 프로젝트",
    "art": "At work.",
    "title": "Solving a difficult data problem",
    "subtitle": "회사 프로젝트에서 겪은 문제를 설명해 주세요.",
    "question": "Tell me about a problem during a work project.",
    "questionKo": "회사 프로젝트에서 겪은 문제를 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "AI 프로젝트에서 결과의 정확도가 기대보다 낮았던 적이 있어요.",
        "en": "During an AI project, the results were not as accurate as we expected."
      },
      {
        "ko": "원인을 찾기 위해 데이터를 자세히 확인했어요.",
        "en": "I took a closer look at the data to find the cause."
      },
      {
        "ko": "일부 데이터가 일관되지 않아 팀과 함께 품질을 개선했어요.",
        "en": "Some of the data was inconsistent, so I worked with my team to improve its quality."
      },
      {
        "ko": "여러 번 시험한 뒤 시스템이 좋아졌고 협업의 중요성을 다시 느꼈어요.",
        "en": "After several tests, the system improved, and I realized how important teamwork is."
      }
    ],
    "expressions": [
      [
        "AI-based platform",
        "AI 기반 플랫폼"
      ],
      [
        "work more efficiently",
        "더 효율적으로 일하다"
      ],
      [
        "won several awards",
        "여러 번 상을 받았다"
      ]
    ]
  },
  {
    "id": "project-teamwork",
    "topic": "Work Projects",
    "label": "회사 프로젝트",
    "art": "At work.",
    "title": "Working together on projects",
    "subtitle": "프로젝트에서 어떻게 협업하나요?",
    "question": "How do you work with your teammates?",
    "questionKo": "프로젝트에서 어떻게 협업하나요?",
    "paragraphs": [
      {
        "ko": "새 프로젝트를 시작하면 목표와 일정을 함께 논의해요.",
        "en": "When we start a project, we discuss the main goals and schedule."
      },
      {
        "ko": "각자 맡을 일을 나누고 진행 상황을 주기적으로 공유해요.",
        "en": "We divide responsibilities and share progress regularly."
      },
      {
        "ko": "예상치 못한 문제가 생기면 함께 해결 방법을 찾아요.",
        "en": "When unexpected issues come up, we try to find solutions together."
      },
      {
        "ko": "좋은 의사소통이 기술적인 능력만큼 중요하다고 생각해요.",
        "en": "I believe good communication is just as important as technical skills."
      }
    ],
    "expressions": [
      [
        "AI-based platform",
        "AI 기반 플랫폼"
      ],
      [
        "work more efficiently",
        "더 효율적으로 일하다"
      ],
      [
        "won several awards",
        "여러 번 상을 받았다"
      ]
    ]
  },
  {
    "id": "project-changes",
    "topic": "Work Projects",
    "label": "회사 프로젝트",
    "art": "At work.",
    "title": "How AI changed our work",
    "subtitle": "과거와 지금의 프로젝트 방식은 어떻게 다른가요?",
    "question": "How have work projects changed over time?",
    "questionKo": "과거와 지금의 프로젝트 방식은 어떻게 다른가요?",
    "paragraphs": [
      {
        "ko": "과거에는 많은 데이터를 사람이 직접 수집하고 분석했어요.",
        "en": "In the past, engineers collected and analyzed a lot of data manually."
      },
      {
        "ko": "요즘은 AI를 활용해 더 빠르게 정보를 찾고 분석해요.",
        "en": "These days, we use AI to find and analyze information much faster."
      },
      {
        "ko": "온라인 도구로 자료와 진행 상황을 쉽게 공유할 수도 있어요.",
        "en": "We can also use online tools to share information and track progress."
      },
      {
        "ko": "물론 중요한 판단은 사람이 해야 하지만 업무 효율은 많이 좋아졌어요.",
        "en": "People still need to make important decisions, but our work has become more efficient."
      }
    ],
    "expressions": [
      [
        "AI-based platform",
        "AI 기반 플랫폼"
      ],
      [
        "work more efficiently",
        "더 효율적으로 일하다"
      ],
      [
        "won several awards",
        "여러 번 상을 받았다"
      ]
    ]
  },
  {
    "id": "project-success",
    "topic": "Work Projects",
    "label": "회사 프로젝트",
    "art": "At work.",
    "title": "When hard work pays off",
    "subtitle": "성공적으로 수행한 회사 프로젝트를 말해 주세요.",
    "question": "Tell me about a successful work project.",
    "questionKo": "성공적으로 수행한 회사 프로젝트를 말해 주세요.",
    "paragraphs": [
      {
        "ko": "기억에 남는 프로젝트는 엔지니어를 위한 AI 플랫폼 개발이에요.",
        "en": "One of my most successful projects was developing an AI platform for engineers."
      },
      {
        "ko": "개발 과정에서는 복잡한 데이터와 여러 기술적인 문제를 겪었어요.",
        "en": "We faced complicated data and several technical problems during development."
      },
      {
        "ko": "포기하지 않고 꾸준히 개선했고 엔지니어들이 실제 업무에 사용하기 시작했어요.",
        "en": "We kept improving the system, and engineers eventually started using it in their daily work."
      },
      {
        "ko": "업무가 더 효율적으로 바뀌는 모습을 보며 뿌듯했고 여러 번 상도 받았어요.",
        "en": "I felt proud seeing their work become more efficient, and I have won several awards for my projects."
      }
    ],
    "expressions": [
      [
        "AI-based platform",
        "AI 기반 플랫폼"
      ],
      [
        "work more efficiently",
        "더 효율적으로 일하다"
      ],
      [
        "won several awards",
        "여러 번 상을 받았다"
      ]
    ]
  },
  {
    "id": "project-reward",
    "topic": "Work Projects",
    "label": "회사 프로젝트",
    "art": "At work.",
    "title": "The reward of seeing people benefit",
    "subtitle": "업무에서 가장 보람을 느낄 때는 언제인가요?",
    "question": "What do you find most rewarding about your job?",
    "questionKo": "업무에서 가장 보람을 느낄 때는 언제인가요?",
    "paragraphs": [
      {
        "ko": "가장 보람 있는 순간은 엔지니어들이 제가 개발한 플랫폼을 사용하는 모습을 볼 때예요.",
        "en": "The most rewarding moment is seeing engineers actually use the platforms I developed."
      },
      {
        "ko": "그 플랫폼이 시간을 절약하고 일을 쉽게 해준다는 걸 알면 행복해요.",
        "en": "It makes me happy to know the platform saves them time and makes their jobs easier."
      },
      {
        "ko": "프로젝트로 여러 차례 상도 받았는데 정말 자랑스러웠어요.",
        "en": "I have also won several awards for my projects, which made me proud."
      },
      {
        "ko": "하지만 상보다 더 중요한 것은 제가 만든 것이 현장에서 실제로 도움이 된다는 사실이에요.",
        "en": "But more than the awards, what matters most is knowing that something I created makes a real difference at work."
      }
    ],
    "expressions": [
      [
        "AI-based platform",
        "AI 기반 플랫폼"
      ],
      [
        "work more efficiently",
        "더 효율적으로 일하다"
      ],
      [
        "won several awards",
        "여러 번 상을 받았다"
      ]
    ]
  },
  {
    "id": "project-achievement",
    "topic": "Work Projects",
    "label": "회사 프로젝트",
    "art": "At work.",
    "title": "My proudest achievement at work",
    "subtitle": "직장에서 자랑스러운 성취는 무엇인가요?",
    "question": "What achievement are you proud of?",
    "questionKo": "직장에서 자랑스러운 성취는 무엇인가요?",
    "paragraphs": [
      {
        "ko": "제가 가장 자랑스럽게 생각하는 것은 현장에서 사용하는 AI 플랫폼을 개발한 일이에요.",
        "en": "One of my proudest achievements is developing AI platforms that engineers actually use."
      },
      {
        "ko": "기술적인 문제를 해결하고 시스템을 더 편리하게 만드는 데 많은 노력이 필요했어요.",
        "en": "It took a lot of effort to solve technical problems and make the systems more useful."
      },
      {
        "ko": "실제 사용자가 더 효율적으로 일하는 모습을 보면 성취감을 느껴요.",
        "en": "I feel a sense of achievement when I see people using them to work more efficiently."
      },
      {
        "ko": "여러 차례 수상한 것도 기쁘지만 제 일이 사람들에게 도움이 된다는 것이 더 중요해요.",
        "en": "Winning several awards has been great, but knowing my work helps people means even more to me."
      }
    ],
    "expressions": [
      [
        "AI-based platform",
        "AI 기반 플랫폼"
      ],
      [
        "work more efficiently",
        "더 효율적으로 일하다"
      ],
      [
        "won several awards",
        "여러 번 상을 받았다"
      ]
    ]
  },
  {
    "id": "project-preparation",
    "topic": "Work Projects",
    "label": "회사 프로젝트",
    "art": "At work.",
    "title": "Planning a new project",
    "subtitle": "새 프로젝트는 어떻게 준비하나요?",
    "question": "How do you prepare for a new work project?",
    "questionKo": "새 프로젝트는 어떻게 준비하나요?",
    "paragraphs": [
      {
        "ko": "프로젝트를 시작할 때는 먼저 목표를 명확히 해요.",
        "en": "When I start a new project, I make sure the goal is clear."
      },
      {
        "ko": "그다음 큰 일을 작은 작업으로 나누고 일정을 세워요.",
        "en": "Then, I break the work into smaller tasks and make a schedule."
      },
      {
        "ko": "팀원들과 역할과 기대 결과를 논의해요.",
        "en": "I discuss responsibilities and expected results with my teammates."
      },
      {
        "ko": "중간에 변수가 생겨도 계획이 있으면 더 체계적으로 대응할 수 있어요.",
        "en": "Even when unexpected problems come up, having a plan helps us stay organized."
      }
    ],
    "expressions": [
      [
        "AI-based platform",
        "AI 기반 플랫폼"
      ],
      [
        "work more efficiently",
        "더 효율적으로 일하다"
      ],
      [
        "won several awards",
        "여러 번 상을 받았다"
      ]
    ]
  },
  {
    "id": "tickets-how",
    "topic": "Tickets",
    "label": "티켓 · 예매",
    "art": "Booking tickets.",
    "title": "Booking with a few taps",
    "subtitle": "평소 티켓을 어떻게 구매하나요?",
    "question": "How do you usually buy tickets?",
    "questionKo": "평소 티켓을 어떻게 구매하나요?",
    "paragraphs": [
      {
        "ko": "저는 영화나 공연 티켓을 스마트폰으로 예매해요.",
        "en": "I usually buy movie or concert tickets on my smartphone."
      },
      {
        "ko": "앱에서 시간과 좌석을 확인한 뒤 결제해요.",
        "en": "I check the schedule and available seats in an app and then pay."
      },
      {
        "ko": "줄을 설 필요 없이 옵션을 비교할 수 있어서 편해요.",
        "en": "It is convenient because I do not have to wait in line and can compare options."
      },
      {
        "ko": "예약 내역도 휴대전화에서 바로 확인할 수 있어요.",
        "en": "I can also check my reservation right on my phone."
      }
    ],
    "expressions": [
      [
        "book tickets online",
        "온라인으로 티켓을 예매하다"
      ],
      [
        "wrong date",
        "잘못된 날짜"
      ],
      [
        "cancellation policy",
        "취소 규정"
      ]
    ]
  },
  {
    "id": "tickets-popular",
    "topic": "Tickets",
    "label": "티켓 · 예매",
    "art": "Booking tickets.",
    "title": "Getting tickets for a popular event",
    "subtitle": "기억에 남는 티켓 구매 경험을 말해 주세요.",
    "question": "Tell me about a memorable ticket purchase.",
    "questionKo": "기억에 남는 티켓 구매 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "인기 있는 행사의 티켓을 예매하려고 했던 일이 기억나요.",
        "en": "I remember trying to buy tickets for a popular event."
      },
      {
        "ko": "판매가 시작되자 접속자가 몰려 사이트가 느려졌어요.",
        "en": "When ticket sales opened, the website slowed down because so many people were trying to book."
      },
      {
        "ko": "여러 번 새로고침하면서 예매를 시도했어요.",
        "en": "I kept refreshing the page and trying again."
      },
      {
        "ko": "결국 티켓을 구해서 안심하고 기뻤어요.",
        "en": "In the end, I managed to get a ticket, and I felt relieved and excited."
      }
    ],
    "expressions": [
      [
        "book tickets online",
        "온라인으로 티켓을 예매하다"
      ],
      [
        "wrong date",
        "잘못된 날짜"
      ],
      [
        "cancellation policy",
        "취소 규정"
      ]
    ]
  },
  {
    "id": "tickets-mistake",
    "topic": "Tickets",
    "label": "티켓 · 예매",
    "art": "Booking tickets.",
    "title": "The wrong booking date",
    "subtitle": "티켓 예약 중 생긴 문제를 말해 주세요.",
    "question": "Tell me about a ticket reservation problem.",
    "questionKo": "티켓 예약 중 생긴 문제를 말해 주세요.",
    "paragraphs": [
      {
        "ko": "가족과 볼 영화 티켓을 온라인으로 예매했어요.",
        "en": "I booked movie tickets online to watch a movie with my family."
      },
      {
        "ko": "결제한 뒤 날짜를 잘못 선택한 것을 알았어요.",
        "en": "After paying, I realized I had selected the wrong date."
      },
      {
        "ko": "취소 규정을 확인하고 예약을 취소한 뒤 올바른 날짜로 다시 예매했어요.",
        "en": "I checked the cancellation policy, canceled the reservation, and booked tickets for the correct date."
      },
      {
        "ko": "그 이후로는 결제하기 전에 날짜와 시간을 두 번 확인해요.",
        "en": "Since then, I always double-check the date and time before paying."
      }
    ],
    "expressions": [
      [
        "book tickets online",
        "온라인으로 티켓을 예매하다"
      ],
      [
        "wrong date",
        "잘못된 날짜"
      ],
      [
        "cancellation policy",
        "취소 규정"
      ]
    ]
  },
  {
    "id": "tickets-changes",
    "topic": "Tickets",
    "label": "티켓 · 예매",
    "art": "Booking tickets.",
    "title": "From paper tickets to QR codes",
    "subtitle": "티켓 구매 방식이 어떻게 달라졌나요?",
    "question": "How has buying tickets changed?",
    "questionKo": "티켓 구매 방식이 어떻게 달라졌나요?",
    "paragraphs": [
      {
        "ko": "예전에는 영화관에서 표를 사려고 줄을 서곤 했어요.",
        "en": "I used to wait in line to buy tickets at the movie theater."
      },
      {
        "ko": "요즘은 스마트폰으로 좌석과 가격을 확인하고 바로 결제해요.",
        "en": "These days, I can check seats and prices and pay on my smartphone."
      },
      {
        "ko": "종이 티켓 대신 QR 코드를 보여주기도 해요.",
        "en": "I can even show a QR code instead of a paper ticket."
      },
      {
        "ko": "훨씬 빠르고 편리한 방식이라고 생각해요.",
        "en": "I think it is a much faster and more convenient way to buy tickets."
      }
    ],
    "expressions": [
      [
        "book tickets online",
        "온라인으로 티켓을 예매하다"
      ],
      [
        "wrong date",
        "잘못된 날짜"
      ],
      [
        "cancellation policy",
        "취소 규정"
      ]
    ]
  },
  {
    "id": "family-intro",
    "topic": "Family",
    "label": "가족",
    "art": "Family time.",
    "title": "The three of us",
    "subtitle": "가족에 대해 소개해 주세요.",
    "question": "Tell me about your family.",
    "questionKo": "가족에 대해 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "우리 가족은 아내, 초등학생 아들, 저 이렇게 세 명이에요.",
        "en": "There are three people in my family: my wife, my elementary-school son, and me."
      },
      {
        "ko": "아들은 활발하고 호기심이 많아요.",
        "en": "My son is active and curious about everything."
      },
      {
        "ko": "주말에는 함께 산책하거나 카페에 가고 영화를 봐요.",
        "en": "On weekends, we go for walks, visit cafes, or watch movies together."
      },
      {
        "ko": "서로 의지할 수 있다는 것이 우리 가족의 가장 좋은 점이에요.",
        "en": "The best thing about my family is that we can always count on each other."
      }
    ],
    "expressions": [
      [
        "spend quality time",
        "함께 소중한 시간을 보내다"
      ],
      [
        "count on each other",
        "서로 의지하다"
      ],
      [
        "make memories",
        "추억을 만들다"
      ]
    ]
  },
  {
    "id": "family-weekends",
    "topic": "Family",
    "label": "가족",
    "art": "Family time.",
    "title": "Making the most of weekends",
    "subtitle": "주말에 가족과 무엇을 하나요?",
    "question": "What do you do with your family on weekends?",
    "questionKo": "주말에 가족과 무엇을 하나요?",
    "paragraphs": [
      {
        "ko": "평일에는 일을 하느라 가족과 보낼 시간이 많지 않아요.",
        "en": "I work full-time, so I do not have much time with my family on weekdays."
      },
      {
        "ko": "그래서 주말에는 가능한 한 함께 시간을 보내려고 해요.",
        "en": "That is why I try to spend as much time together as possible on weekends."
      },
      {
        "ko": "날씨가 좋으면 공원에 가고 비가 오면 집에서 영화를 봐요.",
        "en": "When the weather is nice, we visit a park. When it rains, we watch movies at home."
      },
      {
        "ko": "이런 소소한 시간이 저에게 큰 휴식이 돼요.",
        "en": "These simple moments help me relax and recharge."
      }
    ],
    "expressions": [
      [
        "spend quality time",
        "함께 소중한 시간을 보내다"
      ],
      [
        "count on each other",
        "서로 의지하다"
      ],
      [
        "make memories",
        "추억을 만들다"
      ]
    ]
  },
  {
    "id": "family-gyeongju",
    "topic": "Family",
    "label": "가족",
    "art": "Family time.",
    "title": "A family memory in Gyeongju",
    "subtitle": "가족과 기억에 남는 경험을 말해 주세요.",
    "question": "Tell me about a memorable family experience.",
    "questionKo": "가족과 기억에 남는 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "가족과 보낸 기억에 남는 시간으로 경주 여행 이야기를 할 수 있어요.",
        "en": "One memorable experience I can talk about is a family trip to Gyeongju."
      },
      {
        "ko": "우리는 역사적인 장소를 둘러보고 맛있는 음식을 먹으며 시간을 보냈어요.",
        "en": "We explored historical places and enjoyed delicious food together."
      },
      {
        "ko": "특히 함께 천천히 산책하며 사진을 찍은 시간이 좋았어요.",
        "en": "I especially enjoyed walking slowly and taking pictures together."
      },
      {
        "ko": "평소 일이 바쁘기 때문에 이런 여행이 더 특별하게 느껴져요.",
        "en": "Because I am usually busy with work, moments like that feel even more special."
      }
    ],
    "expressions": [
      [
        "spend quality time",
        "함께 소중한 시간을 보내다"
      ],
      [
        "count on each other",
        "서로 의지하다"
      ],
      [
        "make memories",
        "추억을 만들다"
      ]
    ]
  },
  {
    "id": "family-changes",
    "topic": "Family",
    "label": "가족",
    "art": "Family time.",
    "title": "My priorities after having a family",
    "subtitle": "가족 생활이 과거와 어떻게 달라졌나요?",
    "question": "How has your family life changed?",
    "questionKo": "가족 생활이 과거와 어떻게 달라졌나요?",
    "paragraphs": [
      {
        "ko": "결혼 전에는 친구를 만나거나 혼자 시간을 보내는 일이 많았어요.",
        "en": "Before getting married, I spent a lot of time with friends or by myself."
      },
      {
        "ko": "아이가 생긴 뒤에는 가족과 함께하는 시간이 더 중요해졌어요.",
        "en": "After having a child, spending time with my family became more important."
      },
      {
        "ko": "아들의 교육과 가족의 생활, 출퇴근이 편한 집을 고민하게 됐어요.",
        "en": "I now think more about my son’s education, family life, and finding a home with an easy commute."
      },
      {
        "ko": "책임은 늘었지만 제 삶은 더 의미 있어졌어요.",
        "en": "I have more responsibilities now, but my life has become more meaningful."
      }
    ],
    "expressions": [
      [
        "spend quality time",
        "함께 소중한 시간을 보내다"
      ],
      [
        "count on each other",
        "서로 의지하다"
      ],
      [
        "make memories",
        "추억을 만들다"
      ]
    ]
  },
  {
    "id": "family-values",
    "topic": "Family",
    "label": "가족",
    "art": "Family time.",
    "title": "Quality time matters most",
    "subtitle": "가족과 보낼 때 가장 중요한 것은 무엇인가요?",
    "question": "What matters most when spending time with family?",
    "questionKo": "가족과 보낼 때 가장 중요한 것은 무엇인가요?",
    "paragraphs": [
      {
        "ko": "가족과 있을 때는 함께하는 시간의 질이 가장 중요해요.",
        "en": "I think spending quality time together matters most."
      },
      {
        "ko": "퇴근 후 피곤해도 아들과 있을 때는 휴대전화를 내려놓으려고 해요.",
        "en": "Even when I am tired after work, I try to put my phone away when I am with my son."
      },
      {
        "ko": "함께 게임을 하거나 학교에서 있었던 일을 이야기해요.",
        "en": "We play games or talk about what happened at school."
      },
      {
        "ko": "비싼 활동보다 서로에게 집중하는 시간이 더 소중해요.",
        "en": "Being present with each other matters more than doing something expensive."
      }
    ],
    "expressions": [
      [
        "spend quality time",
        "함께 소중한 시간을 보내다"
      ],
      [
        "count on each other",
        "서로 의지하다"
      ],
      [
        "make memories",
        "추억을 만들다"
      ]
    ]
  },
  {
    "id": "family-okinawa",
    "topic": "Family",
    "label": "가족",
    "art": "Family time.",
    "title": "A difficult moment while traveling",
    "subtitle": "가족 여행에서 겪은 문제를 말해 주세요.",
    "question": "Tell me about a problem during a family trip.",
    "questionKo": "가족 여행에서 겪은 문제를 말해 주세요.",
    "paragraphs": [
      {
        "ko": "오키나와 여행에서 렌터카를 운전하다 사고를 겪었어요.",
        "en": "I had a rental-car accident during my trip to Okinawa."
      },
      {
        "ko": "일본은 한국과 운전석 위치와 주행 방향이 달라 낯설었어요.",
        "en": "Japan has a different steering wheel position and driving direction from Korea."
      },
      {
        "ko": "사고 당시 무척 놀랐지만 침착하게 상황을 해결하려고 했어요.",
        "en": "I was very shocked, but I tried to stay calm and handle the situation."
      },
      {
        "ko": "이 일을 통해 여행 전에 현지 교통 규칙을 확인하는 것이 중요하다고 배웠어요.",
        "en": "The experience taught me to check local traffic rules before traveling."
      }
    ],
    "expressions": [
      [
        "spend quality time",
        "함께 소중한 시간을 보내다"
      ],
      [
        "count on each other",
        "서로 의지하다"
      ],
      [
        "make memories",
        "추억을 만들다"
      ]
    ]
  },
  {
    "id": "family-son",
    "topic": "Family",
    "label": "가족",
    "art": "Family time.",
    "title": "Time with my son",
    "subtitle": "가족 중 누구와 특히 가깝나요?",
    "question": "Who are you closest to in your family?",
    "questionKo": "가족 중 누구와 특히 가깝나요?",
    "paragraphs": [
      {
        "ko": "저는 특히 초등학생 아들과 함께하는 시간이 좋아요.",
        "en": "I especially enjoy spending time with my son, who is in elementary school."
      },
      {
        "ko": "퇴근하면 아들이 학교에서 있었던 일을 이야기해 줘요.",
        "en": "When I come home, he tells me about his day at school."
      },
      {
        "ko": "함께 게임을 하거나 영상을 보기도 해요.",
        "en": "We sometimes play games or watch videos together."
      },
      {
        "ko": "아들이 자라는 모습을 보는 것은 정말 보람 있는 일이에요.",
        "en": "Watching him grow up is one of the most rewarding things in my life."
      }
    ],
    "expressions": [
      [
        "spend quality time",
        "함께 소중한 시간을 보내다"
      ],
      [
        "count on each other",
        "서로 의지하다"
      ],
      [
        "make memories",
        "추억을 만들다"
      ]
    ]
  },
  {
    "id": "family-wife",
    "topic": "Family",
    "label": "가족",
    "art": "Family time.",
    "title": "Someone I admire in my family",
    "subtitle": "존경하는 가족 구성원을 설명해 주세요.",
    "question": "Describe a family member you admire.",
    "questionKo": "존경하는 가족 구성원을 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "제가 존경하는 사람 중 한 명은 아내예요.",
        "en": "One person I admire is my wife."
      },
      {
        "ko": "아내는 가족을 배려하고 책임감이 강해요.",
        "en": "She is caring and responsible when it comes to our family."
      },
      {
        "ko": "특히 아이를 대할 때 참을성 있게 이야기하는 점을 배우고 싶어요.",
        "en": "I admire how patiently she talks to our son."
      },
      {
        "ko": "우리도 가끔 의견이 다르지만 대화하고 서로 지지하려고 해요.",
        "en": "We sometimes disagree, but we try to communicate and support each other."
      }
    ],
    "expressions": [
      [
        "spend quality time",
        "함께 소중한 시간을 보내다"
      ],
      [
        "count on each other",
        "서로 의지하다"
      ],
      [
        "make memories",
        "추억을 만들다"
      ]
    ]
  },
  {
    "id": "holiday-favorite",
    "topic": "Holidays",
    "label": "명절 · 공휴일",
    "art": "Holiday together.",
    "title": "Why I like Chuseok",
    "subtitle": "가장 좋아하는 한국 명절은 무엇인가요?",
    "question": "What is your favorite Korean holiday?",
    "questionKo": "가장 좋아하는 한국 명절은 무엇인가요?",
    "paragraphs": [
      {
        "ko": "제가 좋아하는 명절은 추석이에요. 미국의 추수감사절과 비슷해요.",
        "en": "My favorite holiday is Chuseok, which is similar to Thanksgiving."
      },
      {
        "ko": "가족들이 모여 음식을 먹고 이야기를 나누는 명절이에요.",
        "en": "Families get together, share food, and talk during Chuseok."
      },
      {
        "ko": "저는 평일에 바쁘게 일하기 때문에 쉬는 시간이 소중해요.",
        "en": "I am busy with work on weekdays, so I really appreciate time off."
      },
      {
        "ko": "추석은 가족과 다시 가까워지고 편히 쉴 수 있는 특별한 시간이에요.",
        "en": "Chuseok is a special time to reconnect with my family and relax."
      }
    ],
    "expressions": [
      [
        "get together",
        "모이다"
      ],
      [
        "traditional Korean food",
        "한국 전통 음식"
      ],
      [
        "take a break from work",
        "업무에서 잠시 벗어나다"
      ]
    ]
  },
  {
    "id": "holiday-usual",
    "topic": "Holidays",
    "label": "명절 · 공휴일",
    "art": "Holiday together.",
    "title": "Our holiday routine",
    "subtitle": "명절에 주로 무엇을 하나요?",
    "question": "What do you usually do on holidays?",
    "questionKo": "명절에 주로 무엇을 하나요?",
    "paragraphs": [
      {
        "ko": "설날이나 추석에는 가족 또는 친척과 시간을 보내요.",
        "en": "During Lunar New Year or Chuseok, I spend time with my family or relatives."
      },
      {
        "ko": "함께 전통 음식을 먹고 서로의 근황을 이야기해요.",
        "en": "We enjoy traditional food and talk about what has been happening in our lives."
      },
      {
        "ko": "시간이 남으면 산책하거나 영화를 보기도 해요.",
        "en": "If we have extra time, we go for a walk or watch a movie."
      },
      {
        "ko": "업무 걱정 없이 가족과 쉴 수 있다는 게 가장 좋아요.",
        "en": "The best part is relaxing with my family without worrying about work."
      }
    ],
    "expressions": [
      [
        "get together",
        "모이다"
      ],
      [
        "traditional Korean food",
        "한국 전통 음식"
      ],
      [
        "take a break from work",
        "업무에서 잠시 벗어나다"
      ]
    ]
  },
  {
    "id": "holiday-memory",
    "topic": "Holidays",
    "label": "명절 · 공휴일",
    "art": "Holiday together.",
    "title": "A warm family gathering",
    "subtitle": "기억에 남는 명절을 설명해 주세요.",
    "question": "Tell me about a memorable holiday.",
    "questionKo": "기억에 남는 명절을 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "몇 년 전 추석에 가족이 모여 식사했던 일이 기억나요.",
        "en": "I remember a Chuseok when my family got together for a meal a few years ago."
      },
      {
        "ko": "오랜만에 만난 사람들이 많아 모두 반가워했어요.",
        "en": "Everyone was excited because we had not seen one another in a while."
      },
      {
        "ko": "맛있는 음식을 먹고 오래 이야기를 나눴어요.",
        "en": "We enjoyed delicious food and talked for a long time."
      },
      {
        "ko": "특별한 이벤트는 없었지만 여유롭게 함께한 것이 좋았어요.",
        "en": "There was nothing fancy, but I loved having relaxed time together."
      }
    ],
    "expressions": [
      [
        "get together",
        "모이다"
      ],
      [
        "traditional Korean food",
        "한국 전통 음식"
      ],
      [
        "take a break from work",
        "업무에서 잠시 벗어나다"
      ]
    ]
  },
  {
    "id": "holiday-changes",
    "topic": "Holidays",
    "label": "명절 · 공휴일",
    "art": "Holiday together.",
    "title": "Holidays as a child and an adult",
    "subtitle": "어릴 때와 지금의 명절은 어떻게 다른가요?",
    "question": "How have holidays changed since childhood?",
    "questionKo": "어릴 때와 지금의 명절은 어떻게 다른가요?",
    "paragraphs": [
      {
        "ko": "어릴 때는 친척들을 만나 놀고 세뱃돈을 받는 게 즐거웠어요.",
        "en": "As a child, I loved playing with my cousins and getting pocket money on Lunar New Year."
      },
      {
        "ko": "그때는 음식 준비나 일정을 걱정할 필요가 없었어요.",
        "en": "Back then, I did not have to worry about preparing food or planning schedules."
      },
      {
        "ko": "이제는 결혼하고 아이가 있어서 책임이 많아졌어요.",
        "en": "Now I am married and have a child, so I have more responsibilities."
      },
      {
        "ko": "가끔 피곤해도 가족과 소중한 시간을 보내는 기쁨은 여전해요.",
        "en": "Holidays can be tiring, but I still enjoy spending quality time with my family."
      }
    ],
    "expressions": [
      [
        "get together",
        "모이다"
      ],
      [
        "traditional Korean food",
        "한국 전통 음식"
      ],
      [
        "take a break from work",
        "업무에서 잠시 벗어나다"
      ]
    ]
  },
  {
    "id": "holiday-traffic",
    "topic": "Holidays",
    "label": "명절 · 공휴일",
    "art": "Holiday together.",
    "title": "A holiday traffic jam",
    "subtitle": "명절 중 겪은 문제를 설명해 주세요.",
    "question": "Tell me about a problem during a holiday.",
    "questionKo": "명절 중 겪은 문제를 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "추석에 차를 타고 친척을 만나러 가다가 교통 체증에 걸렸어요.",
        "en": "I once got stuck in a traffic jam while driving to visit relatives during Chuseok."
      },
      {
        "ko": "평소보다 차가 훨씬 많아서 늦어졌어요.",
        "en": "There were far more cars than usual, so we were running late."
      },
      {
        "ko": "답답했지만 차 안에서 음악을 듣고 이야기하며 시간을 보냈어요.",
        "en": "It was frustrating, but we listened to music and talked in the car."
      },
      {
        "ko": "그 후로는 명절에 이동할 때 더 일찍 출발하려고 해요.",
        "en": "Since then, I have tried to leave earlier when traveling during major holidays."
      }
    ],
    "expressions": [
      [
        "get together",
        "모이다"
      ],
      [
        "traditional Korean food",
        "한국 전통 음식"
      ],
      [
        "take a break from work",
        "업무에서 잠시 벗어나다"
      ]
    ]
  },
  {
    "id": "holiday-korea",
    "topic": "Holidays",
    "label": "명절 · 공휴일",
    "art": "Holiday together.",
    "title": "Important holidays in Korea",
    "subtitle": "한국의 중요한 명절을 소개해 주세요.",
    "question": "What are some important holidays in Korea?",
    "questionKo": "한국의 중요한 명절을 소개해 주세요.",
    "paragraphs": [
      {
        "ko": "한국의 대표적인 명절은 설날과 추석이에요.",
        "en": "Two of the biggest traditional holidays in Korea are Lunar New Year and Chuseok."
      },
      {
        "ko": "설날에는 가족이 모이고 아이들이 어른들께 세배를 드려요.",
        "en": "On Lunar New Year, families gather, and children bow to their elders."
      },
      {
        "ko": "추석에는 송편 같은 전통 음식을 먹고 친척들을 만나요.",
        "en": "During Chuseok, families eat traditional foods like songpyeon and visit relatives."
      },
      {
        "ko": "저는 가족과 쉴 수 있는 이런 명절을 좋아해요.",
        "en": "I enjoy these holidays because I can relax and spend time with my family."
      }
    ],
    "expressions": [
      [
        "get together",
        "모이다"
      ],
      [
        "traditional Korean food",
        "한국 전통 음식"
      ],
      [
        "take a break from work",
        "업무에서 잠시 벗어나다"
      ]
    ]
  },
  {
    "id": "holiday-compare",
    "topic": "Holidays",
    "label": "명절 · 공휴일",
    "art": "Holiday together.",
    "title": "Holidays across cultures",
    "subtitle": "한국과 외국의 명절을 비교해 주세요.",
    "question": "How do Korean holidays compare with those abroad?",
    "questionKo": "한국과 외국의 명절을 비교해 주세요.",
    "paragraphs": [
      {
        "ko": "한국에서는 설날과 추석이 중요한 가족 명절이에요.",
        "en": "In Korea, Lunar New Year and Chuseok are important family holidays."
      },
      {
        "ko": "미국에는 추수감사절과 크리스마스 같은 명절이 있어요.",
        "en": "In the United States, Thanksgiving and Christmas are major holidays."
      },
      {
        "ko": "먹는 음식과 전통은 달라도 가족이 모인다는 공통점이 있어요.",
        "en": "The food and traditions are different, but families get together in both countries."
      },
      {
        "ko": "저는 그런 공통점이 명절에서 가장 중요한 부분이라고 생각해요.",
        "en": "I think spending time with family is the most important part of any holiday."
      }
    ],
    "expressions": [
      [
        "get together",
        "모이다"
      ],
      [
        "traditional Korean food",
        "한국 전통 음식"
      ],
      [
        "take a break from work",
        "업무에서 잠시 벗어나다"
      ]
    ]
  },
  {
    "id": "cold-experience",
    "topic": "Cold",
    "label": "감기",
    "art": "Feeling under the weather.",
    "title": "Catching a bad cold",
    "subtitle": "감기에 걸렸던 경험을 설명해 주세요.",
    "question": "Tell me about a time when you caught a cold.",
    "questionKo": "감기에 걸렸던 경험을 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "지난겨울에 심한 감기에 걸렸던 일이 기억나요.",
        "en": "I remember catching a really bad cold last winter."
      },
      {
        "ko": "처음에는 목만 아팠지만 다음 날 열과 콧물, 두통까지 생겼어요.",
        "en": "At first, I had a sore throat, but the next day I had a fever, a runny nose, and a headache."
      },
      {
        "ko": "업무에 집중할 수 없어서 하루 쉬고 병원에 갔어요.",
        "en": "I could not concentrate at work, so I took a day off and went to a clinic."
      },
      {
        "ko": "약을 먹고 충분히 쉰 뒤 며칠 후 좋아졌어요.",
        "en": "After taking medicine and getting plenty of rest, I felt better in a few days."
      }
    ],
    "expressions": [
      [
        "catch a cold",
        "감기에 걸리다"
      ],
      [
        "sore throat",
        "목 통증"
      ],
      [
        "take a sick day",
        "병가를 쓰다"
      ]
    ]
  },
  {
    "id": "cold-routine",
    "topic": "Cold",
    "label": "감기",
    "art": "Feeling under the weather.",
    "title": "How I deal with a cold",
    "subtitle": "감기에 걸리면 보통 어떻게 하나요?",
    "question": "What do you usually do when you have a cold?",
    "questionKo": "감기에 걸리면 보통 어떻게 하나요?",
    "paragraphs": [
      {
        "ko": "감기에 걸리면 따뜻한 물을 마시고 가능한 한 많이 쉬어요.",
        "en": "When I catch a cold, I drink warm water and try to get plenty of rest."
      },
      {
        "ko": "증상이 심해지면 가까운 병원에 가요.",
        "en": "If my symptoms get worse, I visit a nearby clinic."
      },
      {
        "ko": "가족에게 감기를 옮기지 않도록 접촉도 조심해요.",
        "en": "I also try not to spread the cold to my family."
      },
      {
        "ko": "아플 때 무리하지 않는 것이 가장 중요하다고 생각해요.",
        "en": "I think the most important thing is not to push myself too hard when I am sick."
      }
    ],
    "expressions": [
      [
        "catch a cold",
        "감기에 걸리다"
      ],
      [
        "sore throat",
        "목 통증"
      ],
      [
        "take a sick day",
        "병가를 쓰다"
      ]
    ]
  },
  {
    "id": "cold-worst",
    "topic": "Cold",
    "label": "감기",
    "art": "Feeling under the weather.",
    "title": "The cold that stopped me working",
    "subtitle": "가장 심했던 감기 경험을 말해 주세요.",
    "question": "Tell me about the worst cold you have had.",
    "questionKo": "가장 심했던 감기 경험을 말해 주세요.",
    "paragraphs": [
      {
        "ko": "중요한 회사 프로젝트를 할 때 심한 감기에 걸렸던 적이 있어요.",
        "en": "I once caught a bad cold while working on an important company project."
      },
      {
        "ko": "처음에는 가벼운 두통과 목 통증이라 계속 일했어요.",
        "en": "At first, I had a slight headache and sore throat, so I kept working."
      },
      {
        "ko": "하지만 다음 날 고열과 피로감 때문에 쉴 수밖에 없었어요.",
        "en": "The next day, I had a high fever and felt exhausted, so I had to rest."
      },
      {
        "ko": "그 일을 통해 아무리 바빠도 건강이 우선이라는 것을 깨달았어요.",
        "en": "That experience taught me that health should come first, no matter how busy I am."
      }
    ],
    "expressions": [
      [
        "catch a cold",
        "감기에 걸리다"
      ],
      [
        "sore throat",
        "목 통증"
      ],
      [
        "take a sick day",
        "병가를 쓰다"
      ]
    ]
  },
  {
    "id": "cold-canceled-trip",
    "topic": "Cold",
    "label": "감기",
    "art": "Feeling under the weather.",
    "title": "A trip postponed by sickness",
    "subtitle": "아파서 계획을 변경한 경험을 설명해 주세요.",
    "question": "Tell me about a time sickness changed your plans.",
    "questionKo": "아파서 계획을 변경한 경험을 설명해 주세요.",
    "paragraphs": [
      {
        "ko": "주말에 가족 여행을 가기로 했는데 감기에 걸린 적이 있어요.",
        "en": "I was planning a weekend trip with my family, but I caught a cold."
      },
      {
        "ko": "처음에는 금방 나을 줄 알았지만 열이 나고 기침도 심해졌어요.",
        "en": "I thought I would recover quickly, but I developed a fever and started coughing a lot."
      },
      {
        "ko": "아쉬웠지만 아내와 상의해서 여행을 미루고 집에서 쉬었어요.",
        "en": "I was disappointed, but I talked with my wife, postponed the trip, and rested at home."
      },
      {
        "ko": "결국 건강을 먼저 챙긴 것이 올바른 선택이었다고 생각해요.",
        "en": "In the end, I think taking care of my health first was the right decision."
      }
    ],
    "expressions": [
      [
        "catch a cold",
        "감기에 걸리다"
      ],
      [
        "sore throat",
        "목 통증"
      ],
      [
        "take a sick day",
        "병가를 쓰다"
      ]
    ]
  },
  {
    "id": "cold-family",
    "topic": "Cold",
    "label": "감기",
    "art": "Feeling under the weather.",
    "title": "Taking care of my son",
    "subtitle": "아픈 가족을 어떻게 돌보나요?",
    "question": "How do you care for a sick family member?",
    "questionKo": "아픈 가족을 어떻게 돌보나요?",
    "paragraphs": [
      {
        "ko": "아들이 감기에 걸리면 충분히 쉬도록 도와줘요.",
        "en": "When my son catches a cold, I make sure he gets enough rest."
      },
      {
        "ko": "물을 마시게 하고 상태가 어떤지 살펴봐요.",
        "en": "I give him water and check how he is feeling."
      },
      {
        "ko": "열이 높거나 더 아프면 병원에 데려가요.",
        "en": "If he has a high fever or feels worse, I take him to a clinic."
      },
      {
        "ko": "아이를 돌보는 것은 부모로서 중요한 책임이라고 생각해요.",
        "en": "I think taking care of my child is an important responsibility as a parent."
      }
    ],
    "expressions": [
      [
        "catch a cold",
        "감기에 걸리다"
      ],
      [
        "sore throat",
        "목 통증"
      ],
      [
        "take a sick day",
        "병가를 쓰다"
      ]
    ]
  },
  {
    "id": "cold-changes",
    "topic": "Cold",
    "label": "감기",
    "art": "Feeling under the weather.",
    "title": "Taking colds more seriously now",
    "subtitle": "감기에 대처하는 방법은 어떻게 바뀌었나요?",
    "question": "How has your response to colds changed?",
    "questionKo": "감기에 대처하는 방법은 어떻게 바뀌었나요?",
    "paragraphs": [
      {
        "ko": "어릴 때는 감기를 대수롭지 않게 생각했어요.",
        "en": "When I was younger, I did not take colds very seriously."
      },
      {
        "ko": "몸이 좋지 않아도 일상생활을 계속하곤 했어요.",
        "en": "I often continued my daily activities even when I felt sick."
      },
      {
        "ko": "하지만 가족과 직장이 생긴 지금은 충분히 쉬려고 해요.",
        "en": "Now that I have a family and a full-time job, I try to get enough rest."
      },
      {
        "ko": "다른 사람에게 옮기지 않도록 조심하는 것도 중요하다고 생각해요.",
        "en": "I also think it is important to avoid spreading the virus to others."
      }
    ],
    "expressions": [
      [
        "catch a cold",
        "감기에 걸리다"
      ],
      [
        "sore throat",
        "목 통증"
      ],
      [
        "take a sick day",
        "병가를 쓰다"
      ]
    ]
  },
  {
    "id": "rp-bookstore",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Questions at a bookstore",
    "subtitle": "서점에 전화해 책에 대해 질문하세요.",
    "question": "Call a bookstore and ask about books.",
    "questionKo": "서점에 전화해 책에 대해 질문하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 경제나 투자 관련 인기 있는 책이 있는지 궁금해서 전화했어요.",
        "en": "Hi, I am calling because I am looking for a popular book about economics or investing."
      },
      {
        "ko": "초보자도 이해하기 쉬운 책을 추천해 주실 수 있나요?",
        "en": "Could you recommend something that is easy to understand?"
      },
      {
        "ko": "온라인으로 주문한 뒤 매장에서 찾을 수도 있나요?",
        "en": "Can I order it online and pick it up at your store?"
      },
      {
        "ko": "회원 할인이 있는지도 알려주세요. 감사합니다.",
        "en": "Do you offer any discounts for members? Thank you for your help."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-hotel-questions",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Asking about a family room",
    "subtitle": "호텔에 객실 문의 전화를 하세요.",
    "question": "Call a hotel and ask about rooms.",
    "questionKo": "호텔에 객실 문의 전화를 하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 가족과 여행을 가려고 하는데 객실에 관해 문의드려요.",
        "en": "Hi, I am planning a family trip and have a few questions about your hotel."
      },
      {
        "ko": "성인 두 명과 아이 한 명이 머물 수 있는 객실이 있나요?",
        "en": "Do you have a room for two adults and one child?"
      },
      {
        "ko": "1박 요금은 얼마이고 조식이 포함되어 있나요?",
        "en": "How much is it per night, and is breakfast included?"
      },
      {
        "ko": "무료 주차와 어린이 편의시설도 있나요? 감사합니다.",
        "en": "Do you offer free parking and any facilities for children? Thank you."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-hotel-change",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Changing a hotel reservation",
    "subtitle": "호텔 예약을 변경해 달라고 요청하세요.",
    "question": "Call a hotel to change your reservation.",
    "questionKo": "호텔 예약을 변경해 달라고 요청하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 이번 주말 호텔 예약을 변경하려고 전화했어요.",
        "en": "Hi, I am calling because I need to change my reservation for this weekend."
      },
      {
        "ko": "예상치 못한 회사 일이 생겨 토요일에 갈 수 없게 됐어요.",
        "en": "Something unexpected came up at work, so I cannot arrive on Saturday."
      },
      {
        "ko": "다음 주말로 날짜를 바꿀 수 있을까요?",
        "en": "Would it be possible to move the reservation to next weekend?"
      },
      {
        "ko": "불가능하다면 취소하고 환불받을 수 있을까요? 도움 주셔서 감사해요.",
        "en": "If that is not possible, could I cancel and get a refund? Thank you for your help."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-rental-accident",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Calling after a rental-car accident",
    "subtitle": "렌터카 사고 후 업체에 연락하세요.",
    "question": "Call the rental company after an accident.",
    "questionKo": "렌터카 사고 후 업체에 연락하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 오키나와에서 렌터카 사고가 나서 전화했어요.",
        "en": "Hi, I am calling because I just had an accident with my rental car in Okinawa."
      },
      {
        "ko": "좌측통행에 익숙하지 않아서 실수했어요.",
        "en": "I was not used to driving on the left, and I made a mistake."
      },
      {
        "ko": "지금 무엇을 해야 하는지 알려주실 수 있나요? 경찰에 신고해야 하나요?",
        "en": "Could you tell me what I should do next? Do I need to report it to the police?"
      },
      {
        "ko": "보험은 어떻게 처리되는지도 알려주시면 감사하겠습니다.",
        "en": "I would also appreciate it if you could explain how the insurance works."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-jacket-store",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Questions about a winter jacket",
    "subtitle": "재킷에 대해 매장에 질문하세요.",
    "question": "Call a store to ask about a jacket.",
    "questionKo": "재킷에 대해 매장에 질문하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 가볍지만 따뜻한 겨울 재킷을 찾고 있어요.",
        "en": "Hi, I am looking for a winter jacket that is warm but not too heavy."
      },
      {
        "ko": "현재 어떤 사이즈를 판매하고 있나요?",
        "en": "What sizes do you currently have in stock?"
      },
      {
        "ko": "구매 전에 직접 입어볼 수 있나요? 할인 행사도 있나요?",
        "en": "Can I try it on before buying it? Do you have any discounts?"
      },
      {
        "ko": "사이즈가 맞지 않으면 반품할 수 있는지도 궁금해요.",
        "en": "I would also like to know if I can return it if it does not fit."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-jacket-exchange",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Exchanging the wrong size",
    "subtitle": "고객센터에 옷 교환을 요청하세요.",
    "question": "Ask customer service to exchange a jacket.",
    "questionKo": "고객센터에 옷 교환을 요청하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 온라인으로 구매한 재킷 사이즈가 맞지 않아요.",
        "en": "Hi, I bought a jacket online, but the size does not fit."
      },
      {
        "ko": "미디엄을 주문했는데 라지가 필요한 것 같아요.",
        "en": "I ordered a medium, but I think I need a large."
      },
      {
        "ko": "더 큰 사이즈로 교환할 수 있을까요?",
        "en": "Would it be possible to exchange it for a larger size?"
      },
      {
        "ko": "영수증과 포장은 보관하고 있어요. 반송 배송비도 알려주세요.",
        "en": "I still have the receipt and packaging. Could you tell me about the return shipping fee?"
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-delivery",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "A package that has not arrived",
    "subtitle": "배송 지연에 대해 문의하세요.",
    "question": "Call about a delayed online order.",
    "questionKo": "배송 지연에 대해 문의하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 지난주 주문한 신발이 아직 도착하지 않았어요.",
        "en": "Hi, I ordered shoes last week, but the package has not arrived yet."
      },
      {
        "ko": "어제 도착할 예정이었는데 배송 조회도 업데이트되지 않아요.",
        "en": "It was supposed to arrive yesterday, but the tracking information has not been updated."
      },
      {
        "ko": "배송 상태를 확인해 주실 수 있나요?",
        "en": "Could you please check the delivery status for me?"
      },
      {
        "ko": "빨리 받을 수 없다면 주문을 취소하고 환불받을 수 있을까요?",
        "en": "If faster delivery is not possible, could I cancel the order and get a refund?"
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-electronics-return",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Earphones that do not work",
    "subtitle": "고장 난 이어폰을 교환하거나 환불해 달라고 하세요.",
    "question": "Call a store about faulty earphones.",
    "questionKo": "고장 난 이어폰을 교환하거나 환불해 달라고 하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 어제 산 무선 이어폰이 제대로 작동하지 않아요.",
        "en": "Hi, I bought wireless earphones yesterday, but they are not working properly."
      },
      {
        "ko": "소리가 자꾸 끊기고 휴대전화에도 잘 연결되지 않아요.",
        "en": "The sound keeps cutting out, and they do not connect to my phone properly."
      },
      {
        "ko": "새 제품으로 교환할 수 있을까요? 안 되면 환불받고 싶어요.",
        "en": "Could I exchange them for a new pair? If not, I would like a refund."
      },
      {
        "ko": "영수증과 포장은 모두 갖고 있습니다.",
        "en": "I still have the receipt and the original packaging."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-friend-change",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Rescheduling plans with a friend",
    "subtitle": "친구에게 약속 변경을 부탁하세요.",
    "question": "Call a friend to change your plans.",
    "questionKo": "친구에게 약속 변경을 부탁하세요.",
    "paragraphs": [
      {
        "ko": "미안한데 토요일에 회사 일이 갑자기 생겼어.",
        "en": "I am really sorry, but something unexpected came up at work on Saturday."
      },
      {
        "ko": "원래 만나기로 한 약속에 갈 수 없을 것 같아.",
        "en": "I do not think I can make it to our plans."
      },
      {
        "ko": "일요일에 만나는 건 어때? 아니면 다음 주말도 괜찮아.",
        "en": "Would Sunday work for you? Or how about next weekend?"
      },
      {
        "ko": "갑자기 바꾸게 돼서 미안해. 커피 마시면서 이야기하자.",
        "en": "I am sorry about the last-minute change. We can grab coffee and catch up."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-neighbor-noise",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Asking a neighbor to be quieter",
    "subtitle": "이웃에게 음악 소리를 줄여 달라고 부탁하세요.",
    "question": "Ask a neighbor to turn down loud music.",
    "questionKo": "이웃에게 음악 소리를 줄여 달라고 부탁하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 옆집에 사는 사람인데 잠깐 부탁드려도 될까요?",
        "en": "Hi, I am your neighbor from next door. Could I ask you a small favor?"
      },
      {
        "ko": "집에서 음악 소리가 꽤 크게 들리고 시간이 늦었어요.",
        "en": "I can hear loud music from your apartment, and it is getting pretty late."
      },
      {
        "ko": "내일 일찍 출근해야 해서 소리를 조금 줄여주실 수 있을까요?",
        "en": "I have to wake up early for work. Would you mind turning the volume down a little?"
      },
      {
        "ko": "이해해 주셔서 정말 감사합니다.",
        "en": "I would really appreciate it. Thank you for understanding."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-neighbor-house",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Asking a neighbor to watch the apartment",
    "subtitle": "여행 중 집을 살펴봐 달라고 부탁하세요.",
    "question": "Ask a neighbor for help while you travel.",
    "questionKo": "여행 중 집을 살펴봐 달라고 부탁하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 이번 주말에 가족과 며칠 여행을 가요.",
        "en": "Hi, I am going on a short trip with my family this weekend."
      },
      {
        "ko": "혹시 저희가 없는 동안 집 주변을 가끔 살펴봐 주실 수 있나요?",
        "en": "Would you mind keeping an eye on my apartment while we are away?"
      },
      {
        "ko": "특별히 하실 일은 없고 이상한 점이 있으면 알려주시면 돼요.",
        "en": "You do not have to do anything special. Just let me know if you notice anything unusual."
      },
      {
        "ko": "정말 감사하고 다음에 저도 꼭 도와드릴게요.",
        "en": "I would really appreciate it, and I would be happy to return the favor."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-ticket-questions",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Questions about concert tickets",
    "subtitle": "공연 티켓에 관해 전화로 질문하세요.",
    "question": "Call to ask about tickets for a concert.",
    "questionKo": "공연 티켓에 관해 전화로 질문하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 이번 토요일 공연 티켓을 구매하려고 해요.",
        "en": "Hi, I am interested in buying tickets for the concert this Saturday."
      },
      {
        "ko": "아직 남은 표가 있나요? 가격은 얼마인가요?",
        "en": "Are there any tickets available? How much are they?"
      },
      {
        "ko": "무대 가까운 좌석도 남아 있나요?",
        "en": "Are there any seats left near the stage?"
      },
      {
        "ko": "온라인 예매가 가능한지, 취소 시 환불 규정은 어떤지도 알려주세요.",
        "en": "Can I book online, and what is the refund policy if I need to cancel?"
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-ticket-change",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Changing ticket dates",
    "subtitle": "잘못 예약한 티켓 날짜를 변경하세요.",
    "question": "Call to fix the wrong ticket date.",
    "questionKo": "잘못 예약한 티켓 날짜를 변경하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 토요일 표 두 장을 예매했는데 날짜를 잘못 선택했어요.",
        "en": "Hi, I booked two tickets for Saturday, but I selected the wrong date."
      },
      {
        "ko": "사실 일요일에 가려고 했어요.",
        "en": "Actually, I wanted to go on Sunday."
      },
      {
        "ko": "일요일로 예약을 바꿀 수 있을까요?",
        "en": "Would it be possible to change the reservation to Sunday?"
      },
      {
        "ko": "변경이 안 된다면 취소와 환불이 가능한가요?",
        "en": "If that is not possible, could I cancel the tickets and get a refund?"
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-concert-canceled",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Finding a plan B after a cancellation",
    "subtitle": "공연 취소 후 친구에게 대안을 제시하세요.",
    "question": "Tell a friend a concert was canceled and suggest alternatives.",
    "questionKo": "공연 취소 후 친구에게 대안을 제시하세요.",
    "paragraphs": [
      {
        "ko": "안 좋은 소식이 있어. 이번 주말 공연이 취소됐대.",
        "en": "Hey, I have some bad news. The concert this weekend got canceled."
      },
      {
        "ko": "정말 기대했는데 아쉽다.",
        "en": "I am really disappointed because I was looking forward to it."
      },
      {
        "ko": "대신 영화 보러 가거나 저녁 먹으러 갈까?",
        "en": "How about watching a movie or going out for dinner instead?"
      },
      {
        "ko": "공연이 꼭 보고 싶다면 다른 날짜 표를 다시 알아봐도 좋고.",
        "en": "If you still want to see the concert, we can try booking tickets for another date."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-family-dinner",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Moving a family gathering",
    "subtitle": "가족 모임 날짜를 변경하세요.",
    "question": "Call family to reschedule a dinner.",
    "questionKo": "가족 모임 날짜를 변경하세요.",
    "paragraphs": [
      {
        "ko": "미안한데 이번 토요일 가족 모임에 참석하기 어려울 것 같아요.",
        "en": "I am sorry, but I do not think I can make it to the family dinner this Saturday."
      },
      {
        "ko": "회사에서 예상치 못한 일이 생겼어요.",
        "en": "Something unexpected came up at work."
      },
      {
        "ko": "일요일로 옮길 수 있을까요?",
        "en": "Would it be possible to move it to Sunday?"
      },
      {
        "ko": "어렵다면 다음 주말도 좋아요. 갑자기 변경해서 죄송해요.",
        "en": "If Sunday does not work, next weekend is fine, too. I am sorry about the last-minute change."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-family-tickets",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Tickets for a family show",
    "subtitle": "가족 공연 티켓을 문의하세요.",
    "question": "Ask about tickets for a family performance.",
    "questionKo": "가족 공연 티켓을 문의하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 아내와 초등학생 아들과 공연을 보려고 해요.",
        "en": "Hi, I am planning to watch a show with my wife and elementary-school son."
      },
      {
        "ko": "이번 일요일 표가 있나요?",
        "en": "Are there any tickets available this Sunday?"
      },
      {
        "ko": "성인과 어린이 가격은 각각 얼마인가요?",
        "en": "How much are tickets for adults and children?"
      },
      {
        "ko": "초등학생에게 적합한 공연인지, 온라인 예매가 가능한지도 궁금해요.",
        "en": "Is the show suitable for elementary-school students, and can I book online?"
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-holiday-explain",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Explaining Chuseok to a foreign friend",
    "subtitle": "외국인 친구에게 추석을 소개하세요.",
    "question": "Explain Chuseok to a foreign friend.",
    "questionKo": "외국인 친구에게 추석을 소개하세요.",
    "paragraphs": [
      {
        "ko": "추석 들어봤어? 한국의 대표적인 명절이야.",
        "en": "Have you ever heard of Chuseok? It is one of Korea’s biggest traditional holidays."
      },
      {
        "ko": "미국의 추수감사절과 비슷하고 가족들이 함께 모여.",
        "en": "It is similar to Thanksgiving, and families get together."
      },
      {
        "ko": "송편 같은 전통 음식을 먹고 친척들을 만나.",
        "en": "We eat traditional foods like songpyeon and visit relatives."
      },
      {
        "ko": "나는 가족과 쉬면서 시간을 보낼 수 있어서 추석이 좋아.",
        "en": "I enjoy Chuseok because I can relax and spend time with my family."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-sick-work",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Calling in sick to work",
    "subtitle": "감기 때문에 상사에게 병가를 요청하세요.",
    "question": "Call your manager and request sick leave.",
    "questionKo": "감기 때문에 상사에게 병가를 요청하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 오늘 감기에 걸려 몸 상태가 좋지 않습니다.",
        "en": "Hi, I am not feeling well today because I have caught a bad cold."
      },
      {
        "ko": "열이 나고 목이 아파서 출근하기 어려울 것 같습니다.",
        "en": "I have a fever and a sore throat, so I do not think I can come to work."
      },
      {
        "ko": "오늘 병가를 써도 될까요?",
        "en": "Would it be okay if I took a sick day?"
      },
      {
        "ko": "프로젝트 진행 상황은 팀에 공유하겠습니다. 이해해 주셔서 감사합니다.",
        "en": "I will update my team on the project. Thank you for understanding."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "rp-sick-friend",
    "topic": "Role-play",
    "label": "롤플레이",
    "art": "On the phone.",
    "title": "Canceling plans because of a cold",
    "subtitle": "감기 때문에 친구와 약속을 바꾸세요.",
    "question": "Call a friend because you are sick.",
    "questionKo": "감기 때문에 친구와 약속을 바꾸세요.",
    "paragraphs": [
      {
        "ko": "미안한데 심한 감기에 걸려서 이번 토요일에 못 만날 것 같아.",
        "en": "I am sorry, but I caught a bad cold and cannot meet this Saturday."
      },
      {
        "ko": "열이 나고 목이 아픈 데다 너에게 옮기고 싶지도 않아.",
        "en": "I have a fever and a sore throat, and I do not want to get you sick."
      },
      {
        "ko": "다음 주말에 만나는 건 어때?",
        "en": "Would it be okay if we met next weekend instead?"
      },
      {
        "ko": "갑자기 바꾸게 돼서 미안해. 몸이 나으면 꼭 보자.",
        "en": "I am sorry about the last-minute change. Let us meet when I feel better."
      }
    ],
    "expressions": [
      [
        "I have a few questions",
        "몇 가지 질문이 있습니다"
      ],
      [
        "Would it be possible to",
        "~하는 것이 가능할까요"
      ],
      [
        "I would appreciate your help",
        "도와주시면 감사하겠습니다"
      ]
    ]
  },
  {
    "id": "followup-earlier",
    "topic": "Conversation Skills",
    "label": "후속 질문 대응",
    "art": "Keeping the conversation going.",
    "title": "As I mentioned earlier",
    "subtitle": "앞에서 말한 내용이 후속 질문으로 다시 나오면?",
    "question": "You are asked about a topic you already discussed.",
    "questionKo": "앞에서 말한 내용이 후속 질문으로 다시 나오면?",
    "paragraphs": [
      {
        "ko": "앞서 말씀드렸듯이 저는 엔지니어를 위한 AI 플랫폼을 개발했어요.",
        "en": "As I mentioned earlier, I developed an AI platform for engineers."
      },
      {
        "ko": "조금 더 자세히 말씀드리면 많은 엔지니어가 실제 업무에서 사용하고 있어요.",
        "en": "To give you a little more detail, many engineers use it in their daily work."
      },
      {
        "ko": "특히 그들이 시간을 절약하고 효율적으로 일하는 모습이 좋아요.",
        "en": "I especially like seeing them save time and work more efficiently."
      },
      {
        "ko": "그래서 저는 그 프로젝트가 정말 자랑스러워요.",
        "en": "That is why I feel so proud of the project."
      }
    ],
    "expressions": [
      [
        "as I mentioned earlier",
        "앞서 말씀드렸듯이"
      ],
      [
        "to give you more detail",
        "더 자세히 말씀드리면"
      ],
      [
        "one more thing",
        "한 가지 더"
      ]
    ]
  },
  {
    "id": "followup-challenge",
    "topic": "Conversation Skills",
    "label": "후속 질문 대응",
    "art": "Keeping the conversation going.",
    "title": "Adding detail to a repeated question",
    "subtitle": "프로젝트의 어려움을 다시 물어보면?",
    "question": "A follow-up repeats your earlier project challenge question.",
    "questionKo": "프로젝트의 어려움을 다시 물어보면?",
    "paragraphs": [
      {
        "ko": "앞에서 간단히 말씀드렸지만 조금 더 설명해 볼게요.",
        "en": "I briefly talked about this earlier, but let me explain a little more."
      },
      {
        "ko": "가장 어려운 점은 복잡한 설비 데이터를 다루는 것이었어요.",
        "en": "One of the biggest challenges was dealing with complicated equipment data."
      },
      {
        "ko": "팀원들과 여러 번 테스트하며 정확도를 높였어요.",
        "en": "My teammates and I ran several tests to improve accuracy."
      },
      {
        "ko": "그 과정에서 협업의 중요성을 많이 배웠어요.",
        "en": "I learned a lot about the importance of teamwork through that process."
      }
    ],
    "expressions": [
      [
        "as I mentioned earlier",
        "앞서 말씀드렸듯이"
      ],
      [
        "to give you more detail",
        "더 자세히 말씀드리면"
      ],
      [
        "one more thing",
        "한 가지 더"
      ]
    ]
  },
  {
    "id": "followup-hiking",
    "topic": "Conversation Skills",
    "label": "후속 질문 대응",
    "art": "Keeping the conversation going.",
    "title": "A detail I did not mention",
    "subtitle": "등산 경험을 다시 물어보면?",
    "question": "A follow-up asks again about a hiking memory.",
    "questionKo": "등산 경험을 다시 물어보면?",
    "paragraphs": [
      {
        "ko": "앞서 가을 등산 이야기를 했는데 한 가지 더 생각나는 점이 있어요.",
        "en": "I mentioned my autumn hike earlier, but there is one more thing I remember."
      },
      {
        "ko": "예상보다 길이 가팔라 거의 포기할 뻔했어요.",
        "en": "The trail was steeper than I expected, and I almost gave up."
      },
      {
        "ko": "끝까지 올라가서 정상의 풍경을 봤을 때 정말 뿌듯했어요.",
        "en": "When I reached the top and saw the view, I felt really proud."
      },
      {
        "ko": "그 경험은 지금도 기억에 많이 남아요.",
        "en": "That experience still stands out in my memory."
      }
    ],
    "expressions": [
      [
        "as I mentioned earlier",
        "앞서 말씀드렸듯이"
      ],
      [
        "to give you more detail",
        "더 자세히 말씀드리면"
      ],
      [
        "one more thing",
        "한 가지 더"
      ]
    ]
  },
  {
    "id": "followup-no-more",
    "topic": "Conversation Skills",
    "label": "후속 질문 대응",
    "art": "Keeping the conversation going.",
    "title": "One more thing to add",
    "subtitle": "이미 많은 내용을 말했는데 후속 질문이 나오면?",
    "question": "You have already covered most of the answer.",
    "questionKo": "이미 많은 내용을 말했는데 후속 질문이 나오면?",
    "paragraphs": [
      {
        "ko": "앞에서 이미 말씀드렸지만 한 가지를 더 덧붙이고 싶어요.",
        "en": "I think I mentioned this earlier, but there is one more thing I would like to add."
      },
      {
        "ko": "그때 가장 특별했던 것은 일이 끝난 뒤의 제 감정이었어요.",
        "en": "What made the experience special was how I felt afterward."
      },
      {
        "ko": "처음에는 힘들었지만 결국 잘 해결됐어요.",
        "en": "At first, it was challenging, but in the end everything worked out well."
      },
      {
        "ko": "돌이켜 보면 정말 많은 것을 배운 경험이었어요.",
        "en": "Looking back, I learned a lot from that experience."
      }
    ],
    "expressions": [
      [
        "as I mentioned earlier",
        "앞서 말씀드렸듯이"
      ],
      [
        "to give you more detail",
        "더 자세히 말씀드리면"
      ],
      [
        "one more thing",
        "한 가지 더"
      ]
    ]
  },
  {
    "id": "appliance-roleplay-inquiry",
    "topic": "Home Appliances",
    "label": "가전 · 구매 문의 롤플레이",
    "art": "At the appliance store.",
    "title": "Calling a store about a refrigerator",
    "subtitle": "Asking questions before buying a new appliance.",
    "question": "You want to buy a refrigerator. Call a store and ask three or four questions.",
    "questionKo": "냉장고 구매를 위해 매장에 전화하고 질문 3~4개를 하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 새 냉장고를 구매하려고 전화드렸어요. 몇 가지 질문이 있어요.",
        "en": "Hi, I am calling because I am interested in buying a new refrigerator. I have a few questions."
      },
      {
        "ko": "먼저 3인 가족에게 적합한 모델이 있나요? 가격은 얼마인가요?",
        "en": "First, do you have any models suitable for a family of three? How much do they cost?"
      },
      {
        "ko": "에너지 효율이 좋은 제품을 찾고 있어요. 추천해 주실 수 있나요?",
        "en": "I am looking for an energy-efficient model. Could you recommend one?"
      },
      {
        "ko": "마지막으로 배송과 설치는 무료인가요? 보증 기간은 얼마나 되나요? 감사합니다.",
        "en": "And one more thing. Are delivery and installation free? How long is the warranty? Thank you for your help."
      }
    ],
    "expressions": [
      ["energy-efficient model", "에너지 효율이 좋은 모델"],
      ["delivery and installation", "배송과 설치"],
      ["warranty", "보증 기간"]
    ]
  },
  {
    "id": "appliance-roleplay-repair",
    "topic": "Home Appliances",
    "label": "가전 · 수리 요청 롤플레이",
    "art": "On the phone.",
    "title": "Requesting a repair for a broken washer",
    "subtitle": "Explaining the problem and arranging service.",
    "question": "Your washing machine is broken. Call customer service, explain the problem, and ask for help.",
    "questionKo": "세탁기가 고장 났습니다. 고객센터에 전화해 문제를 설명하고 도움을 요청하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 저희 집 세탁기에 문제가 있어서 전화드렸어요.",
        "en": "Hi, I am calling because there is a problem with my washing machine."
      },
      {
        "ko": "어제부터 전원이 켜지지만 세탁이 시작되지 않아요. 전원을 다시 켜 봤지만 그대로예요.",
        "en": "Since yesterday, it has been turning on, but the wash cycle will not start. I tried restarting it, but nothing changed."
      },
      {
        "ko": "기사님이 방문해서 확인해 주실 수 있을까요? 가장 빠른 방문 일정이 언제인가요?",
        "en": "Could you send a technician to check it? What is the earliest available appointment?"
      },
      {
        "ko": "그리고 보증 기간 안에 있는 제품이면 수리비가 무료인지도 알려주세요. 감사합니다.",
        "en": "Also, could you tell me if the repair is free while the appliance is under warranty? Thank you."
      }
    ],
    "expressions": [
      ["wash cycle", "세탁 코스"],
      ["send a technician", "기사를 보내다"],
      ["under warranty", "보증 기간 내에"]
    ]
  },
  {
    "id": "appliance-roleplay-delivery",
    "topic": "Home Appliances",
    "label": "가전 · 배송 문제 롤플레이",
    "art": "On the phone.",
    "title": "When an appliance delivery is delayed",
    "subtitle": "Finding a solution to a missed delivery date.",
    "question": "You ordered an appliance, but it has not arrived. Call the store and suggest solutions.",
    "questionKo": "주문한 가전제품이 도착하지 않았습니다. 매장에 전화해 해결 방법을 제시하세요.",
    "paragraphs": [
      {
        "ko": "안녕하세요. 지난주에 전자레인지를 주문했는데 배송 문제로 전화드렸어요.",
        "en": "Hi, I ordered a microwave last week, and I am calling about a delivery problem."
      },
      {
        "ko": "어제 도착할 예정이었는데 아직 받지 못했어요. 배송 조회 정보도 업데이트되지 않았어요.",
        "en": "It was supposed to arrive yesterday, but I still have not received it. The tracking information has not been updated either."
      },
      {
        "ko": "배송 상태를 확인해 주실 수 있을까요? 가능하면 이번 주 안에 받고 싶어요.",
        "en": "Could you please check the delivery status? If possible, I would like to receive it by the end of this week."
      },
      {
        "ko": "그게 어렵다면 주문을 취소하고 환불받을 수 있을까요? 도움 주셔서 감사합니다.",
        "en": "If that is not possible, could I cancel the order and get a refund? Thank you for your help."
      }
    ],
    "expressions": [
      ["be supposed to arrive", "도착할 예정이었다"],
      ["tracking information", "배송 조회 정보"],
      ["get a refund", "환불받다"]
    ]
  }
];
