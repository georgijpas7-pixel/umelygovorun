import './style.css'

const COURSES = [
  {
    title: 'Говорим красиво (Сценическая речь)',
    text: 'Помогаем детям услышать звучание своего голоса, определить его природный «цвет» и раскрасить новыми красками.\nУчим правильно дышать и управлять силой голоса.\nРазвиваем навык четко выстраивать мысли и выделять главное.\nИзбавляем от «каши во рту» и учим удерживать контакт со слушателями.',
    color: 'from-emerald-300 to-emerald-400',
    bg: 'bg-emerald-100',
  },
  {
    title: 'Выступаем ярко (Актерское мастерство)',
    text: 'Актерские тренинги - это лучший инструмент для формирования сильного характера, гибкого мышления и уверенности.\nУчим справляться с волнением и полностью избавляем от телесных зажимов.\nПоказываем, как умело управлять своим телом, развиваем внимание и фантазию.\nПомогаем экологично справляться с сильными эмоциями.',
    color: 'from-rose-300 to-rose-400',
    bg: 'bg-rose-100',
  },
  {
    title: 'Культура речи (Искусство самопрезентации)',
    text: 'Современный лидер должен уметь увлекательно рассказывать о себе и своих идеях, чтобы его хотелось слушать.\nУчим создавать яркие, захватывающие истории (почему меня стоит выслушать?).\nПрорабатываем личную самопрезентацию ребенка: как уверенно зайти в новый класс, познакомиться, заявить о себе.\nГотовим детей к выступлениям в стиле детского TED-talk.',
    color: 'from-amber-300 to-amber-400',
    bg: 'bg-amber-100',
  },
  {
    title: 'Живем гармонично (Психологическое сопровождение)',
    text: 'Младший школьный возраст - период серьезных внутренних кризисов. Наш курс включает мягкую психологическую поддержку.\nЧерез метод сказкотерапии профессиональный психолог помогает ребенку проработать скрытые страхи и внутренние проблемы.\nУчим управлять своим поведением и конструктивно общаться со сверстниками.\nРазвиваем инициативность и помогаем бережно выражать свои переживания.',
    color: 'from-violet-300 to-violet-400',
    bg: 'bg-violet-100',
  },
]

const ADVANTAGES = [
  { title: 'Театральные педагоги', text: 'Актёры и режиссёры театра, знают, как разбудить талант' },
  { title: 'Мини-группы по 10-12 человек', text: 'Каждый ребёнок проявляет себя каждый урок - никто не остается за кулисами' },
  { title: 'Только через игру и упражнения', text: 'Никаких лекций: импровизация, упражнения, театр теней' },
  { title: 'Мини-проект в финале каждого модуля', text: 'Родители видят результат в реальных проектах, а не в отчёте' },
]

const GRADUATES = [
  { img: '/carousel-1.jpg', alt: '' },
  { img: '/carousel-2.jpg', alt: '' },
  { img: '/carousel-3.jpg', alt: '' },
  { img: '/carousel-4.jpg', alt: '' },
  { img: '/carousel-5.jpg', alt: '' },
  { img: '/carousel-6.jpg', alt: '' },
  { img: '/carousel-7.jpg', alt: '' },
  { img: '/carousel-8.jpg', alt: '' },
  { img: '/carousel-9.jpg', alt: '' },
  { img: '/carousel-10.jpg', alt: '' },
  { img: '/carousel-11.jpg', alt: '' },
  { img: '/carousel-12.jpg', alt: '' },
  { img: '/carousel-13.jpg', alt: '' },
  { img: '/carousel-14.jpg', alt: '' },
  { img: '/carousel-15.jpg', alt: '' },
  { img: '/carousel-16.jpg', alt: '' },
  { img: '/carousel-17.jpg', alt: '' },
]

