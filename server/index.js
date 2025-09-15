import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config()

const app = express()
app.use(express.json())

const allowOrigin = process.env.ALLOW_ORIGIN || '*'
app.use(cors({ origin: allowOrigin === '*' ? true : allowOrigin }))

const botToken = process.env.TELEGRAM_BOT_TOKEN
const defaultChatId = process.env.TELEGRAM_CHAT_ID

if (!botToken) {
  console.warn('[telegram] TELEGRAM_BOT_TOKEN is not set. Requests will fail until configured.')
}
if (!defaultChatId) {
  console.warn('[telegram] TELEGRAM_CHAT_ID is not set. Requests will fail until configured.')
}

app.post('/api/telegram/send', async (req, res) => {
  try {
    const { message, chatId, parseMode } = req.body || {}

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'Message is required' })
    }

    const finalChatId = chatId || defaultChatId
    if (!botToken || !finalChatId) {
      return res.status(500).json({ ok: false, error: 'Server is missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID' })
    }

    const tgResp = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: finalChatId,
        text: message,
        parse_mode: parseMode || 'HTML',
      }),
    })

    const tgJson = await tgResp.json()

    if (!tgResp.ok || !tgJson.ok) {
      return res.status(502).json({ ok: false, error: tgJson.description || 'Telegram API error', telegram: tgJson })
    }

    return res.json({ ok: true, telegram: tgJson })
  } catch (err) {
    console.error('[telegram] Error sending message:', err)
    return res.status(500).json({ ok: false, error: err.message || 'Unexpected error' })
  }
})

const port = process.env.PORT || 5001
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})


