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
  }
];