const app = document.getElementById('app')
app.innerHTML = `
  <header class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-white to-amber-50/50"></div>
    <div class="pointer-events-none absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-rose-300/30 blur-3xl"></div>
    <div class="pointer-events-none absolute top-40 -left-32 -z-10 h-80 w-80 rounded-full bg-amber-300/25 blur-3xl"></div>

    <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:flex-row flex-col sm:items-center gap-4">
      <a href="#" class="flex flex-col items-center gap-0 text-center sm:flex-row sm:gap-2 sm:items-center">
        <picture>
          <source type="image/avif" srcset="/images/yg-logo.avif">
          <source type="image/webp" srcset="/images/yg-logo.webp">
          <img src="/images/yg-logo.jpg" alt="Умелый Говорун" class="h-10 w-10" />
        </picture>
        <span class="text-2xl font-extrabold tracking-tight">Умелый&nbsp;Говорун</span>
        <span class="text-2xl sm:text-3xl font-extrabold text-rose-600 -mt-1 whitespace-nowrap">В Черкесске</span>
      </a>
      <a href="#zapis" class="btn-brand px-8 py-4 text-lg font-extrabold animate-pulse-ring bg-rose-500 hover:bg-rose-600 shadow-lg shadow-rose-500/40 w-full sm:w-auto text-center">Идёт запись в группы по возрасту</a>
    </nav>

    <div class="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-2 lg:pb-28 lg:pt-16">
      <div class="animate-fade-up">
        <h1 class="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Учим детей
          <span class="bg-gradient-to-r from-rose-500 to-amber-600 bg-clip-text text-transparent">
            держаться уверенно
          </span>
          и говорить так, чтобы слушали
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 text-balance">
          Умелый говорун - развивающие занятия для детей 6-11 лет: актёрское мастерство, культура речи, голос и сценическая речь.
          Мы поможем раскрыть сильные стороны, снять публичную стеснительность и научим ребенка красиво рассказывать о себе.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a href="#zapis" class="btn-brand">Отправить заявку</a>
          <a href="#programmy" class="btn-ghost">Дисциплины курса</a>
        </div>
      </div>

      <div class="relative lg:block">
        <div class="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-rose-200/50 to-amber-300/30 blur-2xl hidden lg:block"></div>
        <div class="relative animate-pop rounded-[2rem] overflow-hidden shadow-2xl">
          <picture>
            <source type="image/avif" srcset="/images/girl-glasses.avif">
            <source type="image/webp" srcset="/images/girl-glasses.webp">
            <img src="/images/girl-glasses.png" alt="Девочка в очках на занятии" class="w-full h-[380px] lg:h-[420px] object-cover" loading="lazy">
          </picture>
          <div class="absolute inset-0 bg-gradient-to-t from-rose-500/20 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  </header>

  <section class="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50/50 py-12 lg:py-16">
    <div class="pointer-events-none absolute -top-20 -right-20 -z-10 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl"></div>
    <div class="pointer-events-none absolute bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl"></div>

    <div class="mx-auto max-w-4xl px-5 relative z-10">
      <div class="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/70 shadow-2xl p-8 lg:p-12 animate-fade-up">
        <p class="text-rose-600 font-semibold text-sm tracking-wider uppercase mb-4">Научно доказано</p>
        <p class="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight mb-6">
          «Мы родом из детства» - это не просто красивые слова
        </p>
        <div class="prose prose-gray max-w-none text-gray-700 leading-relaxed">
          <p class="mb-4">Научно доказано: восприятие окружающего мира, уверенность в себе и базовые жизненные программы закладываются в человеке в детстве.</p>
          <p class="mb-4 font-bold">Экспресс-курс для учащихся начальных классов (6–11 лет) - «Умелый Говорун».</p>
          <p>Наша цель - развить в ребёнке коммуникативную инициативу, смелость и лидерскую харизму, а также помочь ему легко справляться с возрастными кризисами младшего школьного возраста.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="programmy" class="bg-gray-50 py-20 lg:py-28">
    <div class="mx-auto max-w-6xl px-5">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Дисциплины курса</h2>
        <p class="mt-4 text-lg text-gray-600">
          4 грани курса: как мы растим будущих лидеров. Мы объединили четыре мощных направления в одну систему, чтобы ваш ребенок раскрылся на все 100%:
        </p>
      </div>

      <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-start" id="courses-accordion">
        ${COURSES.map(
          (c, i) => `
          <article class="rounded-2xl ${c.bg} ${c.color} text-gray-900 hover:shadow-xl" data-course="${i}" style="min-height: 180px;">
            <button class="w-full p-6 lg:p-7 text-left focus:outline-none h-full" aria-expanded="false" aria-controls="course-content-${i}">
              <div class="flex items-center justify-between h-full">
                <h3 class="text-lg lg:text-xl font-extrabold leading-snug flex-1 flex items-center">${c.title}</h3>
                <svg class="w-5 h-5 text-gray-500 transition-transform duration-300 accordion-arrow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </button>
            <div id="course-content-${i}" class="overflow-hidden transition-all duration-300 ease-out max-h-0 opacity-0 px-6 pb-0" role="region" aria-labelledby="course-heading-${i}">
              <p class="text-sm leading-relaxed text-gray-700 pb-6 whitespace-pre-wrap">${c.text}</p>
            </div>
          </article>`,
        ).join('')}
      </div>
    </div>
  </section>

  <section id="format" class="py-20 lg:py-28 bg-gray-50">
    <div class="mx-auto max-w-6xl px-5">
      <div class="mx-auto max-w-2xl text-center mb-12">
        <h2 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Формат и условия обучения</h2>
        <p class="mt-4 text-lg text-gray-600">
          Мы гарантируем глубокий индивидуальный подход к каждому будущему лидеру, поэтому формат занятий только очно и количество мест строго ограничено.
        </p>
      </div>

      <div class="mx-auto max-w-3xl">
        <div class="rounded-3xl bg-white p-8 lg:p-12 shadow-xl border border-gray-100 shadow-rose-100/50">
          <div class="space-y-6">
            <div class="flex items-center gap-3 p-4 rounded-2xl bg-rose-50 border border-rose-100">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-rose-100 text-rose-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </span>
              <div>
                <h3 class="font-bold text-gray-900">Возраст</h3>
                <p class="text-sm text-gray-600">6–11 лет (учащиеся начальных классов)</p>
              </div>
            </div>

            <div class="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-100">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 text-amber-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </span>
              <div>
                <h3 class="font-bold text-gray-900">Группы</h3>
                <p class="text-sm text-gray-600">всего по 10–12 человек</p>
              </div>
            </div>

            <div class="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </span>
              <div>
                <h3 class="font-bold text-gray-900">Интенсивность</h3>
                <p class="text-sm text-gray-600">2 раза в неделю</p>
              </div>
            </div>

            <div class="flex items-center gap-3 p-4 rounded-2xl bg-violet-50 border border-violet-100">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-violet-100 text-violet-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </span>
              <div>
                <h3 class="font-bold text-gray-900">Объем курса</h3>
                <p class="text-sm text-gray-600">64 академических часа (мощный экспресс-курс, рассчитанный на 2 месяца глубокой работы)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 lg:py-28">
    <div class="mx-auto max-w-6xl px-5">
      <div class="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Почему приходят к нам
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            Мы не учим заученным фразам. Даём ребёнку инструменты: голос, тело, воображение, смелость.
            Создаём пространство, где можно ошибаться, пробовать, находить себя и звучать по-своему.
          </p>
          <a href="#zapis" class="btn-brand mt-8">Отправить заявку</a>
        </div>

        <ul class="grid gap-5 sm:grid-cols-2">
          ${ADVANTAGES.map(
            (a) => `
            <li class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 class="font-bold">${a.title}</h3>
              <p class="mt-1.5 text-sm leading-relaxed text-gray-600">${a.text}</p>
            </li>`,
          ).join('')}
        </ul>
      </div>
    </div>
  </section>

  <section id="results" class="py-20 lg:py-28">
    <div class="mx-auto max-w-6xl px-5">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div class="relative">
          <div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-rose-100 to-amber-100 blur-2xl"></div>
          <picture>
            <source type="image/avif" srcset="/images/charismatic-child.avif">
            <source type="image/webp" srcset="/images/charismatic-child.webp">
            <img src="/images/charismatic-child.png" alt="Харизматичный ребёнок на сцене" class="relative rounded-[2rem] w-full aspect-[4/5] object-cover shadow-2xl" loading="lazy">
          </picture>
        </div>

        <div>
          <h2 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Что получает ребёнок за курс
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            За 2 месяца занятий обычные мальчишки и девчонки становятся лидерами, способны уверенно держаться перед камерой.
          </p>

<ul class="mt-8 space-y-5">
            <li class="flex items-start gap-4">
              <div>
                <h3 class="font-bold">Свобода на сцене и перед камерой</h3>
                <p class="mt-1 text-sm text-gray-600">Преодолевает страх публики, уверенно представляет себя и свои идеи</p>
              </div>
            </li>

            <li class="flex items-start gap-4">
              <div>
                <h3 class="font-bold">Чёткая, красивая речь</h3>
                <p class="mt-1 text-sm text-gray-600">Правильное произношение, интонация, проекция голоса - звучит убедительно</p>
              </div>
            </li>

            <li class="flex items-start gap-4">
              <div>
                <h3 class="font-bold">Эмоциональный интеллект</h3>
                <p class="mt-1 text-sm text-gray-600">Понимает свои чувства, умеет их выражать, общается с людьми легко</p>
              </div>
            </li>

            <li class="flex items-start gap-4">
              <div>
                <h3 class="font-bold">Актёрское мастерство и творчество</h3>
                <p class="mt-1 text-sm text-gray-600">Импровизация, создание образов, работа в команде - навыки для жизни</p>
              </div>
            </li>

            <li class="flex items-start gap-4">
              <div>
                <h3 class="font-bold">Проект и съёмки презентации</h3>
                <p class="mt-1 text-sm text-gray-600">Финальный проект: ребёнок показывает всё, чему научился, в финальном видео.</p>
              </div>
            </li>
          </ul>

          <a href="#zapis" class="btn-brand mt-8 inline-block">Отправить заявку</a>
        </div>
      </div>
    </div>
  </section>

  <section id="graduates" class="py-20 lg:py-28 bg-white">
    <div class="mx-auto max-w-6xl px-5">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Фото наших звездочек:</h2>
        <p class="mt-4 text-lg text-gray-600">
          Более 500 детей за 10 лет успешно прошли курс "Умелый Говорун"
        </p>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <div id="carousel" class="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-100 aspect-square max-w-[600px] mx-auto">
          <div id="carousel-track" class="flex transition-transform duration-700 ease-out h-full">
            ${GRADUATES.map((g, i) => {
              const img = g.img.replace('/', '/images/');
              const base = img.replace(/\.(jpg|jpeg|png)$/i, '');
              return `
              <div class="w-full flex-shrink-0 h-full relative" data-index="${i}">
                <picture>
                  <source type="image/avif" srcset="${base}.avif">
                  <source type="image/webp" srcset="${base}.webp">
                  <img src="${img}" alt="${g.alt}" class="w-full h-full object-cover" loading="lazy">
                </picture>
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <p class="text-sm lg:text-base font-medium">${g.alt}</p>
                </div>
              </div>
            `}).join('')}
          </div>

          <button id="carousel-prev" class="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-xl transition-all hover:scale-110" aria-label="Предыдущий">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button id="carousel-next" class="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-xl transition-all hover:scale-110" aria-label="Следующий">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>

        <div class="flex justify-center gap-2 mt-8" id="carousel-dots" role="tablist" aria-label="Фото учеников">
          ${GRADUATES.map((_, i) => `
            <button class="w-2.5 h-2.5 rounded-full transition-all ${i === 0 ? 'bg-rose-500 w-8' : 'bg-gray-300 hover:bg-rose-300'}" 
                    data-index="${i}" 
                    role="tab" 
                    aria-selected="${i === 0}"
                    aria-label="Фото ${i + 1}"></button>
          `).join('')}
        </div>
      </div>
    </div>
  </section>

  <section id="zapis" class="relative overflow-hidden bg-gray-50 py-20 lg:py-28">
    <div class="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-rose-300/25 blur-3xl"></div>

    <div class="mx-auto max-w-6xl px-5">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
          Приходите на бесплатную консультацию
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Мы перезвоним по указанному номеру в течение рабочего дня.
        </p>
        </div>

      <form id="lead-form" novalidate class="mx-auto mt-12 max-w-xl rounded-3xl border border-gray-200 bg-white p-7 shadow-xl sm:p-9">
        <div class="space-y-5">
          <div>
            <label for="name" class="label">ФИО родителя</label>
            <input id="name" name="name" type="text" autocomplete="name"
                   placeholder="Иванова Мария Петровна" class="field" />
            <p class="hint-error" data-error-for="name"></p>
          </div>

          <div>
            <label for="email" class="label">Электронная почта</label>
            <input id="email" name="email" type="email" autocomplete="email"
                   placeholder="you@example.com" class="field" />
            <p class="hint-error" data-error-for="email"></p>
          </div>

          <div>
            <label for="phone" class="label">Телефон</label>
            <input id="phone" name="phone" type="tel" autocomplete="tel" inputmode="tel"
                   placeholder="+7 (___) ___-__-__" class="field" />
            <p class="hint-error" data-error-for="phone"></p>
          </div>
        </div>

        <button type="submit" class="btn-brand mt-7 w-full" data-submit>
          <span data-submit-text>Отправить заявку</span>
        </button>

        <p class="mt-4 text-center text-xs leading-relaxed text-gray-500">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
        </p>
      </form>
    </div>
  </section>

  <footer class="border-t border-gray-200 py-10">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
      <p class="font-bold">Умелый говорун</p>
      <p class="text-2xl font-extrabold text-rose-600">В Черкесске</p>
      <p class="text-sm text-gray-500">Развивающие занятия для дошкольников и младших классов.</p>
      <a href="tel:+79931635282" class="text-sm font-medium text-rose-600 hover:underline">+7 993 163 52 82</a>
    </div>
  </footer>

  <div id="toast-root" aria-live="polite"></div>
`

