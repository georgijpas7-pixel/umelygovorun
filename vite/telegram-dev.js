import { loadEnv } from 'vite'
import { sendToTelegram } from '../api/_lib/telegram.js'

function readEnv(mode) {
  return loadEnv(mode, process.cwd(), '')
}

/**
 * Dev-сервер не запускает серверлесс-функции, поэтому подменяем
 * /api/send-to-telegram локальным middleware.
 */
export function telegramDevPlugin() {
  return {
    name: 'telegram-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/send-to-telegram', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          return res.end(JSON.stringify({ ok: false, message: 'Метод не поддерживается' }))
        }

        const chunks = []
        for await (const chunk of req) chunks.push(chunk)

        let payload = {}
        try {
          payload = JSON.parse(Buffer.concat(chunks).toString('utf8'))
        } catch {
          res.statusCode = 400
          return res.end(JSON.stringify({ ok: false, message: 'Некорректный JSON' }))
        }

        const env = readEnv(server.config.mode)
        const result = await sendToTelegram(
          { ...payload, ip: req.socket.remoteAddress },
          { token: env.TELEGRAM_BOT_TOKEN, chatId: env.TELEGRAM_CHAT_ID },
        )

        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.statusCode = result.code
        res.end(JSON.stringify({ ok: result.ok, message: result.message }))
      })
    },
  }
}