(() => {
  'use strict';
  const lessons = window.LESSONS;
  const $ = (id) => document.getElementById(id);
  const storageKey = 'everyday-journal-v1';
  let saved = new Set();
  let explored = new Set();
  let storageAvailable = true;
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}');
    saved = new Set(Array.isArray(data.saved) ? data.saved : []);
    explored = new Set(Array.isArray(data.explored) ? data.explored : []);
  } catch { storageAvailable = false; }
  let active = lessons.find((lesson) => lesson.id === location.hash.slice(1)) || lessons[0];
  let topic = 'All stories';
  let mode = 'script';

  function announce(message) { $('status').textContent = message; }
  function persist() {
    try { localStorage.setItem(storageKey, JSON.stringify({ saved: [...saved], explored: [...explored] })); }
    catch { storageAvailable = false; }
    if (!storageAvailable) $('storage-note').textContent = '이 브라우저에서는 기록을 저장할 수 없습니다.';
  }
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function updateProgress() {
    const count = lessons.filter((lesson) => explored.has(lesson.id)).length;
    $('progress').max = lessons.length;
    $('progress').value = count;
    $('progress-count').textContent = `${count} / ${lessons.length}`;
  }
  function updateBookmark() {
    const isSaved = saved.has(active.id);
    $('bookmark').textContent = isSaved ? '★ Saved' : '☆ Save story';
    $('bookmark').setAttribute('aria-pressed', String(isSaved));
  }
  function updateRevealLabel() {
    const allOpen = [...$('paragraphs').children].every((node) => node.open);
    $('reveal-all').textContent = allOpen ? '영문 모두 숨기기 ↗' : '영문 모두 보기 ↗';
  }
  function renderParagraphs() {
    $('paragraphs').replaceChildren();
    $('reader-hint').textContent = mode === 'script'
      ? '먼저 영어로 떠올려 보세요. 각 문단을 누르면 영어 예문이 펼쳐집니다.'
      : '질문에 직접 답해 본 뒤, 아래 문단을 눌러 영어 예문과 비교해 보세요.';
    const lessonId = active.id;
    active.paragraphs.forEach((paragraph, i) => {
      const details = element('details');
      const summary = element('summary');
      summary.append(element('span', 'paragraph-number', String(i + 1).padStart(2, '0')),
        element('span', 'paragraph-ko', mode === 'script' ? paragraph.ko : `Sample answer · Part ${i + 1}`),
        element('span', 'toggle', '+'));
      summary.lastChild.setAttribute('aria-hidden', 'true');
      const english = element('p', 'paragraph-en', paragraph.en);
      english.lang = 'en';
      details.append(summary, english);
      details.addEventListener('toggle', () => {
        if (details.open) {
          explored.add(lessonId);
          persist();
          updateProgress();
          renderList();
        }
        updateRevealLabel();
      });
      $('paragraphs').append(details);
    });
    updateRevealLabel();
  }
  function renderTopics() {
    $('topics').replaceChildren();
    ['All stories', ...new Set(lessons.map((lesson) => lesson.topic))].forEach((name) => {
      const button = element('button', '', name);
      button.setAttribute('aria-current', String(name === topic));
      button.addEventListener('click', () => {
        topic = name;
        renderTopics();
        renderList();
        const first = filteredLessons()[0];
        if (first && !filteredLessons().some((lesson) => lesson.id === active.id)) select(first);
      });
      $('topics').append(button);
    });
  }
  function filteredLessons() {
    const query = $('search').value.trim().toLowerCase();
    return lessons.filter((lesson) => (topic === 'All stories' || lesson.topic === topic)
      && (!$('saved-only').checked || saved.has(lesson.id))
      && [lesson.title, lesson.topic, lesson.label, lesson.questionKo].join(' ').toLowerCase().includes(query));
  }
  function renderList() {
    $('story-list').replaceChildren();
    const matches = filteredLessons();
    if (!matches.length) $('story-list').append(element('p', 'empty', '해당하는 기사가 없습니다. 검색어나 필터를 바꿔보세요.'));
    matches.forEach((lesson) => {
      const button = element('button', 'story-link');
      button.setAttribute('aria-current', String(lesson.id === active.id));
      button.append(element('span', 'story-topic', lesson.topic), element('span', 'story-title', lesson.title),
        element('span', 'story-meta', `${lesson.label}${explored.has(lesson.id) ? ' · 읽어봄' : ''}${saved.has(lesson.id) ? ' · ★' : ''}`));
      button.addEventListener('click', () => select(lesson, true));
      $('story-list').append(button);
    });
  }
  function renderArticle() {
    document.title = `${active.title} | The Everyday Journal`;
    $('category').textContent = `${active.topic} / Everyday perspectives`;
    $('headline').textContent = active.title;
    $('subtitle').textContent = active.subtitle;
    $('art-word').textContent = active.art;
    $('reading-time').textContent = '2 min read';
    $('question-en').textContent = active.question;
    $('question-ko').textContent = active.questionKo;
    $('expressions').replaceChildren();
    active.expressions.forEach(([english, korean]) => {
      const item = element('div', 'expression');
      const phrase = element('strong', '', english);
      phrase.lang = 'en';
      item.append(phrase, element('span', '', korean));
      $('expressions').append(item);
    });
    $('story-number').textContent = `${String(lessons.indexOf(active) + 1).padStart(2, '0')} / ${String(lessons.length).padStart(2, '0')}`;
    updateBookmark();
    renderParagraphs();
    renderList();
  }
  function select(lesson, scroll = false) {
    active = lesson;
    if (location.hash !== `#${lesson.id}`) location.hash = lesson.id;
    renderArticle();
    announce(`${lesson.title} 기사를 선택했습니다.`);
    if (scroll) {
      $('headline').tabIndex = -1;
      $('headline').focus({ preventScroll: true });
      $('article').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  $('bookmark').addEventListener('click', () => {
    if (saved.has(active.id)) saved.delete(active.id); else saved.add(active.id);
    persist(); updateBookmark(); renderList();
    announce(saved.has(active.id) ? '기사를 저장했습니다.' : '저장을 해제했습니다.');
  });
  $('reveal-all').addEventListener('click', () => {
    const nodes = [...$('paragraphs').children];
    const open = !nodes.every((node) => node.open);
    nodes.forEach((node) => { node.open = open; });
    updateRevealLabel();
  });
  document.querySelectorAll('[data-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      mode = button.dataset.mode;
      document.querySelectorAll('[data-mode]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      renderParagraphs();
    });
  });
  $('search').addEventListener('input', renderList);
  $('saved-only').addEventListener('change', renderList);
  $('previous').addEventListener('click', () => select(lessons[(lessons.indexOf(active) - 1 + lessons.length) % lessons.length], true));
  $('next').addEventListener('click', () => select(lessons[(lessons.indexOf(active) + 1) % lessons.length], true));
  $('random').addEventListener('click', () => {
    const candidates = filteredLessons().filter((lesson) => lesson.id !== active.id);
    if (candidates.length) select(candidates[Math.floor(Math.random() * candidates.length)], true);
    else announce('현재 필터에서 선택할 다른 기사가 없습니다.');
  });
  window.addEventListener('hashchange', () => {
    const lesson = lessons.find((item) => item.id === location.hash.slice(1));
    if (lesson && lesson.id !== active.id) { active = lesson; renderArticle(); }
  });
  $('date').textContent = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date());
  renderTopics(); renderArticle(); updateProgress();
  if (!storageAvailable) $('storage-note').textContent = '이 브라우저에서는 기록을 저장할 수 없습니다.';
})();