const form = document.querySelector('#lead-form')

initPhoneMask()
initForm()
initSmoothScroll()

function initPhoneMask() {
  const input = document.querySelector('#phone')
  if (!input) return

  const format = (value) => {
    const digits = value.replace(/\D/g, '')
    const normalized = digits.startsWith('8')
      ? `7${digits.slice(1)}`
      : digits.startsWith('7')
        ? digits
        : `7${digits}`
    const rest = normalized.slice(1)

    let out = '+7'
    if (rest.length) out += ` (${rest.slice(0, 3)}`
    if (rest.length > 3) out += `) ${rest.slice(3, 6)}`
    if (rest.length > 6) out += `-${rest.slice(6, 8)}`
    if (rest.length > 8) out += `-${rest.slice(8, 10)}`
    return out
  }

  input.addEventListener('input', () => {
    input.value = format(input.value)
    clearFieldError(input)
  })

  input.addEventListener('focus', () => {
    if (!input.value) input.value = '+7 ('
  })

  input.addEventListener('blur', () => {
    if (input.value.replace(/\D/g, '').length <= 1) input.value = ''
  })
}

function validate(data) {
  const errors = {}

  const name = data.name.trim()
  if (!name) {
    errors.name = 'Пожалуйста, укажите ФИО'
  } else if (name.length < 5) {
    errors.name = 'Укажите ФИО полностью - имя и фамилия'
  } else if (!/[А-Яа-яЁё]/.test(name)) {
    errors.name = 'Введите текстом на русском языке'
  }

  const email = data.email.trim()
  if (!email) {
    errors.email = 'Укажите электронную почту'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = 'Проверьте формат почты'
  }

  const digits = data.phone.replace(/\D/g, '')
  if (!digits) {
    errors.phone = 'Укажите номер телефона'
  } else if (digits.length !== 11) {
    errors.phone = 'Введите номер полностью: +7 и 10 цифр'
  }

  return errors
}

