@echo off
cd /d D:\ПРОЕКТЫ ПРОГРАММ\Умелый говорун\project
node -e "
const fs = require('fs');
const p = 'src/main.js';
let c = fs.readFileSync(p, 'utf8');
const start = c.indexOf('function initCoursesAccordion() {');
const end = c.indexOf('function initCarousel() {');
const newFunc = 'function initCoursesAccordion() {' + '\n' +
'  const container = document.getElementById(\"courses-accordion\")' + '\n' +
'  if (!container) return' + '\n\n' +
'  const articles = container.querySelectorAll(\"article[data-course]\")' + '\n\n' +
'  articles.forEach((article) => {' + '\n' +
'    const content = article.querySelector(\"[id^=\\\"course-content-\\\"]\")' + '\n' +
'    const inner = content?.querySelector(\"p\")' + '\n' +
'    if (inner) {' + '\n' +
'      article.dataset.height = inner.scrollHeight + \"px\"' + '\n' +
'    }' + '\n' +
'  })' + '\n\n' +
'  container.addEventListener(\"click\", (e) => {' + '\n' +
'    const button = e.target.closest(\"button[aria-controls^=\\\"course-content-\\\"]\")' + '\n' +
'    if (!button) return' + '\n\n' +
'    const article = button.closest(\"article[data-course]\")' + '\n' +
'    if (!article) return' + '\n\n' +
'    e.stopPropagation()' + '\n' +
'    e.preventDefault()' + '\n\n' +
'    const isOpen = article.classList.contains(\"open\")' + '\n' +
'    const arrow = button.querySelector(\".accordion-arrow\")' + '\n' +
'    const targetHeight = article.dataset.height || \"0px\"' + '\n' +
'    const content = article.querySelector(\"[id^=\\\"course-content-\\\"]\")' + '\n\n' +
'    const allArticles = container.querySelectorAll(\"article[data-course]\")' + '\n' +
'    allArticles.forEach((other) => {' + '\n' +
'      if (other !== article) {' + '\n' +
'        other.classList.remove(\"open\")' + '\n' +
'        const otherContent = other.querySelector(\"[id^=\\\"course-content-\\\"]\")' + '\n' +
'        const otherButton = other.querySelector(\"button\")' + '\n' +
'        const otherArrow = otherButton?.querySelector(\".accordion-arrow\")' + '\n' +
'        if (otherContent) {' + '\n' +
'          otherContent.style.maxHeight = \"0\"' + '\n' +
'        otherContent.style.opacity = \"0\"' + '\n' +
'        }' + '\n' +
'        if (otherButton) otherButton.setAttribute(\"aria-expanded\", \"false\")' + '\n' +
'        if (otherArrow) otherArrow.classList.remove(\"rotate-180\")' + '\n' +
'      }' + '\n' +
'    })' + '\n\n' +
'    if (article.classList.contains(\"open\")) {' + '\n' +
'      article.classList.remove(\"open\")' + '\n' +
'      const content = article.querySelector(\"[id^=\\\"course-content-\\\"]\")' + '\n' +
'      if (content) {' + '\n' +
'        content.style.maxHeight = \"0\"' + '\n' +
'        content.style.opacity = \"0\"' + '\n' +
'      }' + '\n' +
'      button.setAttribute(\"aria-expanded\", \"false\")' + '\n' +
'      const arrow = button.querySelector(\".accordion-arrow\")' + '\n' +
'      arrow?.classList.remove(\"rotate-180\")' + '\n' +
'    } else {' + '\n' +
'      article.classList.add(\"open\")' + '\n' +
'      const content = article.querySelector(\"[id^=\\\"course-content-\\\"]\")' + '\n' +
'      const targetHeight = article.dataset.height || \"0px\"' + '\n' +
'      if (content) {' + '\n' +
'        content.style.maxHeight = targetHeight' + '\n' +
'        content.style.opacity = \"1\"' + '\n' +
'      }' + '\n' +
'      button.setAttribute(\"aria-expanded\", \"true\")' + '\n' +
'      const arrow = button.querySelector(\".accordion-arrow\")' + '\n' +
'      arrow?.classList.add(\"rotate-180\")' + '\n' +
'    }' + '\n' +
'  })' + '\n\n' +
'  container.addEventListener(\"keydown\", (e) => {' + '\n' +
'    const button = e.target.closest(\"button[aria-controls^=\\\"course-content-\\\"]\")' + '\n' +
'    if (!button) return' + '\n\n' +
'    if (e.key === \"Enter\" || e.key === \" \") {' + '\n' +
'      e.preventDefault()' + '\n' +
'      e.stopPropagation()' + '\n' +
'      button.click()' + '\n' +
'    }' + '\n' +
'  })' + '\n' +
'}';

const b = fs.readFileSync('src/main.js', 'utf8');
const start = c.indexOf('function initCoursesAccordion() {');
const end = c.indexOf('function initCarousel() {');
const before = c.slice(0, c.indexOf('function initCoursesAccordion() {'));
const after = c.slice(c.indexOf('function initCarousel() {'));
fs.writeFileSync('src/main.js', before + newFunc + '\n' + c.slice(c.indexOf('function initCarousel() {')));
console.log('Fixed!');
"