import { sendToTelegram } from '../api/_lib/telegram.js'

export default async (request) => {
  if (request.method !== 'POST') {
    return Response.json({ ok: false, message: 'Метод не поддерживается' }, { status: 405 })
  }

  let body = {}
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, message: 'Некорректный JSON' }, { status: 400 })
  }

  const result = await sendToTelegram(
    { ...body, ip: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'netlify' },
    {
      token: process.env.TELEGRAM_BOT_TOKEN,
      chatId: process.env.TELEGRAM_CHAT_ID,
    },
  )

  return Response.json({ ok: result.ok, message: result.message }, { status: result.code })
}