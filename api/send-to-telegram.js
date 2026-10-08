import { sendToTelegram } from './_lib/telegram.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, message: 'Метод не поддерживается' })
  }

  const result = await sendToTelegram(
    {
      ...(req.body ?? {}),
      ip: req.headers['x-forwarded-for']?.split(',')[0]?.trim() ?? req.socket?.remoteAddress,
    },
    {
      token: process.env.TELEGRAM_BOT_TOKEN,
      chatId: process.env.TELEGRAM_CHAT_ID,
    },
  )

  return res.status(result.code).json({ ok: result.ok, message: result.message })
}