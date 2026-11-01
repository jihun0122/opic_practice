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
  }
];
