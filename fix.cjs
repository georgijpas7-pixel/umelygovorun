const fs = require('fs');
const p = 'src/main.js';
const c = fs.readFileSync(p, 'utf8');

const newFunc = `function initCoursesAccordion() {
  const container = document.getElementById("courses-accordion")
  if (!container) return

  const articles = container.querySelectorAll("article[data-course]")

  // Pre-calculate heights for all content
  articles.forEach((article) => {
    const content = article.querySelector('[id^="course-content-"]')
    const inner = content?.querySelector("p")
    if (inner) {
      article.dataset.height = inner.scrollHeight + "px"
    }
  })

  // Single delegated click handler on container
  container.addEventListener("click", (e) => {
    const button = e.target.closest('button[aria-controls^="course-content-"]')
    if (!button) return

    const article = button.closest("article[data-course]")
    if (!article) return

    e.stopPropagation()
    e.preventDefault()

    const isOpen = article.classList.contains("open")
    const arrow = button.querySelector(".accordion-arrow")
    const targetHeight = article.dataset.height || "0px"
    const content = article.querySelector('[id^="course-content-"]')

    // Close all other articles
    const allArticles = container.querySelectorAll("article[data-course]")
    allArticles.forEach((other) => {
      if (other !== article) {
        other.classList.remove("open")
        const otherContent = other.querySelector('[id^="course-content-"]')
        const otherButton = other.querySelector("button")
        const otherArrow = otherButton?.querySelector(".accordion-arrow")
        if (otherContent) {
          otherContent.style.maxHeight = "0"
          otherContent.style.opacity = "0"
        }
        if (otherButton) otherButton.setAttribute("aria-expanded", "false")
        if (otherArrow) otherArrow.classList.remove("rotate-180")
      }
    })

    // Toggle current
    if (article.classList.contains("open")) {
      article.classList.remove("open")
      const content = article.querySelector('[id^="course-content-"]')
      if (content) {
        content.style.maxHeight = "0"
        content.style.opacity = "0"
      }
      button.setAttribute("aria-expanded", "false")
      const arrow = button.querySelector(".accordion-arrow")
      arrow?.classList.remove("rotate-180")
    } else {
      article.classList.add("open")
      const content = article.querySelector('[id^="course-content-"]')
      const targetHeight = article.dataset.height || "0px"
      if (content) {
        content.style.maxHeight = targetHeight
        content.style.opacity = "1"
      }
      button.setAttribute("aria-expanded", "true")
      const arrow = button.querySelector(".accordion-arrow")
      arrow?.classList.add("rotate-180")
    }
  })

  // Keyboard support
  container.addEventListener("keydown", (e) => {
    const button = e.target.closest('button[aria-controls^="course-content-"]')
    if (!button) return

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      e.stopPropagation()
      button.click()
    }
  })
}`;

const content = fs.readFileSync('src/main.js', 'utf8');
const start = content.indexOf('function initCoursesAccordion() {');
const end = content.indexOf('function initCarousel() {');

if (start !== -1 && end !== -1) {
  const before = content.slice(0, content.indexOf('function initCoursesAccordion() {'));
  const after = content.slice(content.indexOf('function initCarousel() {'));
  fs.writeFileSync('src/main.js', before + newFunc + '\n' + content.slice(content.indexOf('function initCarousel() {')));
  console.log('Fixed!');
} else {
  console.log('Markers not found');
}