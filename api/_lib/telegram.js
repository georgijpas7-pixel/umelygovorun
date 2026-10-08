const TELEGRAM_API = 'https://api.telegram.org/bot'
const TELEGRAM_TIMEOUT_MS = 8000

// Rate limiting (in-memory, per instance)
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_LIMIT_MAX = 10 // max requests per window per IP
const rateLimit = new Map()

const BLACKLIST = [
  //маты
  'бля', 'бляд', 'блядь', 'бляди', 'блядище', 'блядун', 'блядуны',
  'хуй', 'хуя', 'хуе', 'хуи', 'хуйня', 'хуйни', 'хуевина', 'хуевина',
  'пизда', 'пизде', 'пизду', 'пизды', 'пиздюк', 'пиздюки', 'пиздатый',
  'ебать', 'ебёт', 'ебану', 'ебал', 'ебана', 'ебаное', 'ебанутый',
  'сука', 'суки', 'сукины', 'сукин', 'сучара', 'сучарка',
  'еблан', 'ебланы', 'ебланский', 'ебланская',
  'пидор', 'пидоры', 'пидорас', 'пидорасы', 'пидорок', 'пидорки',
  'гондон', 'гондоны', 'гондонский',
  'мразь', 'мрази', 'мразота',
  'уёбищ', 'уёбища', 'уебищ',
  'залуп', 'залупы', 'залупный',
  'пошло', 'пошлая', 'пошлое', 'пошлый',
  'блядство', 'блядства', 'блядствовать',
  'ебани', 'ебанись', 'ебань',
  'пиздит', 'пиздит', 'пиздатый',
  'хуёвый', 'хуёвая', 'хуёвое', 'хуёвые',
  'ёбаный', 'ёбанная', 'ёбанное', 'ёбанные',
  'сучара', 'сучари',
  'мудак', 'мудаки', 'мудацкий',
  'долбоёб', 'долбоёбы', 'долбоёбский',
  'охуел', 'охуела', 'охуели', 'охуевший',
  'обосрал', 'обосрала', 'обосрали',
  'подъебался', 'подъебалась', 'подъебались',
  'наебал', 'наебала', 'наебали',
  'проёбал', 'проебала', 'проебали',
  'разъёбался', 'разъебалась', 'разъебались',
  'уёбищ', 'уёбища',
  'наебенился', 'наебенилась', 'наебенились',
  'объебался', 'объебалась', 'объебались',
  'подъебался', 'подъебалась', 'подъебались',
  'наебенился', 'наебенилась', 'наебенились',
  'объебся', 'объебалась', 'объебались',
  'наебнулся', 'наебнулась', 'наебнулись',
  'проёбался', 'проебалась', 'проебались',
  'разъебался', 'разъебалась', 'разъебались',
  'уёбищ', 'уёбища',
  'наебенился', 'наебенилась', 'наебенились',
  'объебся', 'объебалась', 'объебались',
  'наебнулся', 'наебнулась', 'наебнулись',
  'проёбался', 'проебалась', 'проебались',
  'разъебался', 'разъебалась', 'разъебались',
  'уёбищ', 'уёбища',
  'наебенился', 'наебенилась', 'наебенились',
  'объебся', 'объебалась', 'объебались',
  'наебнулся', 'наебнулась', 'наебнулись',
  'проёбался', 'проебалась', 'проебались',
  'разъебались', 'разъебалась', 'разъебались',
  'уёбищ', 'уёбища',
  'наебенился', 'наебенилась', 'наебенились',
  'объебся', 'объебалась', 'объебались',
  'наебнулся', 'наебнулась', 'наебнулись',
  'проёбался', 'проебалась', 'проебались',
  'разъебались', 'разъебалась', 'разъебались',
  // имена политиков
  'путин', 'путина', 'путину', 'путиным',
  'медведев', 'медведева', 'медведеву', 'медведевым',
  ' navale', 'навальный', 'навального', 'навальному', 'навальным',
  'прутин', 'прутину', 'прутиным',
  'шойгу', 'шойгу', 'шойгу',
  'лавров', 'лаврова', 'лаврову', 'лавровым',
  'патриошка', 'патриошки',
  'сечин', 'сечина', 'сечину', 'сечиным',
  'мшустин', 'мшустина', 'мшустину', 'мшустиным',
  'кадыров', 'кадырова', 'кадырову', 'кадыровым',
  'володин', 'володина', 'володину', 'володиным',
  'матвиенко', 'матвиенко', 'матвиенко',
  'неечаев', 'неечаева', 'неечаеву', 'неечаевым',
  'патриошка', 'патриошки', 'патриошка',
  'зюганов', 'зюганова', 'зюганову', 'зюгановым',
  'миронов', 'миронова', 'миронову', 'мироновым',
  'яблоков', 'яблокова', 'яблокову', 'яблоковым',
  'славина', 'славиной', 'славиной',
  'гусев', 'гусева', 'гусеву', 'гусевым',
  'терешкова', 'терешковой', 'терешковой',
  'петров', 'петрова', 'петрову', 'петровым',
  'фургал', 'фургала', 'фургалу', 'фургалым',
  'кононов', 'кононова', 'кононову', 'кононовым',
  'беглов', 'беглова', 'беглову', 'бегловым',
  'трамп', 'трампа', 'трампу', 'трампом',
  'байден', 'байдена', 'байдену', 'байденом',
  'зеленский', 'зеленского', 'зеленскому', 'зеленским',
  'макрон', 'макрона', 'макрону', 'макроном',
  'шольц', 'шольца', 'шольцу', 'шольцем',
  'сунк', 'сунка', 'сунку', 'сунком',
  'си', 'кси', 'си', 'си',
  'erdogan', 'ердоган', 'ердоган', 'ердогану', 'ердоганом',
  'netanyahu', 'нетаньяху', 'нетаньяху', 'нетаньяху', 'нетаньяху',
  'lukashenko', 'лукашенко', 'лукашенко', 'лукашенко', 'лукашенко',
  'putin', 'putina', 'putinu', 'putinym',
  'medvedev', 'medvedeva', 'medvedevu', 'medvedevym',
  'navalny', 'navalnogo', 'navalnomu', 'navalnym',
  'zelensky', 'zelenskogo', 'zelenskomu', 'zelenskym',
  'biden', 'bidena', 'bidenu', 'bidenom',
  'trump', 'trampa', 'trampu', 'trampom',
  'macron', 'macrona', 'macronu', 'macronom',
  'scholz', 'scholza', 'scholzu', 'scholzem',
  'merkel', 'merkel', 'merkeli', 'merkel',
  'johnson', 'johnsona', 'johnsonu', 'johnsonom',
  'sunak', 'sunaka', 'sunku', 'sunkam',
  'modi', 'modi', 'modi', 'modi',
  'xi', 'xi', 'xi', 'xi',
  'kim', 'kima', 'kimu', 'kimom',
  'jung', 'junga', 'jungu', 'jungeom',
  'un', 'un', 'un', 'un',
  'kishida', 'kishida', 'kishida', 'kishida',
  'albanese', 'albanese', 'albanese', 'albanese',
  'trudeau', 'trudeau', 'trudeau', 'trudeau',
  'meloni', 'meloni', 'meloni', 'meloni',
  'milei', 'milei', 'milei', 'milei',
  'bukele', 'bukele', 'bukele', 'bukele',
  'orban', 'orbana', 'orbanu', 'orbanom',
  'fico', 'fico', 'fico', 'fico',
  'georgieva', 'georgieva', 'georgieva', 'georgieva',
  'lagarde', 'lagarde', 'lagarde', 'lagarde',
  'baerbock', 'baerbock', 'baerbock', 'baerbock',
  'scholz', 'scholza', 'scholzu', 'scholzem',
  'habeck', 'habeck', 'habeck', 'habeck',
  'lindner', 'lindner', 'lindner', 'lindner',
  'pistorius', 'pistoriusa', 'pistoriusu', 'pistoriusom',
  'faeser', 'faeser', 'faeser', 'faeser',
  'lammy', 'lammy', 'lammy', 'lammy',
  'reynolds', 'reynolds', 'reynolds', 'reynolds',
  'starmer', 'starmer', 'starmer', 'starmer',
  'biden', 'bidena', 'bidenu', 'bidenom',
  'harris', 'harris', 'harris', 'harris',
  'walz', 'walz', 'walz', 'walz',
  'vance', 'vance', 'vance', 'vance',
  'trump', 'trumpa', 'trumpu', 'trampom',
  'pence', 'pence', 'pence', 'pence',
  'haley', 'haley', 'haley', 'haley',
  'desantis', 'desantis', 'desantis', 'desantis',
  'ramaswamy', 'ramaswamy', 'ramaswamy', 'ramaswamy',
  'christie', 'christie', 'christie', 'christie',
  'scott', 'scott', 'scott', 'scott',
  'youngkin', 'youngkin', 'youngkin', 'youngkin',
  'abbott', 'abbotta', 'abbottu', 'abbottom',
  'newsom', 'newsoma', 'newsomu', 'newsomom',
  'desantis', 'desantis', 'desantis', 'desantis',
  'haley', 'haley', 'haley', 'haley',
  'scott', 'scott', 'scott', 'scott',
  'ramaswamy', 'ramaswamy', 'ramaswamy', 'ramaswamy',
  'christie', 'christie', 'christie', 'christie',
  'burgum', 'burguma', 'burgumu', 'burgumom',
  'hutchinson', 'hutchinson', 'hutchinson', 'hutchinson',
  'suarez', 'suareza', 'suarezu', 'suarezom',
  'elder', 'elder', 'elder', 'elder',
  'steele', 'steele', 'steele', 'steele',
  'hurd', 'hurd', 'hurd', 'hurd',
  'williams', 'williams', 'williams', 'williams',
  'cotton', 'cotton', 'cotton', 'cotton',
  'cornyn', 'cornyn', 'cornyn', 'cornyn',
  'cruz', 'cruza', 'cruzu', 'cruzo',
  'graham', 'grahama', 'grahamu', 'grahamom',
  'hagerty', 'hagerty', 'hagerty', 'hagerty',
  'blackburn', 'blackburn', 'blackburn', 'blackburn',
  'barasso', 'barasso', 'barasso', 'barasso',
  'barrasso', 'barrassoa', 'barrassou', 'barrassom',
  'thune', 'thune', 'thune', 'thune',
  'cornyn', 'cornyn', 'cornyn', 'cornyn',
  'cramer', 'cramera', 'crameru', 'cramerom',
  'daines', 'daines', 'daines', 'daines',
  'ernst', 'ernst', 'ernst', 'ernst',
  'fischer', 'fischer', 'fischer', 'fischer',
  'haaland', 'haaland', 'haaland', 'haaland',
  'hawley', 'hawley', 'hawley', 'hawley',
  'hyde-smith', 'hyde-smith', 'hyde-smith', 'hyde-smith',
  'johnson', 'johnsona', 'johnsonu', 'johnsonom',
  'kennedy', 'kennedya', 'kennedyu', 'kennedyom',
  'king', 'king', 'king', 'king',
  'klobuchar', 'klobuchar', 'klobuchar', 'klobuchar',
  'lankford', 'lankford', 'lankford', 'lankford',
  'lee', 'lee', 'lee', 'lee',
  'luna', 'luna', 'luna', 'luna',
  'mccormick', 'mccormick', 'mccormick', 'mccormick',
  'marshall', 'marshall', 'marshall', 'marshall',
  'moran', 'moran', 'moran', 'moran',
  'murkowski', 'murkowskaja', 'murkowsku', 'murkowskim',
  'murphy', 'murphy', 'murphy', 'murphy',
  'os', 'os', 'os', 'os',
  'padilla', 'padilla', 'padilla', 'padilla',
  'peters', 'peters', 'peters', 'peters',
  'petersen', 'petersen', 'petersen', 'petersen',
  'pett', 'pett', 'pett', 'pett',
  'reed', 'reed', 'reed', 'reed',
  'rick', 'rick', 'rick', 'rick',
  'romney', 'romney', 'romney', 'romney',
  'rosc', 'rosc', 'rosc', 'rosc',
  'rubio', 'rubio', 'rubio', 'rubio',
  'ricketts', 'ricketts', 'ricketts', 'ricketts',
  'romney', 'romney', 'romney', 'romney',
  'rugg', 'rugg', 'rugg', 'rugg',
  'ricketts', 'ricketts', 'ricketts', 'ricketts',
  'romney', 'romney', 'romney', 'romney',
  'scott', 'scott', 'scott', 'scott',
  'shaheen', 'shaheen', 'shaheen', 'shaheen',
  'sinema', 'sinema', 'sinema', 'sinema',
  'smith', 'smith', 'smith', 'smith',
  'thune', 'thune', 'thune', 'thune',
  'tillis', 'tillis', 'tillis', 'tillis',
  'tuberville', 'tuberville', 'tuberville', 'tuberville',
  'vance', 'vance', 'vance', 'vance',
  'warner', 'warner', 'warner', 'warner',
  'warnock', 'warnock', 'warnock', 'warnock',
  'wheeler', 'wheeler', 'wheeler', 'wheeler',
  'whitmer', 'whitmer', 'whitmer', 'whitmer',
  'wicker', 'wicker', 'wicker', 'wicker',
  'wicker', 'wicker', 'wicker', 'wicker',
  'wyden', 'wyden', 'wyden', 'wyden',
  'young', 'young', 'young', 'young'
]

