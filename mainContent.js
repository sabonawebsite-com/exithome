// Dynamically generates the <main> content for the exam portal

const exams = [
  {
    url: "https://sabomarara.github.io/indivexam/",
    icon: "📊",
    title: "Collections of Exams",
    desc: "Practice with sample tests"
  },
  {
    url: "https://sabonawebsite-com.github.io/mode-exam/",
    icon: "📝",
    title: "Official Exit Exam",
    desc: "Final assessment portal"
  },
  {
    url: "https://sabonawebsite-com.github.io/funQuize/",
    icon: "🎯",
    title: "Modules",
    desc: "Subject-specific tests"
  },
  {
    url: "https://sabonawebsite-com.github.io/programming/",
    icon: "💻",
    title: "Programming Tests",
    desc: "Coding challenges"
  },
  {
    url: "https://sabonawebsite-com.github.io/allExitExam/",
    icon: "🧑🏻‍🎓👇🏾",
    title: "1000 questions",
    desc: "All Exit Exam"
  }
];

function createExamListItem(exam) {
  const li = document.createElement('li');
  li.className = 'exam-item';

  const a = document.createElement('a');
  a.href = exam.url;
  a.className = 'exam-link';

  const icon = document.createElement('span');
  icon.className = 'exam-icon';
  icon.textContent = exam.icon;

  const title = document.createElement('span');
  title.className = 'exam-title';
  title.textContent = exam.title;

  const desc = document.createElement('span');
  desc.className = 'exam-desc';
  desc.textContent = exam.desc;

  a.appendChild(icon);
  a.appendChild(title);
  a.appendChild(desc);
  li.appendChild(a);

  return li;
}

function renderMainContent() {
  const main = document.createElement('main');
  main.className = 'content';

  const section = document.createElement('section');
  section.className = 'intro-section';
  section.innerHTML = `<p>Select an exam category below to begin your assessment:</p>`;

  const nav = document.createElement('nav');
  nav.className = 'exam-nav';

  const ul = document.createElement('ul');
  ul.className = 'exam-list';

  exams.forEach(exam => {
    ul.appendChild(createExamListItem(exam));
  });

  nav.appendChild(ul);
  main.appendChild(section);
  main.appendChild(nav);

  // Replace existing main or append if not present
  const oldMain = document.querySelector('main.content');
  if (oldMain) {
    oldMain.replaceWith(main);
  } else {
    document.body.appendChild(main);
  }
}

// Run after DOM is loaded
document.addEventListener('DOMContentLoaded', renderMainContent);