function clearFieldError(input) {
  const hint = form.querySelector(`[data-error-for="${input.name}"]`)
  if (hint) hint.classList.add('hidden')
  input.classList.remove('field-error')
  input.removeAttribute('aria-invalid')
}

function showErrors(errors) {
  clearAllErrors()
  let firstInvalid = null

  for (const [name, message] of Object.entries(errors)) {
    const input = form.elements[name]
    const hint = form.querySelector(`[data-error-for="${name}"]`)
    if (!input || !hint) continue

    hint.textContent = message
    hint.classList.remove('hidden')
    input.classList.add('field-error')
    input.setAttribute('aria-invalid', 'true')
    firstInvalid ??= input
  }

  firstInvalid?.focus()
}

function clearAllErrors() {
  form.querySelectorAll('[data-error-for]').forEach((el) => el.classList.add('hidden'))
  form.querySelectorAll('.field-error').forEach((el) => {
    el.classList.remove('field-error')
    el.removeAttribute('aria-invalid')
  })
}

function initForm() {
  const button = form.querySelector('[data-submit]')
  const buttonText = form.querySelector('[data-submit-text]')

  form.querySelectorAll('.field').forEach((input) => {
    input.addEventListener('input', () => clearFieldError(input))
  })

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const data = Object.fromEntries(new FormData(form))
    const errors = validate(data)

    if (Object.keys(errors).length) {
      showErrors(errors)
      showToast('Проверьте выделенные поля', 'error')
      return
    }

    button.disabled = true
    buttonText.textContent = 'Отправляем...'

try {
        const response = await fetch('/api/send-to-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name.trim(),
            email: data.email.trim(),
            phone: data.phone.trim(),
            page: location.href,
          }),
        })

        const result = await response.json().catch(() => ({}))

        if (!response.ok || !result.ok) {
          throw new Error(result.message || `HTTP ${response.status}`)
        }

        form.reset()
        clearAllErrors()
        
        // Success animation
        button.classList.remove('bg-brand-500', 'hover:bg-brand-600', 'hover:shadow-xl', 'hover:-translate-y-0.5', 'shadow-lg', 'shadow-brand-500/30')
        button.classList.add('bg-gray-400', 'cursor-not-allowed')
        button.style.transition = 'all 0.3s ease'
        button.disabled = true
        buttonText.textContent = 'Отправлено'
        
        // Scale animation
        button.style.transform = 'scale(0.98)'
        setTimeout(() => {
          button.style.transform = 'scale(1)'
        }, 150)
        
        showToast('Готово! Мы скоро вам перезвоним для подтверждения консультации', 'success')
      } catch (error) {
        console.error(error)
        showToast(error.message || 'Не удалось отправить. Позвоните нам, пожалуйста', 'error')
      } finally {
        // On error, reset button state
        if (!button.classList.contains('bg-gray-400')) {
          button.disabled = false
          buttonText.textContent = 'Отправить заявку'
        }
      }
  })
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'))
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