function containsBlacklist(text) {
  const lower = text.toLowerCase()
  return BLACKLIST.some(word => lower.includes(word))
}

function checkRateLimit(ip) {
  const now = Date.now()
  const hits = (rateLimit.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)

  if (hits.length >= RATE_LIMIT_MAX) return false

  hits.push(now)
  rateLimit.set(ip, hits)
  return true
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  )
}

export function validate(payload) {
  const name = String(payload?.name ?? '').trim()
  const email = String(payload?.email ?? '').trim()
  const phone = String(payload?.phone ?? '').trim()

  if (name.length < 5 || name.length > 200) return { error: 'Некорректное ФИО' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200)
    return { error: 'Некорректная почта' }
  if (phone.replace(/\D/g, '').length !== 11) return { error: 'Некорректный телефон' }

  return { name, email, phone }
}

export function buildMessage({ name, email, phone, page }) {
  const stamp = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })

  return [
    '🎯 <b>Новая заявка с сайта</b>',
    '',
    `👤 <b>ФИО:</b> ${escapeHtml(name)}`,
    `📧 <b>Почта:</b> ${escapeHtml(email)}`,
    `📞 <b>Телефон:</b> ${escapeHtml(phone)}`,
    page ? `🔗 <b>Страница:</b> ${escapeHtml(String(page).slice(0, 300))}` : null,
    '',
    `🕐 <i>${stamp}</i>`,
  ]
    .filter(Boolean)
    .join('\n')
}