function showToast(message, type = 'info') {
  const root = document.querySelector('#toast-root')

  const colors = {
    success: 'bg-emerald-500',
    error: 'bg-red-500',
    info: 'bg-gray-900',
  }

  const toast = document.createElement('div')
  toast.className =
    `fixed bottom-6 right-6 left-6 z-50 max-w-sm ml-auto animate-pop rounded-2xl px-5 py-4 font-medium text-white shadow-2xl ${colors[type]}`
  toast.textContent = message
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status')

  root.append(toast)

  setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transition = 'opacity 0.3s ease'
    setTimeout(() => toast.remove(), 300)
  }, 4500)
}

function initCoursesAccordion() {
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
}
function initCarousel() {
  const track = document.getElementById('carousel-track')
  const prevBtn = document.getElementById('carousel-prev')
  const nextBtn = document.getElementById('carousel-next')
  const dotsContainer = document.getElementById('carousel-dots')

  if (!track || !prevBtn || !nextBtn || !dotsContainer) return

  const slides = track.querySelectorAll('[data-index]')
  const dots = dotsContainer.querySelectorAll('[data-index]')
  const total = slides.length
  let current = 0
  let autoplayTimer = null
  let isDragging = false
  let startX = 0
  let currentTranslate = 0

  const goToSlide = (index, animate = true) => {
    current = (index + total) % total
    const translateX = -current * 100
    track.style.transition = animate ? 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
    track.style.transform = `translateX(${translateX}%)`

    dots.forEach((dot, i) => {
      const active = i === current
      dot.style.width = active ? '1.5rem' : '0.625rem'
      dot.style.backgroundColor = active ? 'rgb(244 63 94)' : 'rgb(209 213 219)'
      dot.setAttribute('aria-selected', active)
    })
  }

  const nextSlide = () => goToSlide(current + 1)
  const prevSlide = () => goToSlide(current - 1)

  const startAutoplay = () => {
    stopAutoplay()
    autoplayTimer = setInterval(nextSlide, 5000)
  }

  const stopAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer)
    autoplayTimer = null
  }

  prevBtn.addEventListener('click', () => {
    prevSlide()
    stopAutoplay()
    startAutoplay()
  })

  nextBtn.addEventListener('click', () => {
    nextSlide()
    stopAutoplay()
    startAutoplay()
  })

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.index))
      stopAutoplay()
      startAutoplay()
    })
  })

  track.addEventListener('mousedown', (e) => {
    isDragging = true
    startX = e.clientX
    currentTranslate = -current * 100
    track.style.transition = 'none'
    stopAutoplay()
  })

  track.addEventListener('touchstart', (e) => {
    isDragging = true
    startX = e.touches[0].clientX
    currentTranslate = -current * 100
    track.style.transition = 'none'
    stopAutoplay()
  })

  const handleMove = (clientX) => {
    if (!isDragging) return
    const diff = clientX - startX
    const threshold = track.offsetWidth / 4
    const dragPercent = (diff / track.offsetWidth) * 100
    track.style.transform = `translateX(${currentTranslate + dragPercent}%)`
  }

  track.addEventListener('mousemove', (e) => handleMove(e.clientX))
  track.addEventListener('touchmove', (e) => handleMove(e.touches[0].clientX))

  const handleEnd = (clientX) => {
    if (!isDragging) return
    isDragging = false
    const diff = clientX - startX
    const threshold = track.offsetWidth / 5

    if (diff > threshold) prevSlide()
    else if (diff < -threshold) nextSlide()
    else goToSlide(current)

    track.style.transition = 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    startAutoplay()
  }

  track.addEventListener('mouseup', (e) => handleEnd(e.clientX))
  track.addEventListener('mouseleave', () => {
    if (isDragging) handleEnd(startX)
  })
  track.addEventListener('touchend', (e) => handleEnd(e.changedTouches[0].clientX))

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay()
    else startAutoplay()
  })

  startAutoplay()
  goToSlide(0, false)
}

setTimeout(initCoursesAccordion, 0)

initCarousel()