export async function sendToTelegram(payload, { token, chatId }) {
  const fields = validate(payload)
  if (fields.error) return { ok: false, code: 400, message: fields.error }

  // Blacklist check - TEMPORARILY DISABLED FOR DEBUGGING
  // const checkText = `${payload.name} ${payload.email} ${payload.phone}`.toLowerCase()
  // if (containsBlacklist(checkText)) {
  //   return { ok: false, code: 400, message: 'Недопустимое содержание' }
  // }

  if (!token || !chatId) {
    return { ok: false, code: 500, message: 'Сервер не настроен: TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID' }
  }

  if (!checkRateLimit(payload.ip ?? 'unknown')) {
    return { ok: false, code: 429, message: 'Слишком много заявок. Попробуйте позже.' }
  }

  const text = buildMessage({ ...fields, page: payload.page })

  let response
  try {
    response = await fetch(`${TELEGRAM_API}${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
    })
  } catch (error) {
    console.error('Telegram request failed:', error)
    return { ok: false, code: 502, message: 'Telegram недоступен' }
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    console.error('Telegram API error:', response.status, detail)

    if (response.status === 403) {
      return { ok: false, code: 502, message: 'Бот не может писать в группу — проверьте его права' }
    }

    return { ok: false, code: 502, message: 'Telegram отклонил запрос' }
  }

  return { ok: true, code: 200, message: 'Заявка отправлена' }
}